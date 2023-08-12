import Settings from "./config";

register("chat", (player,event) => {
    if(Settings.darkwarp){
        Client.showTitle("&5DARK AUCTION", "§7Auto warping", 20, 20, 20)
        Client.showTitle("&5DARK AUCTION", "§7Auto warping", 20, 20, 20)
        ChatLib.command("warp da")
        ChatLib.chat("LOL")
    }
}).setCriteria("&5&oA mysterious dark buisness is about to start in sirius's cave.").setContains();

register("chat", (player,event) => {
    if(Settings.soulwarp){
        Client.showTitle("&6ONE SOUL", "§7Auto warping", 20, 20, 20)
        Client.showTitle("&6ONE SOUL", "§7Auto warping", 20, 20, 20)
        ChatLib.command("warp isle")
    }
}).setCriteria("BOSS! One Soul seems spawning in the stronghold..").setContains();

