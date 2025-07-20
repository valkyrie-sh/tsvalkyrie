import { Tsvalkyrie } from './src/index';
import { ExecutionWSMessage } from './src/resources/executions/types';

const client = new Tsvalkyrie({
  apiKey: 'abcd',
});

client.executions
  .execute({
    code: 'echo "Hello, world!"',
    language: 'bash',
  })
  .then((res: ExecutionWSMessage) => {
    console.log('Promise resolved successfully:');
    console.log(res);
  })
  .catch((error: string) => {
    console.error('Promise rejected with an error:');
    console.error(error);
  });
