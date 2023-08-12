import Settings from "./config";

new KeyBind("Pets", Keyboard.DOWN, "!§4Stormalpha").registerKeyPress(() => {
    ChatLib.command("pet")
})

new KeyBind("Wardrobe", Keyboard.RIGHT, "!§4Stormalpha").registerKeyPress(() => {
    ChatLib.command('wardrobe')
})

new KeyBind("Enderchest", Keyboard.UP, "!§4Stormalpha").registerKeyPress(() => {
    ChatLib.command('ec')
})

new KeyBind("Bazzar", Keyboard.LEFT, "!§4Stormalpha").registerKeyPress(() => {
    ChatLib.command("bz)
})

new KeyBind("StormGUI", Keyboard.KEY_RCONTROL, "!§4Stormalpha").registerKeyPress(() => {
    Settings.openGUI()
    sa = true
})
