// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Tsvalkyrie } from '../client';

export abstract class APIResource {
  protected _client: Tsvalkyrie;

  constructor(client: Tsvalkyrie) {
    this._client = client;
  }
}
