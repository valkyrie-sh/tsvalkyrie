// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Sandbox extends APIResource {
  /**
   * Create a sandbox
   *
   * @example
   * ```ts
   * const sandbox = await client.sandbox.create();
   * ```
   */
  create(
    params: SandboxCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxCreateResponse> {
    const { 'X-Auth-Token': xAuthToken, ...body } = params ?? {};
    return this._client.post('/sandbox', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve Sandbox details
   *
   * @example
   * ```ts
   * const sandbox = await client.sandbox.retrieve(0);
   * ```
   */
  retrieve(
    sandboxID: number,
    params: SandboxRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxRetrieveResponse> {
    const { 'X-Auth-Token': xAuthToken } = params ?? {};
    return this._client.get(path`/sandbox/${sandboxID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xAuthToken != null ? { 'X-Auth-Token': xAuthToken } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface SandboxCreateResponse {
  result: string;

  sandboxId: number;

  sandboxStatusSSE?: string;

  sandboxStatusWS?: string;
}

export type SandboxRetrieveResponse = SandboxRetrieveResponse.Sandbox | SandboxRetrieveResponse.SandboxState;

export namespace SandboxRetrieveResponse {
  export interface Sandbox {
    agentURL: string;

    created_at: string;

    sandboxId: number;

    state: string;

    URL: string;
  }

  export interface SandboxState {
    sandboxId: number;

    state: string;
  }
}

export interface SandboxCreateParams {
  /**
   * Body param: List of programming languages required in the sandbox
   */
  languages?: Array<string>;

  /**
   * Body param: Nix flake configuration for the sandbox environment
   */
  nix_flake?: string;

  /**
   * Body param: List of services to be added to the sandbox
   */
  services?: Array<string>;

  /**
   * Body param: List of system-level dependencies needed in the sandbox
   */
  system_dependencies?: Array<string>;

  /**
   * Header param: Authentication token
   */
  'X-Auth-Token'?: string;
}

export interface SandboxRetrieveParams {
  /**
   * Authentication token
   */
  'X-Auth-Token'?: string;
}

export declare namespace Sandbox {
  export {
    type SandboxCreateResponse as SandboxCreateResponse,
    type SandboxRetrieveResponse as SandboxRetrieveResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxRetrieveParams as SandboxRetrieveParams,
  };
}
