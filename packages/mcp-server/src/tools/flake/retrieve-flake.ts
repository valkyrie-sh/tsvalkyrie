// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'flake',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/flake/{jobId}',
  operationId: 'fetchFlake',
};

export const tool: Tool = {
  name: 'retrieve_flake',
  description: 'Fetches flake of a given job',
  inputSchema: {
    type: 'object',
    properties: {
      jobId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { jobId, ...body } = args as any;
  return asTextContentResult(await client.flake.retrieve(jobId));
};

export default { metadata, tool, handler };
