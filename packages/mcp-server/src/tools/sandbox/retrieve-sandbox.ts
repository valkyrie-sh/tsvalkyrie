// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { Metadata, asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'sandbox',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sandbox/{sandboxId}',
  operationId: 'getSandbox',
};

export const tool: Tool = {
  name: 'retrieve_sandbox',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve Sandbox details\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      properties: {\n        agentURL: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        sandboxId: {\n          type: 'integer'\n        },\n        state: {\n          type: 'string'\n        },\n        URL: {\n          type: 'string'\n        }\n      },\n      required: [        'agentURL',\n        'created_at',\n        'sandboxId',\n        'state',\n        'URL'\n      ]\n    },\n    {\n      type: 'object',\n      properties: {\n        sandboxId: {\n          type: 'integer'\n        },\n        state: {\n          type: 'string'\n        }\n      },\n      required: [        'sandboxId',\n        'state'\n      ]\n    }\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      sandboxId: {
        type: 'integer',
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
    required: ['sandboxId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { sandboxId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.sandbox.retrieve(sandboxId, body)));
};

export default { metadata, tool, handler };
