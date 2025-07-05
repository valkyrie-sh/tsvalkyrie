// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'executions.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/executions/jobs/{JobId}',
  operationId: 'cancelExecutionJob',
};

export const tool: Tool = {
  name: 'cancel_executions_jobs',
  description: 'Cancel Execution Job',
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
  return asTextContentResult(await client.executions.jobs.cancel(JobId, body));
};

export default { metadata, tool, handler };
