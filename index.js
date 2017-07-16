var linebot = require('linebot');
var express = require('express');
 
var bot = linebot({
    channelId: "1525063119",
    channelSecret: "29ec9b2909480c86f7ccfd74a0f128f9",
    channelAccessToken: "sFWF5ufE+Ne9ST4/MnnZPCYl+TlyANM1cSYwJojmhqs3p59TH8NqKNThOYT/0fxkEpLkyc3uBLOwA7Sq4c0zVqbSzRAjLICB6I8hWhZ2NYUSSs0napNkKhkPOUckGSgkgllQnt+Mw6DgB9jj/IM4lwdB04t89/1O/w1cDnyilFU=" 
});
 
bot.on('message', function (event) {
    event.reply(event.message.text).then(function (data) {
        // success 
    }).catch(function (error) {
        // error 
    });
});
 
bot.listen('/linewebhook', 3000);
