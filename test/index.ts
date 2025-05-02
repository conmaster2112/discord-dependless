import {Bot} from "discord-dependless";
import {token, channel} from "./.init.json" with {type: "json"};


// Init
const bot = new Bot({token: token});

// Send first message
let result = await bot.sendMessage(`${channel}`, {
    content: "I want a embed please"
});

// Reply
const {id: message_id} = result.unwrap();
result = await bot.sendMessage(`${channel}`, {
    embeds:[
        {
            title: "OK",
            description: "Here is awesome embed",
            color: 0x00bb44
        }
    ],
    message_reference: { message_id}
});
result.unwrap();


console.log("So far so good");