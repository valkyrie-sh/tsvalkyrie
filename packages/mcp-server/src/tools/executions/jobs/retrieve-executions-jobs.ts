// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'executions.jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/executions/jobs/{JobId}',
  operationId: 'getExecutionJobById',
};

export const tool: Tool = {
  name: 'retrieve_executions_jobs',
  description: 'Get execution job',
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
  return asTextContentResult(await client.executions.jobs.retrieve(JobId, body));
};

export default { metadata, tool, handler };
