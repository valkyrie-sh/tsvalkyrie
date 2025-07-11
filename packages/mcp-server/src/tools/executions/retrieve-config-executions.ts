// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'tsvalkyrie-mcp/filtering';
import { asTextContentResult } from 'tsvalkyrie-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Tsvalkyrie from 'tsvalkyrie';

export const metadata: Metadata = {
  resource: 'executions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/execution/config',
  operationId: 'getExecutionConfig',
};

export const tool: Tool = {
  name: 'retrieve_config_executions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet execution config\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    LOG_LEVEL: {\n      type: 'string',\n      description: 'Represents the log level.'\n    },\n    WORKER_BUFFER_SIZE: {\n      type: 'integer',\n      description: 'Represents the buffer size for the worker.'\n    },\n    WORKER_CONCURRENCY: {\n      type: 'integer',\n      description: 'Represents the concurrency level for the worker.'\n    },\n    WORKER_MAX_TASK_TIMEOUT: {\n      type: 'integer',\n      description: 'Represents the task timeout.'\n    },\n    WORKER_POLL_FREQ: {\n      type: 'integer',\n      description: 'Represents the polling frequency for the worker in seconds.'\n    },\n    WORKER_PROVIDER: {\n      type: 'string',\n      description: 'Represents the worker provider.'\n    },\n    WORKER_RUNTIME: {\n      type: 'string',\n      description: 'Represents the runtime for the worker in seconds.'\n    },\n    SYSTEM_PROVIDER_BASE_DIR: {\n      type: 'string',\n      description: 'Represents the base directory for the system provider.'\n    },\n    SYSTEM_PROVIDER_CLEAN_UP: {\n      type: 'boolean',\n      description: 'Represents whether to clean up directories created by the system provider.'\n    }\n  },\n  required: [    'LOG_LEVEL',\n    'WORKER_BUFFER_SIZE',\n    'WORKER_CONCURRENCY',\n    'WORKER_MAX_TASK_TIMEOUT',\n    'WORKER_POLL_FREQ',\n    'WORKER_PROVIDER',\n    'WORKER_RUNTIME'\n  ]\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.executions.retrieveConfig(body)));
};

export default { metadata, tool, handler };
