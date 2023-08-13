import Settings from "./config";

let pet = new KeyBind("Pets", "", " !§4Stormalpha")

register('step', () => {
    if (pet.isPressed()) ChatLib.command('pet')
})

let wardrobe = new KeyBind("Wardrobe", "", " !§4Stormalpha")

register('step', () => {
    if (wardrobe.isPressed()) ChatLib.command('wardrobe')
})

let ec = new KeyBind("Enderchest", "", " !§4Stormalpha")

register('step', () => {
    if (ec.isPressed()) ChatLib.command('ec')
})

let bz = new KeyBind("Bazzar", "", " !§4Stormalpha")

register('step', () => {
    if (bz.isPressed()) ChatLib.command('bz')
})
let sa = false

register("renderOverlay", myRenderOverlay);

function myRenderOverlay() {
    if(sa == false){
        Renderer.drawString("&e&lRight_Control for gui", 435, 300);
        Renderer.drawString("&e(Will disapear when the gui is opened)", 395, 310)
    }
}

new KeyBind("StormGUI", Keyboard.KEY_RCONTROL, "!§4Stormalpha").registerKeyPress(() => {
    Settings.openGUI()
    sa = true
})
