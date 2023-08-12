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

