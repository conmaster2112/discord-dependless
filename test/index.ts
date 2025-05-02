import {Bot, Result} from "discord-dependless";

const bot = new Bot({token: process.env["discord_token"]!});
//const gateway = await bot.connect(513);
/*
gateway.addEventListener("READY", ()=>{
    console.log("Ready");
    console.log("Connected. . .");
});*/

console.log(bot.token);
let result = await bot.sendMessage("1139562043867934750", {
    embeds:[
        {
            title: "Yes",
            description: "So nice",
            color: 0x000000
        }
    ]
});

const {id} = result.unwrap();
result = await bot.sendMessage("1139562043867934750", {
    embeds:[
        {
            title: "Yes",
            description: "So nice",
            color: 0x000000
        }
    ],
    message_reference: {
        message_id: id
    }
});

result.unwrap();

console.log("Test")