// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'languages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/languages',
  operationId: 'getAllLanguages',
};

export const tool: Tool = {
  name: 'list_languages',
  description: 'Retrieve a list of all languages from the database.',
  inputSchema: {
    type: 'object',
    properties: {
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.languages.list(body));
};

export default { metadata, tool, handler };
