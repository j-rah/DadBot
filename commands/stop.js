const {Confirm, Deny} = require("../util/interractions");
module.exports = {
    help: {
        perms: ["ADMINISTRATOR"],
        owner: false,
        server: true,
        name: "stop",
        desk: "Stops the Bot for the Current Server"
    },
    command: {
        weight: 500,
        regex: /stop/ig,
        run: (bot, message, settings) => {
            console.log(settings)
            settings.enabled = false;
            bot.DataBase.update({id: message.guild.id}, settings, () => {
                Confirm(message);
            })
        }
    }
}