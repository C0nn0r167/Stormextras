import renderBeaconBeam from "../BeaconBeam";
import RenderLib from "../RenderLib";
import Settings from "./config";

register("chat", (player,event) => {
    if(Settings.angelicaAlertToggle){
        Client.showTitle("&bINQUIS", "§7Kill it when", 20, 20, 20)
        Client.showTitle("&bINQUIS", "§7Kill it when", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("Uh oh! You dug out a Grand Inquisitor!");

register("chat", (player,event) => {
    if(Settings.angelicaAlertToggle){
        Client.showTitle("&aWITCH", "§7kill when", 20, 20, 20)
        Client.showTitle("&aWITCH", "§7kill when", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("Uh oh! You dug out a Ritualist Witch!");

register("chat", (player,event) => {
    if(Settings.angelicaAlertToggle){
        Client.showTitle("&4WRONG LADY", "§7Kill it when", 20, 20, 20)
        Client.showTitle("&4WRONG LADY", "§7Kill it when", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("Uh oh! You dug out a Wrong Lady!");

register("chat", (player,event) => {
    if(Settings.angelicaAlertToggle){
        Client.showTitle("&fMASKED BLOOD", "§7Kill it when", 20, 20, 20)
        Client.showTitle("&fMASKED BLOOD", "§7Kill it when", 20, 20, 20)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
        World.playSound("random.anvil_land", 10, 10)
    }
}).setCriteria("Uh oh! You dug out a Masked Blood!");

register("chat", (player,event) => {
    if(Settings.angelicaAlertToggle){
        Client.showTitle("&6FLED HAWK", "§7Kill it when", 20, 20, 20)
        Client.showTitle("&6FLED HAWK", "§7Kill it when", 20, 20, 20)
        World.playSound("random.level_up", 10, 10)
    }
}).setCriteria("Uh oh! You dug out a Fled Hawk!");


//UNDERGROUNDBURROW
register("chat", (message) => {
    if(Settings.angelicaAlertToggle){
        Client.showTitle("&6NEW BURROW", "&fUse spade then press K", 10, 20, 10)
        World.playSound("random.anvil_land", 10, 10) 
    }
}).setCriteria("You dug out an Undergrown Burrow!").setContains();


let wpx = 0
let wpy = 0
let wpz = 0
let wpa = 0

let angelicakey = new KeyBind("Angelica", "", " !§4Stormalpha")

register('step', () => {
    if (angelicakey.isPressed() && (Settings.angelicaPredictionToggle)) ChatLib.command("getvar SB/Angelica/Burrows/%player's uuid%")
})
    
register("chat", (coords, i, event) => {
    coords = coords.replace("@", "").split(" ")
    
    if (coords.length != 3) return
    
    try {
        wpx = parseInt(coords[0])
        wpy = parseInt(coords[1])
        wpz = parseInt(coords[2])
    } catch (e) {
        console.log(e)
        return
    }
    
    wpa = 1
    
}).setChatCriteria("${coords}/${i}")

register("renderWorld", () => {
    if(Settings.angelicaPredictionToggle){
            renderBeaconBeam(wpx - 1, wpy, wpz - 0.5, 255, 0, 0, 255, true)
    }
})

register("chat", (message) => {
    Client.showTitle("&6NEW BURROW", "&fUse spade before you pres k", 10, 20, 10)
    World.playSound("random.anvil_land", 10, 10)
    World.playSound("random.anvil_land", 10, 10)
    World.playSound("random.anvil_land", 10, 10)
    World.playSound("random.anvil_land", 10, 10)
}).setCriteria("@<none>").setContains();

let waypointList = [
    {x: -0.5, y: 88, z: 99.5},
    {x: -10.5, y: 72, z: 145.5},
    {x: 36.5, y: 71, z: 134.5},
    {x: -7.5, y: 69, z: 173.5},
    {x: -59.5, y: 70, z: 158.5},
    {x: 54.5, y: 86, z: 64.5},
    {x: 105.5, y: 71, z: -6.5},
    {x: 179.5, y: 70, z: -53.5},
    {x: 119.5, y: 71, z: -114.5},
    {x: 88.5, y: 71, z: -150.5},
    {x: -44.5, y: 77, z: -160.5},
    {x: -9.5, y: 77, z: -215.5},
    {x: -76.5, y: 80, z: -205.5},
    {x: -116.5, y: 75, z: -200.5},
    {x: -131.5, y: 73, z: -177.5},
    {x: -172.5, y: 71, z: -143.5},
    {x: -188.5, y: 72, z: -115.5},
    {x: -161.5, y: 71, z: -128.5},
    {x: -203.5, y: 73, z: -63.5},
    {x: -207.5, y: 72, z: -39.5},
    {x: -180.5, y: 73, z: -8.5},
    {x: -157.5, y: 74, z: -50.5},
    {x: -120.5, y: 73, z: -39.5},
    {x: -99.5, y: 68, z: -2.5},
    {x: -88.5, y: 70, z: -21.5},
    {x: -68.5, y: 74, z: -11.5},
    {x: 62.5, y: 82, z: 79.5},
    {x: 57.5, y: 74, z: 101.5},
    {x:37.5,y: 68,y: 164.5},
    {x:-37.5,y: 69,y: 183.5},
    {x:-90.5,y: 67,y: 147.5},
    {x:-107.5,y: 66,y: 121.5},
    {x:-84.5,y: 71,y: 96.5},
    {x:-133.5,y: 70,y: 55.5},
    {x:-142.5,y: 69,y: 71.5},
    {x:-171.5,y: 71,y: 11.5},
    {x:-200.5,y: 73.1,y: -12.5},
    {x:-203.5,y: 73,y: -49.5},
    {x:-216.5,y: 69,y: -55.5},
    {x:-204.5,y: 73,y: -98.5},
    {x:-188.5,y: 72,y: -115.5},
    {x:-179.5,y: 71,y: -123.5},
    {x:-172.5,y: 71,y: -143.5},
    {x:-125.5,y: 73,y: -195.5},
    {x:-83.5,y: 73,y: -219.5},
    {x:-60.5,y: 79.1,y: -213.5 },
    {x:-33.5,y: 72,y: -223.5 },
    {x:-23.5,y: 74,y: -224.5 },
    {x:10.5,y: 79,y: -218.5 },
    {x:50.5,y: 71,y: -176.5 },
    {x:49.5,y: 71,y: -151.5 },
    {x:79.5,y: 69,y: -67.5 },
    {x:155.5,y: 75,y: -81.5 },
    {x:184.5,y: 70,y: -42.5 },
    {x:178.5,y: 70,y: -22.5} ,
    {x:161.5,y: 70,y: 4.5 },
    {x:172.5,y: 74,y: 13.5 },
    {x:134.5,y: 69,y: 30.5 },
    {x:124.5,y: 68.1,y: 34.5 },
    {x:122.5,y: 71,y: 75.5 },
    {x:158.5,y: 72,y: 105.5 },
    {x:146.5,y: 66,y: 129.5 },
    {x:149.5,y: 68,y: 145.5 },
    {x:125.5,y: 66,y: 157.5 },
    {x:105.5,y: 71,y: 169.5 },
    {x:32.5,y: 66,y: 184.5 },
    {x:21.5,y: 68,y: 182.5 },
    {x:-207.5,y: 66,y: 140.5 },
    {x:-236.5,y: 63,y: 143.5 },
    {x:-252.5,y: 58,y: 138.5 },
    {x:-254.5,y: 89,y: 120.5 },
    {x:-239.5,y: 91,y: 120.5 },
    {x:-218.5,y: 91,y: 118.5},
    {x:-197.5,y: 88,y: 81.5},
    {x: 134.5,y: 69,z:30.5},
    {x: 149.5,y: 68,z:145.5},
    {x: 10.5,y: 79,z:-218.5},
    {x: 122.5,y: 71,z:75.5},
    {x: -252.5,y: 58,z:138.5},
    {x: -85.5,y: 71,z: 96.5},
]

register("renderWorld", () => {
    if(Settings.angelicaPredictionToggle){
        waypointList?.forEach(waypoint => {
            RenderLib.drawEspBox(waypoint.x, waypoint.y, waypoint.z, 1.02, 1.02, 1, 0, 0, 0.4, false)
        })
    }
})