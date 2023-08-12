import Settings from "./config";

register("chat", (player,event) => {
    if(Settings.fortuneBoostToggle){
        Client.showTitle("&6Fortune Boost", "§7Use it", 20, 20, 20)
        Client.showTitle("&6Fortune Boost", "§7Use it", 20, 20, 20)
        World.playSound("note.pling", 10, 10)
        World.playSound("note.pling", 10, 10)
        World.playSound("note.pling", 10, 10)
        World.playSound("note.pling", 10, 10)
    }
}).setCriteria("Mining Fortune Boost is now available!");

register("chat", (player,event) => {
    if(Settings.speedBoostToggle){ 
        Client.showTitle("&6Speed Boost", "§7Use it", 20, 20, 20)
        Client.showTitle("&6Speed Boost", "§7Use it", 20, 20, 20)
        World.playSound("note.pling", 10, 10)
        World.playSound("note.pling", 10, 10)
        World.playSound("note.pling", 10, 10)
        World.playSound("note.pling", 10, 10)
    }
}).setCriteria("Mining Speed Boost is now available!");

const KeyBindRightClick = Client.getKeyBindFromKey(Client.getMinecraft().field_71474_y.field_74313_G.func_151463_i())
//Client.getKeyBindFromKey(Client.getMinecraft().gameSettings.keyBindUseItem.getKeyCode())
register("chat", () => {
    if(Settings.autoboost){
        KeyBindRightClick.setState(true)
        setTimeout(() => {KeyBindRightClick.setState(false)}, 300) // unpresses key after 300ms
    }
}).setCriteria("Mining Fortune Boost is now available!").setContains()