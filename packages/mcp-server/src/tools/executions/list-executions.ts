// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'executions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/executions',
  operationId: 'getAllExecutions',
};

export const tool: Tool = {
  name: 'list_executions',
  description: 'Get all executions',
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'integer',
        description: 'The current position of the cursor',
      },
      limit: {
        type: 'integer',
        description: 'The limit for the records',
      },
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.executions.list(body));
};

export default { metadata, tool, handler };
