// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tsvalkyrie from 'tsvalkyrie';

const client = new Tsvalkyrie({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource jobs', () => {
  // skipped: tests are disabled for the time being
  test.skip('listExecutions', async () => {
    const responsePromise = client.jobs.listExecutions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listExecutions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jobs.listExecutions(
        { cursor: 0, limit: 0, 'X-Auth-Token': 'X-Auth-Token' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Tsvalkyrie.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveJobExecutions', async () => {
    const responsePromise = client.jobs.retrieveJobExecutions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveJobExecutions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jobs.retrieveJobExecutions(
        0,
        { cursor: 0, limit: 0, 'X-Auth-Token': 'X-Auth-Token' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Tsvalkyrie.NotFoundError);
  });
});
