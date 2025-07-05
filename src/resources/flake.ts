// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Flake extends APIResource {
  /**
   * Fetches flake of a given job
   */
  retrieve(jobID: number, options?: RequestOptions): APIPromise<FlakeRetrieveResponse> {
    return this._client.get(path`/flake/${jobID}`, options);
  }
}

export interface FlakeRetrieveResponse {
  flake: string;
}

export declare namespace Flake {
  export { type FlakeRetrieveResponse as FlakeRetrieveResponse };
}
