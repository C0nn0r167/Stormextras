import RenderLib from "../RenderLib";
import renderBeaconBeam from "../BeaconBeam";
import Settings from "./config";

let waypointList = [
    {x: 151, y: 70, z: 164},
    {x: 119, y: 78, z: 132},
    {x: -19, y: 64, z: -113},
    {x: -50, y: 86, z: -72},
    {x: 181, y: 63, z: -19},
    {x: 155, y: 98, z: -72},
    {x: -48, y: 83, z: -16},
    {x: 51, y: 71, z: -117},
    {x: 51, y: 72, z: -164},
    {x: 17, y: 71, z: -137},
    {x: 79, y: 80, z: -121},
    {x: 67, y: 82, z: -149},
    {x: 101, y: 72, z: -118},
    {x: 238, y: 81, z: -40},
    {x: -325, y: 147, z: -593},
    {x: -346, y: 75, z: -552},
    {x: -396, y: 238, z: -767},
    {x: -361, y: 133, z: -469},
    {x: -516, y: 123, z: -769},
    {x: -726, y: 144, z: -891},
    {x: -690, y: 98, z: -798},
    {x: -445, y: 110, z: -1026},
    {x: -380, y: 141, z: -1020},
    {x: -243, y: 80, z: -954},
    {x: -38, y: 121, z: -955},
    {x: -104, y: -593, z: -819},
    {x: -480, y: 104, z: -593},
    {x: -502, y: 103, z: -303},
    {x: -484, y: 113, z: -173},
    {x: -583, y: 208, z: -272},
    {x: -672, y: 124, z: -207},
    {x: -748, y: 106, z: -284},
    {x: -640, y: 91, z: -142},
    {x: -721, y: 119, z: -371},
    {x: -653, y: 108, z: -257},
    {x: -692, y: 19, z: -300},
    {x: -718, y: 57, z: -226},
    {x: -571, y: 38, z: -331},
    {x: -351, y: 99, z: 76},
    {x: -411, y: 76, z: 42},
    {x: -478, y: 136, z: -117},
    {x: -324, y: 104, z: -59},
    {x: -397, y: 119, z: 35},
    {x: 147, y: 113, z: 125},
    {x: 55, y: 75, z: 147},
    {x: 45, y: 65, z: 189},
    {x: 42, y: 124, z: 79},
    {x: 98, y: 105, z: 155},
    {x: 129, y: 134, z: 110},
    {x: 93, y: 75, z: 181},
    {x: 174, y: 59, z: 48},
    {x: 114, y: 70, z: 178},
    {x: 92, y: 111, z: 92},
    {x: 131, y: 122, z: 113},
    {x: 131, y: 122, z: 113},
    {x: 103, y: 93, z: 111},
    {x: 161, y: 70, z: 79},
    {x: 43, y: 113, z: 17},
    {x: -2, y: 174, z: 43},
    {x: -51, y: 166, z: 43},
    {x: -44, y: 128, z: 87},
    {x: 37, y: 71, z: 75},
    {x: -32, y: 71, z: 21},
    {x: -53, y: 71, z: 49},
    {x: 18, y: 122, z: 5},
    {x: -22, y: 80, z: 190},
    {x: -133, y: 74, z: 133},
    {x: -185, y: 75, z: 117},
    {x: -252, y: 118, z: 51},
    {x: -265, y: 61, z: 57},
    {x: -150, y: 87, z: -33},
    {x: -226, y: 72, z: -12},
    {x: -185, y: 73, z: -120},
    {x: -85, y: 72, z: -113},
    {x: -190, y: 82, z: -93},
    {x: -32, y: 90, z: -176},
    {x: -34, y: 75, z: -131},
    {x: 6, y: 60, z: -155},
    {x: 13, y: 76, z: -154},
    {x: -31, y: 71, z: -192},
    {x: -43, y: 70, z: -130},
    {x: -3, y: 78, z: -208},
    {x: -29, y: 77, z: -62},
    {x: 8, y: 79, z: -99},
    {x: 27, y: 71, z: -63},
    {x: 57, y: 79, z: -75},
    {x: 25, y: 66, z: -29},
    {x: 31, y: 75, z: -40},
    {x: 13, y: 62, z: -13},
    {x: -77, y: 78, z: -46},
    {x: -52, y: 45, z: -350},
    {x: 18, y: 81, z: -335},
    {x: -48, y: 51, z: -317},
    {x: -10, y: 57, z: -286},
    {x: 21, y: 40, z: -360},
    {x: -57, y: 68, z: -364},
    {x: -383, y: 71, z: -883},
    {x: -104, y: 127, z:-819},
]

let toggle = false

register("command", () => {
    toggle = !toggle
    }).setName("fairyheart")

register("renderWorld", () => {
    if(Settings.fairyhearts){
        waypointList?.forEach(waypoint => {
            RenderLib.drawEspBox(waypoint.x, waypoint.y, waypoint.z, 1, 1, 0, 1, 0, 255, true)
        
        
        })
    }
})

register("clicked", (mouseX, mouseY, button, isButtonDown) => {
    if (!isButtonDown && button == 1 && Player.lookingAt() instanceof Block) {
        waypointList?.forEach((waypoint, index) => {
            let lookingAt = Player.lookingAt()
            if (waypoint.x == lookingAt.x && waypoint.y == lookingAt.y && waypoint.z == lookingAt.z) {
                waypointList[index] = {}


register("chat", (message) => {
    Client.showTitle("&4Already found this one", "&7oops", 20, 20, 20)
    World.playSound("random.anvil_land", 10, 10)
    World.playSound("random.anvil_land", 10, 10)
    World.playSound("random.anvil_land", 10, 10)
    World.playSound("random.anvil_land", 10, 10)
}).setCriteria("&cYou have already picked up this fairy heart!").setContains();
            }
        })
    }
})