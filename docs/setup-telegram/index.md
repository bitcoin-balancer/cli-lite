[< Back](../../README.md#getting-started)

# Setting up Telegram

## Creating and Exposing the Bot

The first step is to start a chat with `@BotFather` and create a new bot. This will give you the `token` needed for the Balancer API to manage the bot. For more information about this process, visit:

[From BotFather to 'Hello World'](https://core.telegram.org/bots/tutorial)


<br/>

### Creating Balancer's Group

Once the bot is created, save the **`token`** and proceed to create a new Telegram group. Next, add the **bot** as a member of the group so it can send messages.

The final step is to retrieve the `Chat's ID`, which is required for the bot to send messages. Follow these steps to get the `Chat ID`:

1. Make sure you have added the bot as a member of the group.
2. Send a few messages to the group from your account.
3. Send a `GET` request to this URL: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

Example: `https://api.telegram.org/bot123456789:jbd78sadvbdy63d37gda37bd8/getUpdates`

The response should look like this:

```json
{
  "ok": true,
  "result": [
    {
      "update_id": 838xxxx36,
      "channel_post": {...},
        "chat": {
          "id": -1001xxxxxx062,
          "title": "....",
          "type": "channel"
        },
        "date": 1703065989,
        "text": "test"
      }
    }
  ]
}
```

The **`chatID`** is located inside the `chat` object under the `id` property. This value is generally a large negative integer. For example: `-1001629725463`.

**Sources:**
- [Telegram Bot - how to get a group chat id?](https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id)
- [How to get Telegram Bot Chat ID](https://gist.github.com/nafiesl/4ad622f344cd1dc3bb1ecbe468ff9f8a)



<br/>

Lastly, input the **`Telegram Token`** and the **`Chat ID`** in the configuration form.