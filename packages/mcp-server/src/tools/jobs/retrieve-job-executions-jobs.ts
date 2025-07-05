// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/jobs/{JobId}/executions',
  operationId: 'getExecutionsForJob',
};

export const tool: Tool = {
  name: 'retrieve_job_executions_jobs',
  description: 'Get executions of given job',
  inputSchema: {
    type: 'object',
    properties: {
      JobId: {
        type: 'integer',
      },
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
  const { JobId, ...body } = args as any;
  return asTextContentResult(await client.jobs.retrieveJobExecutions(JobId, body));
};

export default { metadata, tool, handler };
