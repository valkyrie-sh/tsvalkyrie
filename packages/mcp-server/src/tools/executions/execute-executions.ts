// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'executions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/executions/execute',
  operationId: 'execute',
};

export const tool: Tool = {
  name: 'execute_executions',
  description: 'Execute a script',
  inputSchema: {
    type: 'object',
    properties: {
      cmdLineArgs: {
        type: 'string',
      },
      code: {
        type: 'string',
      },
      command: {
        type: 'string',
      },
      compilerArgs: {
        type: 'string',
      },
      environment: {
        type: 'object',
        properties: {
          environment_variables: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                key: {
                  type: 'string',
                },
                value: {
                  type: 'string',
                },
              },
              required: [],
            },
          },
          languageDependencies: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          secrets: {
            type: 'object',
          },
          setup: {
            type: 'string',
          },
          systemDependencies: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      exec_timeout: {
        type: 'integer',
      },
      extension: {
        type: 'string',
      },
      files: {
        type: 'string',
      },
      input: {
        type: 'string',
      },
      language: {
        type: 'string',
      },
      max_retries: {
        type: 'integer',
      },
      version: {
        type: 'string',
      },
      'X-Auth-Token': {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.executions.execute(body));
};

export default { metadata, tool, handler };
