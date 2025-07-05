// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'executions.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/executions/jobs/{JobId}',
  operationId: 'deleteExecutionJob',
};

export const tool: Tool = {
  name: 'delete_executions_jobs',
  description: 'Delete execution job',
  inputSchema: {
    type: 'object',
    properties: {
      JobId: {
        type: 'integer',
      },
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { JobId, ...body } = args as any;
  const response = await client.executions.jobs.delete(JobId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
