// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from '../jobs';
import * as ExecutionsJobsAPI from './jobs';
import { Job, JobCancelParams, JobCancelResponse, JobDeleteParams, JobRetrieveParams, Jobs } from './jobs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';
import { withWebSocketConnection } from '../websocket';
import { ExecutionWSMessage, ExecutionResponse } from './types';
export type ExecutionStatus = 'pending' | 'scheduled' | 'completed' | 'failed' | 'cancelled';
import { MessageEvent } from 'ws';

export class Executions extends APIResource {
  jobs: ExecutionsJobsAPI.Jobs = new ExecutionsJobsAPI.Jobs(this._client);

  /**
   * Get execution result by id
   */
  retrieve(
    execID: number,
    params: ExecutionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionResult> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get(path`/executions/${execID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get all executions
   */
  list(
    params: ExecutionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionListResponse> {
    const { 'X-Auth-Token': xAuthToken, ...query } = params ?? {};
    return this._client.get('/executions', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Execute a script
   */
  exec(params: ExecutionExecuteParams, options?: RequestOptions): APIPromise<ExecutionExecuteResponse> {
    const { 'X-Auth-Token': xAuthToken, ...body } = params;
    return this._client.post('/executions/execute', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * @param params - Parameters for the execution request, including 'X-Auth-Token'.
   * @param options - Additional request options for the HTTP POST.
   * @returns A promise that resolves with the final ExecutionStatus and output string.
   */
  async execute(params: ExecutionExecuteParams, options?: RequestOptions): Promise<ExecutionWSMessage> {
    const { 'X-Auth-Token': xAuthToken, ...body } = params;

    try {
      const resp = await this.exec(params, options);
      const jobId = resp.jobId;
      const execRes: ExecutionResponse = resp as any;
      const protocol = 'wss';
      const config_host = 'backend.evnix.cloud';
      const websocketUrl = `${protocol}://${config_host}${execRes.websocket}`;
      let currentStatus: ExecutionStatus = 'scheduled';
      let currentOutput: string = '';

      await withWebSocketConnection(websocketUrl, 30000, async (ws) => {
        ws.onmessage = (event: MessageEvent) => {
          try {
            const messageData: ExecutionWSMessage = JSON.parse(event.data.toString());
            currentStatus = messageData.status as ExecutionStatus;
            if (messageData.logs) {
              currentOutput = messageData.logs;
            } else if (messageData.errorMsg) {
              currentOutput = messageData.errorMsg;
            }
          } catch (e) {
            ws.close(1008, 'Protocol error: Invalid message format');
          }
        };

        while (!['completed', 'failed', 'cancelled'].includes(currentStatus)) {
          await new Promise((resolve) => setTimeout(resolve, 4000));
        }
      });

      return {
        status: currentStatus,
        logs: currentOutput,
        $typeName: 'execution.ExecutionWSMessage',
        jobId: resp.jobId,
      };
    } catch (e) {
      if (e instanceof Error) {
        const apiError = e as any;
        if (apiError.status && apiError.error) {
          return {
            status: 'failed',
            errorMsg: `API Error: ${apiError.status} - ${JSON.stringify(apiError.error)}`,
            $typeName: 'execution.ExecutionWSMessage',
            jobId: 0,
          };
        }
        return {
          status: 'failed',
          errorMsg: `Error: ${e.message}`,
          $typeName: 'execution.ExecutionWSMessage',
          jobId: 0,
        };
      }
      return {
        status: 'failed',
        errorMsg: `Unexpected error: ${String(e)}`,
        $typeName: 'execution.ExecutionWSMessage',
        jobId: 0,
      };
    }
  }

  /**
   * Get execution config
   */
  retrieveConfig(
    params: ExecutionRetrieveConfigParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionRetrieveConfigResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get('/execution/config', {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface ExecutionResult extends Omit<ExecutionsJobsAPI.Job, 'flake'> {
  exec_logs: string;

  execId: number;

  finished_at: string;

  started_at: string;

  flake?: string;

  nix_logs?: string;
}

export interface ExecutionListResponse {
  executions: Array<ExecutionResult>;

  pagination: JobsAPI.Pagination;
}

export interface ExecutionExecuteResponse {
  events: string;

  jobId: number;

  websocket: string;
}

export interface ExecutionRetrieveConfigResponse {
  /**
   * Represents the log level.
   */
  LOG_LEVEL: string;

  /**
   * Represents the buffer size for the worker.
   */
  WORKER_BUFFER_SIZE: number;

  /**
   * Represents the concurrency level for the worker.
   */
  WORKER_CONCURRENCY: number;

  /**
   * Represents the task timeout.
   */
  WORKER_MAX_TASK_TIMEOUT: number;

  /**
   * Represents the polling frequency for the worker in seconds.
   */
  WORKER_POLL_FREQ: number;

  /**
   * Represents the worker provider.
   */
  WORKER_PROVIDER: string;

  /**
   * Represents the runtime for the worker in seconds.
   */
  WORKER_RUNTIME: string;

  /**
   * Represents the base directory for the system provider.
   */
  SYSTEM_PROVIDER_BASE_DIR?: string;

  /**
   * Represents whether to clean up directories created by the system provider.
   */
  SYSTEM_PROVIDER_CLEAN_UP?: boolean;
}

export interface ExecutionRetrieveParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export interface ExecutionListParams {
  /**
   * Query param: The current position of the cursor
   */
  cursor?: number;

  /**
   * Query param: The limit for the records
   */
  limit?: number;

  /**
   * Header param: Authentication token
   */
  'X-Auth-Token'?: string;
}

export interface ExecutionExecuteParams {
  /**
   * Body param:
   */
  cmdLineArgs?: string;

  /**
   * Body param:
   */
  code?: string;

  /**
   * Body param:
   */
  command?: string;

  /**
   * Body param:
   */
  compilerArgs?: string;

  /**
   * Body param:
   */
  environment?: ExecutionExecuteParams.Environment;

  /**
   * Body param:
   */
  exec_timeout?: number;

  /**
   * Body param:
   */
  extension?: string;

  /**
   * Body param:
   */
  files?: string;

  /**
   * Body param:
   */
  input?: string;

  /**
   * Body param:
   */
  language?: string;

  /**
   * Body param:
   */
  max_retries?: number;

  /**
   * Body param:
   */
  version?: string;

  /**
   * Header param: Authentication token
   */
  'X-Auth-Token'?: string;
}

export namespace ExecutionExecuteParams {
  export interface Environment {
    environment_variables?: Array<Environment.EnvironmentVariable>;

    languageDependencies?: Array<string>;

    secrets?: { [key: string]: string };

    setup?: string;

    systemDependencies?: Array<string>;
  }

  export namespace Environment {
    export interface EnvironmentVariable {
      key?: string;

      value?: string;
    }
  }
}

export interface ExecutionRetrieveConfigParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

Executions.Jobs = Jobs;

export declare namespace Executions {
  export {
    type ExecutionResult as ExecutionResult,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionExecuteResponse as ExecutionExecuteResponse,
    type ExecutionRetrieveConfigResponse as ExecutionRetrieveConfigResponse,
    type ExecutionRetrieveParams as ExecutionRetrieveParams,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionExecuteParams as ExecutionExecuteParams,
    type ExecutionRetrieveConfigParams as ExecutionRetrieveConfigParams,
  };

  export {
    Jobs as Jobs,
    type Job as Job,
    type JobCancelResponse as JobCancelResponse,
    type JobRetrieveParams as JobRetrieveParams,
    type JobDeleteParams as JobDeleteParams,
    type JobCancelParams as JobCancelParams,
  };
}
