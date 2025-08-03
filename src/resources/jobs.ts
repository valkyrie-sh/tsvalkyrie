// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ExecutionsAPI from './executions/executions';
import * as ExecutionsJobsAPI from './executions/jobs';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Get all execution jobs
   */
  listExecutions(
    query: JobListExecutionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobListExecutionsResponse> {
    return this._client.get('/jobs/execution', { query, ...options });
  }

  /**
   * Get executions of given job
   */
  retrieveJobExecutions(
    jobID: number,
    query: JobRetrieveJobExecutionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobRetrieveJobExecutionsResponse> {
    return this._client.get(path`/jobs/${jobID}/executions`, { query, ...options });
  }
}

export interface Pagination {
  /**
   * Represents the start of the cursor
   */
  cursor: number;

  /**
   * Represents the number of items per page.
   */
  limit: number;

  /**
   * Represents the total number of items.
   */
  total: number;
}

export interface JobListExecutionsResponse {
  jobs: Array<ExecutionsJobsAPI.Job>;

  pagination: Pagination;
}

export interface JobRetrieveJobExecutionsResponse {
  executions: Array<ExecutionsAPI.ExecutionResult>;

  pagination: Pagination;
}

export interface JobListExecutionsParams {
  /**
   * The current position of the cursor
   */
  cursor?: number;

  /**
   * The limit for the records
   */
  limit?: number;
}

export interface JobRetrieveJobExecutionsParams {
  /**
   * The current position of the cursor
   */
  cursor?: number;

  /**
   * The limit for the records
   */
  limit?: number;
}

export declare namespace Jobs {
  export {
    type Pagination as Pagination,
    type JobListExecutionsResponse as JobListExecutionsResponse,
    type JobRetrieveJobExecutionsResponse as JobRetrieveJobExecutionsResponse,
    type JobListExecutionsParams as JobListExecutionsParams,
    type JobRetrieveJobExecutionsParams as JobRetrieveJobExecutionsParams,
  };
}
