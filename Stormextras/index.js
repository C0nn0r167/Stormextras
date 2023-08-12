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
import "../Stormextras/autowarp.js";
import Settings from "./config";

register("command", (user) => {
    ChatLib.chat("&6Stormextras &bVERSION &f1.0.9!\n&4Use Right_Control to open the gui")
}).setName("shelp");
