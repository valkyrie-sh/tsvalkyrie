// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Tsvalkyrie from 'tsvalkyrie';

const client = new Tsvalkyrie({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource version', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.version.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.version.retrieve({ 'X-Auth-Token': 'X-Auth-Token' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Tsvalkyrie.NotFoundError);
  });
});
