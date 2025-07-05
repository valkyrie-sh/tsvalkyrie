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
  httpPath: '/languages/{id}/versions',
  operationId: 'getAllVersions',
};

export const tool: Tool = {
  name: 'retrieve_versions_languages',
  description: 'Retrieve a list of all language versions from the database.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.languages.retrieveVersions(id, body));
};

export default { metadata, tool, handler };
