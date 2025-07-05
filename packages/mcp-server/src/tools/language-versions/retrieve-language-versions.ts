// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'language_versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/language-versions/{id}',
  operationId: 'getLanguageVersionById',
};

export const tool: Tool = {
  name: 'retrieve_language_versions',
  description: 'Retrieve a language version entry from the database using its ID.',
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
  return asTextContentResult(await client.languageVersions.retrieve(id, body));
};

export default { metadata, tool, handler };
