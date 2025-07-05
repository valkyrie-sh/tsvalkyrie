// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import check_health from './health/check-health';
import list_executions_jobs from './jobs/list-executions-jobs';
import retrieve_job_executions_jobs from './jobs/retrieve-job-executions-jobs';
import retrieve_version from './version/retrieve-version';
import retrieve_languages from './languages/retrieve-languages';
import list_languages from './languages/list-languages';
import retrieve_versions_languages from './languages/retrieve-versions-languages';
import retrieve_language_versions from './language-versions/retrieve-language-versions';
import list_language_versions from './language-versions/list-language-versions';
import create_sandbox from './sandbox/create-sandbox';
import retrieve_sandbox from './sandbox/retrieve-sandbox';
import retrieve_flake from './flake/retrieve-flake';
import retrieve_executions from './executions/retrieve-executions';
import list_executions from './executions/list-executions';
import execute_executions from './executions/execute-executions';
import retrieve_config_executions from './executions/retrieve-config-executions';
import retrieve_executions_jobs from './executions/jobs/retrieve-executions-jobs';
import delete_executions_jobs from './executions/jobs/delete-executions-jobs';
import cancel_executions_jobs from './executions/jobs/cancel-executions-jobs';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(check_health);
addEndpoint(list_executions_jobs);
addEndpoint(retrieve_job_executions_jobs);
addEndpoint(retrieve_version);
addEndpoint(retrieve_languages);
addEndpoint(list_languages);
addEndpoint(retrieve_versions_languages);
addEndpoint(retrieve_language_versions);
addEndpoint(list_language_versions);
addEndpoint(create_sandbox);
addEndpoint(retrieve_sandbox);
addEndpoint(retrieve_flake);
addEndpoint(retrieve_executions);
addEndpoint(list_executions);
addEndpoint(execute_executions);
addEndpoint(retrieve_config_executions);
addEndpoint(retrieve_executions_jobs);
addEndpoint(delete_executions_jobs);
addEndpoint(cancel_executions_jobs);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
