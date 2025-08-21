import { server } from './server';
import type { GameClientMessageName } from './game-client-message-name';

/**
 * Listens for a specific event from the game via the WebSocket server.
 * Returns a promise that resolves when the event is received.
 */
export function waitForGameEvent(eventName: GameClientMessageName): Promise<void> {
  return new Promise((resolve, reject) => {
    let timeout: NodeJS.Timeout | undefined = undefined;

    const onEventReceived = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      // Clean up all listeners for this event name to prevent memory leaks.
      server.removeGameEventListeners(eventName);
      resolve();
    };

    // Register the listener using the correct method from server.ts
    server.addGameMessageListener(eventName, onEventReceived);

    // Add a timeout to prevent the script from waiting forever.
    timeout = setTimeout(() => {
      server.removeGameEventListeners(eventName); // Clean up on timeout too
      reject(new Error(`Timed out after 5 minutes of waiting for game event: ${eventName}`));
    }, 5 * 60 * 1000); // 5-minute timeout
  });
}