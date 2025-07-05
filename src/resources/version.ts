// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Version extends APIResource {
  /**
   * Get version
   */
  retrieve(
    params: VersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionRetrieveResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get('/version', {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface VersionRetrieveResponse {
  version: string;
}

export interface VersionRetrieveParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export declare namespace Version {
  export {
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionRetrieveParams as VersionRetrieveParams,
  };
}
