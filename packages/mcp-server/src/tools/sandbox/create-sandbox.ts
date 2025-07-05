// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'sandbox',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sandbox',
  operationId: 'createSandbox',
};

export const tool: Tool = {
  name: 'create_sandbox',
  description: 'Create a sandbox',
  inputSchema: {
    type: 'object',
    properties: {
      languages: {
        type: 'array',
        description: 'List of programming languages required in the sandbox',
        items: {
          type: 'string',
        },
      },
      nix_flake: {
        type: 'string',
        description: 'Nix flake configuration for the sandbox environment',
      },
      services: {
        type: 'array',
        description: 'List of services to be added to the sandbox',
        items: {
          type: 'string',
        },
      },
      system_dependencies: {
        type: 'array',
        description: 'List of system-level dependencies needed in the sandbox',
        items: {
          type: 'string',
        },
      },
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sandbox.create(body));
};

export default { metadata, tool, handler };
