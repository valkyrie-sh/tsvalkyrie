// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { Metadata, asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a sandbox\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'string'\n    },\n    sandboxId: {\n      type: 'integer'\n    },\n    sandboxStatusSSE: {\n      type: 'string'\n    },\n    sandboxStatusWS: {\n      type: 'string'\n    }\n  },\n  required: [    'result',\n    'sandboxId'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.sandbox.create(body)));
};

export default { metadata, tool, handler };
