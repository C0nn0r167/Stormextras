import Settings from "./config";
const Mc = Client.getMinecraft();

register("chat", (player,event) => {
    if(Settings.werewolfAlertToggleAlertToggle){
        Client.showTitle("&2WEREWOLF", "§7Go kill it nerd", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("You fished up Werewolf!");

register("chat", (player,event) => {
    if(Settings.seaempAlertToggle){
        Client.showTitle("&6EMPEROR", "§7Go kill it nerd", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("You fished up Sea Emperor!");






