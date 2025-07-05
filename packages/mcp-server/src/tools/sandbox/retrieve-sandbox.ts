// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'sandbox',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sandbox/{sandboxId}',
  operationId: 'getSandbox',
};

export const tool: Tool = {
  name: 'retrieve_sandbox',
  description: 'Retrieve Sandbox details',
  inputSchema: {
    type: 'object',
    properties: {
      sandboxId: {
        type: 'integer',
      },
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { sandboxId, ...body } = args as any;
  return asTextContentResult(await client.sandbox.retrieve(sandboxId, body));
};

export default { metadata, tool, handler };
