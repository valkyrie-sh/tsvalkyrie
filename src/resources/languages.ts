// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LanguageVersionsAPI from './language-versions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Languages extends APIResource {
  /**
   * Retrieve a language entry from the database using its ID.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<LanguageRetrieveResponse> {
    return this._client.get(path`/languages/${id}`, options);
  }

  /**
   * Retrieve a list of all languages from the database.
   */
  list(options?: RequestOptions): APIPromise<LanguageListResponse> {
    return this._client.get('/languages', options);
  }

  /**
   * Retrieve a list of all language versions from the database.
   */
  retrieveVersions(id: number, options?: RequestOptions): APIPromise<LanguageRetrieveVersionsResponse> {
    return this._client.get(path`/languages/${id}/versions`, options);
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

export declare namespace Languages {
  export {
    type Language as Language,
    type LanguageRetrieveResponse as LanguageRetrieveResponse,
    type LanguageListResponse as LanguageListResponse,
    type LanguageRetrieveVersionsResponse as LanguageRetrieveVersionsResponse,
  };
}
