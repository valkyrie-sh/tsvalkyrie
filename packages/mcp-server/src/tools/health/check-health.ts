// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'health',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/health',
  operationId: 'health',
};

export const tool: Tool = {
  name: 'check_health',
  description: 'Health Check',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const response = await client.health.check().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
