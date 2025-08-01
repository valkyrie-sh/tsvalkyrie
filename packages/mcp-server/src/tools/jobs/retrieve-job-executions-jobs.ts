// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { Metadata, asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/jobs/{JobId}/executions',
  operationId: 'getExecutionsForJob',
};

export const tool: Tool = {
  name: 'retrieve_job_executions_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet executions of given job\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    executions: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/execution_result'\n      }\n    },\n    pagination: {\n      $ref: '#/$defs/pagination'\n    }\n  },\n  required: [    'executions',\n    'pagination'\n  ],\n  $defs: {\n    execution_result: {\n      allOf: [        {\n          $ref: '#/$defs/job'\n        }\n      ]\n    },\n    job: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        flake: {\n          type: 'string'\n        },\n        jobId: {\n          type: 'integer'\n        },\n        script: {\n          type: 'string'\n        },\n        started_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'created_at',\n        'flake',\n        'jobId',\n        'script'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      properties: {\n        cursor: {\n          type: 'integer',\n          description: 'Represents the start of the cursor'\n        },\n        limit: {\n          type: 'integer',\n          description: 'Represents the number of items per page.'\n        },\n        total: {\n          type: 'integer',\n          description: 'Represents the total number of items.'\n        }\n      },\n      required: [        'cursor',\n        'limit',\n        'total'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      JobId: {
        type: 'integer',
      },
      cursor: {
        type: 'integer',
        description: 'The current position of the cursor',
      },
      limit: {
        type: 'integer',
        description: 'The limit for the records',
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Tsvalkyrie, args: Record<string, unknown> | undefined) => {
  const { JobId, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.jobs.retrieveJobExecutions(JobId, body)),
  );
};

export default { metadata, tool, handler };
