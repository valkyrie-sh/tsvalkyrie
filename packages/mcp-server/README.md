# Tsvalkyrie TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/tsvalkyrie-typescript.git
cd tsvalkyrie-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export TSVALKYRIE_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y tsvalkyrie-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "tsvalkyrie_api": {
      "command": "node",
      "args": ["/path/to/local/tsvalkyrie-typescript/packages/mcp-server", "--client=claude", "--tools=all"],
      "env": {
        "TSVALKYRIE_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "tsvalkyrie-mcp/server";

// import a specific tool
import checkHealth from "tsvalkyrie-mcp/tools/health/check-health";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [checkHealth, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `health`:

- `check_health` (`read`): Health Check

### Resource `jobs`:

- `list_executions_jobs` (`read`): Get all execution jobs
- `retrieve_job_executions_jobs` (`read`): Get executions of given job

### Resource `version`:

- `retrieve_version` (`read`): Get version

### Resource `languages`:

- `retrieve_languages` (`read`): Retrieve a language entry from the database using its ID.
- `list_languages` (`read`): Retrieve a list of all languages from the database.
- `retrieve_versions_languages` (`read`): Retrieve a list of all language versions from the database.

### Resource `language_versions`:

- `retrieve_language_versions` (`read`): Retrieve a language version entry from the database using its ID.
- `list_language_versions` (`read`): Retrieve a list of all language versions from the database.

### Resource `sandbox`:

- `create_sandbox` (`write`): Create a sandbox
- `retrieve_sandbox` (`read`): Retrieve Sandbox details

### Resource `flake`:

- `retrieve_flake` (`read`): Fetches flake of a given job

### Resource `executions`:

- `retrieve_executions` (`read`): Get execution result by id
- `list_executions` (`read`): Get all executions
- `execute_executions` (`write`): Execute a script
- `retrieve_config_executions` (`read`): Get execution config

### Resource `executions.jobs`:

- `retrieve_executions_jobs` (`read`): Get execution job
- `delete_executions_jobs` (`write`): Delete execution job
- `cancel_executions_jobs` (`write`): Cancel Execution Job
