// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { Metadata, asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'executions.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/executions/jobs/{JobId}',
  operationId: 'cancelExecutionJob',
};

export const tool: Tool = {
  name: 'cancel_executions_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCancel Execution Job\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    message: {\n      type: 'string'\n    }\n  },\n  required: [    'message'\n  ]\n}\n```",
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
    required: ['JobId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { JobId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.executions.jobs.cancel(JobId, body)));
};

export default { metadata, tool, handler };
