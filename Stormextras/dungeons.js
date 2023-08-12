import Settings from "./config";

register("chat", (player,event) => {
    if(Settings.maxorAlertToggle){
        Client.showTitle("§4§nNUKE WATCH OUT", "§7Dont die Nerd", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("[BOSS] Maxor: LET ME JUST GET OUT!").setContains();

register("chat", (player,event) => {
    if(Settings.maxorAlertToggle){
        Client.showTitle("§4§nNUKE WATCH OUT", "§7Dont die Nerd", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("[BOSS] Maxor: I HAD JUST NOT SEEN THAT THE MACHINE WAS RUNNING.").setContains();

register("chat", (player,event) => {
    if(Settings.maxorAlertToggle){
        Client.showTitle("§4§nGO TO MID", "§7DPS NERD", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("[BOSS] Maxor: WHO POWERED THOSE LEVERS?!").setContains();

let cbClicked = false

register("playerInteract", (action, pos, event) => {
    if(cbClicked) return
    if(action.toString() !== "RIGHT_CLICK_BLOCK") return
    if(Player.lookingAt()?.type?.getRegistryName() !== "minecraft:command_block") return
    if(Settings.termialsolver){
        cbClicked = true
    }
})

register("GuiOpened", (gui) => {
    if(!cbClicked) return
    Client.scheduleTask(2, ()=>{
        Player.getContainer().click(50)
        cbClicked = false
    })
}) 
