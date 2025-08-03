// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
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
    body: SandboxCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SandboxCreateResponse> {
    return this._client.post('/sandbox', { body, ...options });
  }

  /**
   * Retrieve Sandbox details
   *
   * @example
   * ```ts
   * const sandbox = await client.sandbox.retrieve(0);
   * ```
   */
  retrieve(sandboxID: number, options?: RequestOptions): APIPromise<SandboxRetrieveResponse> {
    return this._client.get(path`/sandbox/${sandboxID}`, options);
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
   * List of programming languages required in the sandbox
   */
  languages?: Array<string>;

  /**
   * Nix flake configuration for the sandbox environment
   */
  nix_flake?: string;

  /**
   * List of services to be added to the sandbox
   */
  services?: Array<string>;

  /**
   * List of system-level dependencies needed in the sandbox
   */
  system_dependencies?: Array<string>;
}

export declare namespace Sandbox {
  export {
    type SandboxCreateResponse as SandboxCreateResponse,
    type SandboxRetrieveResponse as SandboxRetrieveResponse,
    type SandboxCreateParams as SandboxCreateParams,
  };
}
