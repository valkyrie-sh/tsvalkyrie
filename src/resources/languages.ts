// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LanguageVersionsAPI from './language-versions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Languages extends APIResource {
  /**
   * Retrieve a language entry from the database using its ID.
   */
  retrieve(
    id: number,
    params: LanguageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LanguageRetrieveResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get(path`/languages/${id}`, {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a list of all languages from the database.
   */
  list(
    params: LanguageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LanguageListResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get('/languages', {
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
  retrieveVersions(
    id: number,
    params: LanguageRetrieveVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LanguageRetrieveVersionsResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get(path`/languages/${id}/versions`, {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface Language {
  /**
   * Unique identifier for the language version
   */
  id: number;

  default_code: string;

  extension: string;

  monaco_language: string;

  name: string;

  /**
   * The default template for the language
   */
  template: string;
}

export interface LanguageRetrieveResponse {
  language: Language;
}

export interface LanguageListResponse {
  languages: Array<Language>;
}

export interface LanguageRetrieveVersionsResponse {
  languageVersions: Array<LanguageVersionsAPI.LanguageVersion>;
}

export interface LanguageRetrieveParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export interface LanguageListParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export interface LanguageRetrieveVersionsParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export declare namespace Languages {
  export {
    type Language as Language,
    type LanguageRetrieveResponse as LanguageRetrieveResponse,
    type LanguageListResponse as LanguageListResponse,
    type LanguageRetrieveVersionsResponse as LanguageRetrieveVersionsResponse,
    type LanguageRetrieveParams as LanguageRetrieveParams,
    type LanguageListParams as LanguageListParams,
    type LanguageRetrieveVersionsParams as LanguageRetrieveVersionsParams,
  };
}
