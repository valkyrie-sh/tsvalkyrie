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
  httpPath: '/executions/{execId}',
  operationId: 'getExecutionResultById',
};

export const tool: Tool = {
  name: 'retrieve_executions',
  description: 'Get execution result by id',
  inputSchema: {
    type: 'object',
    properties: {
      execId: {
        type: 'integer',
      },
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { execId, ...body } = args as any;
  return asTextContentResult(await client.executions.retrieve(execId, body));
};

export default { metadata, tool, handler };
