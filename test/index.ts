import { Bot, DiscordAPIError, type DiscordSnowflakeType, Result } from "discord-dependless";
import data from "./.init.json" with {type: "json"};

const { log, error } = console;
// Init
const bot = new Bot({ token: data.token });

const gateway = await bot.connect(32768 | 512 | 1024);
gateway.addEventListener("MESSAGE_CREATE", e => {
    log(e.data.author.username, e.data.content);
});
gateway.addEventListener("INTERACTION_CREATE", async (e) => {
    log(e.data);
});
gateway.addEventListener("READY", async (e) => {
    const applicationId = e.data.application.id;

    let test1 = await bot.setApplicationCommands(applicationId as DiscordSnowflakeType, [
        {
            name: "test",
            description: "Is Required"
        }
    ]);
    test1.unwrap();
});

// Send first message
let result: Result<any> = await null!; /*bot.sendMessage(channel as DiscordSnowflakeType, {
    content: "I want a embed please"
});*/

// Reply
//const { id: message_id } = result.unwrap();
result = await bot.postMessage(data.forumId as DiscordSnowflakeType, {
    name: "Discord - Forum Test - Bot",
    message: {
        "flags": 32768,
        components: [
            {
                type: 10,
                content: "https://cdn.discordapp.com/attachments/965404512187740220/1368211839166582976/image.png?ex=68176612&is=68161492&hm=94d9e80f2adb900105cc9129806f899c40354d3f0c014aa21a856ef76e6a61c4&",
            },
            {
                type: 17,
                "components": [
                    {
                        type: 12,
                        items: [
                            {
                                media: {
                                    url: "https://cdn.discordapp.com/attachments/965404512187740220/1368211839166582976/image.png?ex=68176612&is=68161492&hm=94d9e80f2adb900105cc9129806f899c40354d3f0c014aa21a856ef76e6a61c4&"
                                }
                            }
                        ]
                    },
                    {
                        "type": 10,
                        "content": "-# Image of young Naruto from Boruto series\n\n# Big title"
                    },
                    {
                        type: 14
                    },
                    {
                        type: 9,
                        components: [
                            {
                                "type": 10,
                                "content": "*Unreal Engine v5.3 ->*  <@1043501669503213599>"
                            },
                            {
                                "type": 10,
                                "content": "```js\nfunction(){\n\tconsole.log(4);\n}\n```\n-# [Download Naruto Image](https://cdn.discordapp.com/attachments/965404512187740220/1368211839166582976/image.png?ex=68176612&is=68161492&hm=94d9e80f2adb900105cc9129806f899c40354d3f0c014aa21a856ef76e6a61c4&)"
                            }
                        ],
                        "accessory": {
                            "type": 11,
                            "media": {
                                "url": "https://cdn.discordapp.com/avatars/805533255121109022/581ea2da5e0dbfa68dcc186d0585c891"
                            }
                        }
                    },
                    {
                        type: 14
                    },
                    {
                        "type": 9,
                        "components": [
                            {
                                "type": 10,
                                "content": "Unreal Game v5.3\n<@1043501669503213599>"
                            }
                        ],
                        "accessory": {
                            "type": 11,
                            "media": {
                                "url": "https://feedback.minecraft.net/hc/article_attachments/36203349077133"
                            }
                        }
                    },
                    {
                        type: 14
                    },
                    {
                        type: 10,
                        content: "-# Well this is complicated   •   Really??"
                    }
                ]
            }
        ]
    }
});

if (result.isError() && (result.error instanceof DiscordAPIError)) {
    error(JSON.stringify(await result.error.response.json(), null, 2));
}

log("So far so good");