// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { Metadata, asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExecute a script\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    events: {\n      type: 'string'\n    },\n    jobId: {\n      type: 'integer'\n    },\n    websocket: {\n      type: 'string'\n    }\n  },\n  required: [    'events',\n    'jobId',\n    'websocket'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.executions.execute(body)));
};

export default { metadata, tool, handler };
