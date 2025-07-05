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
  httpPath: '/language-versions',
  operationId: 'getAllLanguageVersions',
};

export const tool: Tool = {
  name: 'list_language_versions',
  description: 'Retrieve a list of all language versions from the database.',
  inputSchema: {
    type: 'object',
    properties: {
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.languageVersions.list(body));
};

export default { metadata, tool, handler };
