// import WebSocket from 'ws';
import WSImpl from 'isomorphic-ws';

export async function withWebSocketConnection(
  url: string,
  timeout: number = 30000,
  callback: (ws: WSImpl) => Promise<void> | void,
): Promise<void> {
  const ws = new WSImpl(url);

  const connectionTimeout = setTimeout(() => {
    ws.close(1000, 'Connection timed out');
  }, timeout);

  try {
    await new Promise<void>((resolve, reject) => {
      ws.onopen = () => {
        clearTimeout(connectionTimeout);
        resolve();
      };
      ws.onerror = (error) => {
        clearTimeout(connectionTimeout);
        reject(error);
      };
      ws.onclose = (event) => {
        if (!event.wasClean) {
          reject(new Error(`WebSocket closed unexpectedly with code ${event.code}`));
        }
      };
    });

    await Promise.resolve(callback(ws));
  } finally {
    if (ws.readyState === WSImpl.OPEN || ws.readyState === WSImpl.CONNECTING) {
      ws.close();
    }
  }
}

/**
 * Decodes a Base64-encoded WebSocket message string into a JavaScript object.
 * @param encodedMessage The Base64-encoded message string.
 * @returns The decoded message as a JavaScript object.
 */
export function decodeWebsocketMessage<T = any>(encodedMessage: string): T {
  const decodedBytes = Buffer.from(encodedMessage, 'base64');
  const decodedStr = decodedBytes.toString('utf-8');

  const messageDict: T = JSON.parse(decodedStr);

  return messageDict;
}

/**
 * Encodes a JavaScript object into a Base64-encoded string suitable for WebSocket transmission.
 * @param messageDict The JavaScript object to encode.
 * @returns The Base64-encoded message string.
 */
export function encodeWebsocketMessage(messageDict: object): string {
  const jsonStr = JSON.stringify(messageDict);

  const encodedBytes = Buffer.from(jsonStr, 'utf-8');
  const encodedMessage = encodedBytes.toString('base64');

  return encodedMessage;
}
