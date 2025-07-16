// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { Metadata, asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'languages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/languages',
  operationId: 'getAllLanguages',
};

export const tool: Tool = {
  name: 'list_languages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of all languages from the database.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    languages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/language'\n      }\n    }\n  },\n  required: [    'languages'\n  ],\n  $defs: {\n    language: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Unique identifier for the language version'\n        },\n        default_code: {\n          type: 'string'\n        },\n        extension: {\n          type: 'string'\n        },\n        monaco_language: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        template: {\n          type: 'string',\n          description: 'The default template for the language'\n        }\n      },\n      required: [        'id',\n        'default_code',\n        'extension',\n        'monaco_language',\n        'name',\n        'template'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.languages.list(body)));
};

export default { metadata, tool, handler };
