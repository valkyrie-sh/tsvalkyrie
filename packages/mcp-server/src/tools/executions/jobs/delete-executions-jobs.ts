// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'executions.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/executions/jobs/{JobId}',
  operationId: 'deleteExecutionJob',
};

export const tool: Tool = {
  name: 'delete_executions_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete execution job\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      JobId: {
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
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { JobId, ...body } = args as any;
  const response = await client.executions.jobs.delete(JobId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
