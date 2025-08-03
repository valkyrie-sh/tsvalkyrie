// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from '../jobs';
import * as ExecutionsJobsAPI from './jobs';
import { Job, JobCancelParams, JobCancelResponse, JobDeleteParams, Jobs } from './jobs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Executions extends APIResource {
  jobs: ExecutionsJobsAPI.Jobs = new ExecutionsJobsAPI.Jobs(this._client);

  /**
   * Get execution result by id
   */
  retrieve(execID: number, options?: RequestOptions): APIPromise<ExecutionResult> {
    return this._client.get(path`/executions/${execID}`, options);
  }

  /**
   * Get all executions
   */
  list(
    query: ExecutionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionListResponse> {
    return this._client.get('/executions', { query, ...options });
  }

  /**
   * Execute a script
   */
  execute(params: ExecutionExecuteParams, options?: RequestOptions): APIPromise<ExecutionExecuteResponse> {
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
   * Get execution config
   */
  retrieveConfig(options?: RequestOptions): APIPromise<ExecutionRetrieveConfigResponse> {
    return this._client.get('/execution/config', options);
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

export interface ExecutionListParams {
  /**
   * The current position of the cursor
   */
  cursor?: number;

  /**
   * The limit for the records
   */
  limit?: number;
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
  extension?: string;

  /**
   * Body param:
   */
  files?: Array<ExecutionExecuteParams.File>;

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
  timeout?: number;

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

  export interface File {
    content: string;

    name: string;
  }
}

Executions.Jobs = Jobs;

export declare namespace Executions {
  export {
    type ExecutionResult as ExecutionResult,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionExecuteResponse as ExecutionExecuteResponse,
    type ExecutionRetrieveConfigResponse as ExecutionRetrieveConfigResponse,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionExecuteParams as ExecutionExecuteParams,
  };

  export {
    Jobs as Jobs,
    type Job as Job,
    type JobCancelResponse as JobCancelResponse,
    type JobDeleteParams as JobDeleteParams,
    type JobCancelParams as JobCancelParams,
  };
}
