# Health

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> void</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">Pagination</a></code>
- <code><a href="./src/resources/jobs.ts">JobListExecutionsResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobRetrieveJobExecutionsResponse</a></code>

Methods:

- <code title="get /jobs/execution">client.jobs.<a href="./src/resources/jobs.ts">listExecutions</a>({ ...params }) -> JobListExecutionsResponse</code>
- <code title="get /jobs/{JobId}/executions">client.jobs.<a href="./src/resources/jobs.ts">retrieveJobExecutions</a>(jobID, { ...params }) -> JobRetrieveJobExecutionsResponse</code>

# Version

Types:

- <code><a href="./src/resources/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">retrieve</a>({ ...params }) -> VersionRetrieveResponse</code>

# Languages

Types:

- <code><a href="./src/resources/languages.ts">Language</a></code>
- <code><a href="./src/resources/languages.ts">LanguageRetrieveResponse</a></code>
- <code><a href="./src/resources/languages.ts">LanguageListResponse</a></code>
- <code><a href="./src/resources/languages.ts">LanguageRetrieveVersionsResponse</a></code>

Methods:

- <code title="get /languages/{id}">client.languages.<a href="./src/resources/languages.ts">retrieve</a>(id, { ...params }) -> LanguageRetrieveResponse</code>
- <code title="get /languages">client.languages.<a href="./src/resources/languages.ts">list</a>({ ...params }) -> LanguageListResponse</code>
- <code title="get /languages/{id}/versions">client.languages.<a href="./src/resources/languages.ts">retrieveVersions</a>(id, { ...params }) -> LanguageRetrieveVersionsResponse</code>

# LanguageVersions

Types:

- <code><a href="./src/resources/language-versions.ts">LanguageVersion</a></code>
- <code><a href="./src/resources/language-versions.ts">LanguageVersionRetrieveResponse</a></code>
- <code><a href="./src/resources/language-versions.ts">LanguageVersionListResponse</a></code>

Methods:

- <code title="get /language-versions/{id}">client.languageVersions.<a href="./src/resources/language-versions.ts">retrieve</a>(id, { ...params }) -> LanguageVersionRetrieveResponse</code>
- <code title="get /language-versions">client.languageVersions.<a href="./src/resources/language-versions.ts">list</a>({ ...params }) -> LanguageVersionListResponse</code>

# Sandbox

Types:

- <code><a href="./src/resources/sandbox.ts">SandboxCreateResponse</a></code>
- <code><a href="./src/resources/sandbox.ts">SandboxRetrieveResponse</a></code>

Methods:

- <code title="post /sandbox">client.sandbox.<a href="./src/resources/sandbox.ts">create</a>({ ...params }) -> SandboxCreateResponse</code>
- <code title="get /sandbox/{sandboxId}">client.sandbox.<a href="./src/resources/sandbox.ts">retrieve</a>(sandboxID, { ...params }) -> SandboxRetrieveResponse</code>

# Flake

Types:

- <code><a href="./src/resources/flake.ts">FlakeRetrieveResponse</a></code>

Methods:

- <code title="get /flake/{jobId}">client.flake.<a href="./src/resources/flake.ts">retrieve</a>(jobID) -> FlakeRetrieveResponse</code>

# Executions

Types:

- <code><a href="./src/resources/executions/executions.ts">ExecutionResult</a></code>
- <code><a href="./src/resources/executions/executions.ts">ExecutionListResponse</a></code>
- <code><a href="./src/resources/executions/executions.ts">ExecutionExecuteResponse</a></code>
- <code><a href="./src/resources/executions/executions.ts">ExecutionRetrieveConfigResponse</a></code>

Methods:

- <code title="get /executions/{execId}">client.executions.<a href="./src/resources/executions/executions.ts">retrieve</a>(execID, { ...params }) -> ExecutionResult</code>
- <code title="get /executions">client.executions.<a href="./src/resources/executions/executions.ts">list</a>({ ...params }) -> ExecutionListResponse</code>
- <code title="post /executions/execute">client.executions.<a href="./src/resources/executions/executions.ts">execute</a>({ ...params }) -> ExecutionExecuteResponse</code>
- <code title="get /execution/config">client.executions.<a href="./src/resources/executions/executions.ts">retrieveConfig</a>({ ...params }) -> ExecutionRetrieveConfigResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/executions/jobs.ts">Job</a></code>
- <code><a href="./src/resources/executions/jobs.ts">JobCancelResponse</a></code>

Methods:

- <code title="get /executions/jobs/{JobId}">client.executions.jobs.<a href="./src/resources/executions/jobs.ts">retrieve</a>(jobID, { ...params }) -> Job</code>
- <code title="delete /executions/jobs/{JobId}">client.executions.jobs.<a href="./src/resources/executions/jobs.ts">delete</a>(jobID, { ...params }) -> void</code>
- <code title="put /executions/jobs/{JobId}">client.executions.jobs.<a href="./src/resources/executions/jobs.ts">cancel</a>(jobID, { ...params }) -> JobCancelResponse</code>
