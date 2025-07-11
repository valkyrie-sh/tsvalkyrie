// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'flake',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/flake/{jobId}',
  operationId: 'fetchFlake',
};

export const tool: Tool = {
  name: 'retrieve_flake',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches flake of a given job\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    flake: {\n      type: 'string'\n    }\n  },\n  required: [    'flake'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jobId: {
        type: 'integer',
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
  const { jobId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.flake.retrieve(jobId)));
};

export default { metadata, tool, handler };
