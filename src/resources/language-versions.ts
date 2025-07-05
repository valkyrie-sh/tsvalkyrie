// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LanguageVersions extends APIResource {
  /**
   * Retrieve a language version entry from the database using its ID.
   */
  retrieve(
    id: number,
    params: LanguageVersionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LanguageVersionRetrieveResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get(path`/language-versions/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a list of all language versions from the database.
   */
  list(
    params: LanguageVersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LanguageVersionListResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get('/language-versions', {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface LanguageVersion {
  /**
   * Unique identifier for the language version
   */
  id: number;

  /**
   * Whether this is the default version of the language
   */
  default_version: boolean;

  /**
   * Reference to the parent language
   */
  language_id: number;

  /**
   * Name of the Nix package
   */
  nix_package_name: string;

  /**
   * Search query string
   */
  search_query: string;

  template: string;

  /**
   * Version identifier of the language
   */
  version: string;
}

export interface LanguageVersionRetrieveResponse {
  language: LanguageVersion;
}

export interface LanguageVersionListResponse {
  languageVersions: Array<LanguageVersion>;
}

export interface LanguageVersionRetrieveParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export interface LanguageVersionListParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export declare namespace LanguageVersions {
  export {
    type LanguageVersion as LanguageVersion,
    type LanguageVersionRetrieveResponse as LanguageVersionRetrieveResponse,
    type LanguageVersionListResponse as LanguageVersionListResponse,
    type LanguageVersionRetrieveParams as LanguageVersionRetrieveParams,
    type LanguageVersionListParams as LanguageVersionListParams,
  };
}
