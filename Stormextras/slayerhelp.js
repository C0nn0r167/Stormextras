import Settings from "./config";

register("chat", (player,event) => {
    if(Settings.slayerhelp){
        Client.showTitle("&aKILL THIS BOSSS", "§7YOUR BOSS", 10, 5, 10)
        World.playSound("player.levelup", 10, 10)
    }
}).setCriteria("&r &r&a&r&a&lSLAYER QUEST COMPLETE!&r").setContains();

import Settings from "./config";

register("chat", (player,event) => {
    if(Settings.slayerhelp){
        Client.showTitle("&aKILL THIS BOSSS", "§7YOUR BOSS", 10, 5, 10)
        World.playSound("player.levelup", 100, 100)
    }
}).setCriteria("&r &r&a&r&a&lSLAYER QUEST COMPLETE!&r").setContains();