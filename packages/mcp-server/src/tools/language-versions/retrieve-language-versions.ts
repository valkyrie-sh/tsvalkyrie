// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { Metadata, asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a language version entry from the database using its ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    language: {\n      $ref: '#/$defs/language_version'\n    }\n  },\n  required: [    'language'\n  ],\n  $defs: {\n    language_version: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Unique identifier for the language version'\n        },\n        default_version: {\n          type: 'boolean',\n          description: 'Whether this is the default version of the language'\n        },\n        language_id: {\n          type: 'integer',\n          description: 'Reference to the parent language'\n        },\n        nix_package_name: {\n          type: 'string',\n          description: 'Name of the Nix package'\n        },\n        search_query: {\n          type: 'string',\n          description: 'Search query string'\n        },\n        template: {\n          type: 'string'\n        },\n        version: {\n          type: 'string',\n          description: 'Version identifier of the language'\n        }\n      },\n      required: [        'id',\n        'default_version',\n        'language_id',\n        'nix_package_name',\n        'search_query',\n        'template',\n        'version'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.languageVersions.retrieve(id)));
};

export default { metadata, tool, handler };
