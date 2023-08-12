let cbClicked = false

register("playerInteract", (action, pos, event) => {
    if(cbClicked) return
    if(action.toString() !== "RIGHT_CLICK_BLOCK") return
    if(Player.lookingAt()?.type?.getRegistryName() !== "minecraft:command_block") return
    cbClicked = true
})

register("GuiOpened", (gui) => {
    if(!cbClicked) return
    Client.scheduleTask(2, ()=>{
        //ChatLib.chat("lol")
        Player.getContainer().click(50)
        
        cbClicked = false
    })
}) 
const KeyBindRightClick = Client.getKeyBindFromKey(Client.getMinecraft().field_71474_y.field_74313_G.func_151463_i())

register('soundPlay', (pos, name, vol, pitch, cat, event) => {
    if (pitch !== 1.0158731){
        fishdone = true
        KeyBindRightClick.setState(true)
        setTimeout(() => {KeyBindRightClick.setState(false)}, 300) // unpresses key after 300ms
        KeyBindRightClick.setState(true)
        setTimeout(() => {KeyBindRightClick.setState(false)}, 300) // unpresses key after 300ms

    }

  }).setCriteria("random.splash") 

