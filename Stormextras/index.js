import "../Stormextras/waypoints.js";
import "../Stormextras/slayer.js";
import "../Stormextras/fishing.js";
import "../Stormextras/angelica.js";
import "../Stormextras/dungeons.js";
import "../Stormextras/mining.js";
import "../Stormextras/angelica.js";
import "../Stormextras/copy.js";
import "../Stormextras/Keybinds.js";
import "../Stormextras/config.js";
import "../Stormextras/commands.js";
import "../Stormextras/slayerhelp.js";
import "../Stormextras/autowarp.js";
import Settings from "./config";

let sa = false
let sadone = false

register("renderOverlay", myRenderOverlay);

function myRenderOverlay() {
    if(sa == false){
        Renderer.drawString("&e&l/sa for gui", 455, 300);
        Renderer.drawString("&e(Will disapear when the gui is opened)", 395, 310)
    }
}


register("command", (user) => {
    ChatLib.chat("&6Stormextras &bVERSION &f1.0.8!\n&4Use /sa to open the stormextras gui")
}).setName("shelp");

// to open the config gui use the "openGUI" function
register("command", (user) => {
    Settings.openGUI()
    sa = true
}).setName("stormextras").setAliases("sa");