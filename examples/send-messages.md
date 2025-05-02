# Sending Messages with discord-dependless

This guide demonstrates how to send messages using the Bot class from discord-dependless library. The library provides a Result-based approach for handling Discord API operations.

## Setup and Initialization
```typescript
import { Bot } from 'discord-dependless';

// Create a new Bot instance with your Discord token
const bot = new Bot({ token: 'your-bot-token' });
```

## Understanding the sendMessage Method
The `sendMessage` method returns a `Result` object which can either contain the successful message response or an error. There are two main approaches to handle the response:

### Example 1: Safe Error Handling with isValid()
```typescript
// Send a message and safely handle potential errors
const result = await bot.sendMessage('channel-id', {
    content: 'Hello World!'
});

// isValid() checks if the operation was successful
// This is the safest way to handle potential errors
if (!result.isValid()) {
    console.error('Failed to send message:', result.error);
    return;
}

console.log('Message sent successfully:', result.data);
```

### Example 2: Direct Access with unwrap()
```typescript
// Using unwrap() for direct access to the result
// WARNING: unwrap() will throw an error if the operation failed
// Only use this if you're certain the operation will succeed
// or if you're handling errors at a higher level
const message = (await bot.sendMessage('channel-id', {
    content: 'Hello World!'
})).unwrap();

console.log('Message sent successfully:', message);
```

## Message Options and Features
The sendMessage method accepts various options to customize your message:

```typescript
const message = await bot.sendMessage('channel-id', {
    content: 'Hello World!',
    tts: false,  // Text-to-speech flag
    embeds: [    // Rich embed objects
        {
            title: 'My Embed',
            description: 'This is an embed message',
            color: 0x00ff00, // Green color
            footer: {
                text: 'Footer text'
            }
        }
    ],
    // You can also include other options like:
    // - components (buttons, select menus)
    // - attachments
    // - allowed_mentions
});
```

## Error Handling Tips
- Always check `result.isValid()` when you need to handle errors gracefully
- Use `unwrap()` only when you're confident the operation will succeed
- The error object contains detailed information about what went wrong
- Common errors include invalid permissions, rate limits, and invalid channel IDs
