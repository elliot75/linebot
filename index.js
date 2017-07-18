var rp = require('request-promise');

exports.justReply = function justReply(req, res) {

    const promises = req.body.events.map(event => {

        var msg = event.message.text;
        var reply_token = event.replyToken;

        var options = {
            method: 'POST',
            uri: "https://api.line.me/v2/bot/message/reply",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": " Bearer " + "sFWF5ufE+Ne9ST4/MnnZPCYl+TlyANM1cSYwJojmhqs3p59TH8NqKNThOYT/0fxkEpLkyc3uBLOwA7Sq4c0zVqbSzRAjLICB6I8hWhZ2NYUSSs0napNkKhkPOUckGSgkgllQnt+Mw6DgB9jj/IM4lwdB04t89/1O/w1cDnyilFU="
            },
            json: true,
            body: {
              replyToken: reply_token,
              messages:[
                {
                  "type":"text",
                  "text":msg
                }
              ]
            }
        };

        return rp(options)
        .then(function (response) {
            console.log("Success : " + response);
        }).catch(function (err) {
            console.log("Error : " + err);
        });

    });

    Promise
    .all(promises)
    .then(() => res.json({success: true}));

};
