// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Get execution job
   */
  retrieve(jobID: number, options?: RequestOptions): APIPromise<Job> {
    return this._client.get(path`/executions/jobs/${jobID}`, options);
  }

  /**
   * Delete execution job
   */
  delete(
    jobID: number,
    params: JobDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.delete(path`/executions/jobs/${jobID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Cancel Execution Job
   */
  cancel(
    jobID: number,
    params: JobCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobCancelResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.put(path`/executions/jobs/${jobID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface Job {
  created_at: string;

  flake: string;

  jobId: number;

  script: string;

  started_at?: string;

  updated_at?: string;
}

export interface JobCancelResponse {
  message: string;
}

export interface JobDeleteParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export interface JobCancelParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export declare namespace Jobs {
  export {
    type Job as Job,
    type JobCancelResponse as JobCancelResponse,
    type JobDeleteParams as JobDeleteParams,
    type JobCancelParams as JobCancelParams,
  };
}
