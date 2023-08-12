import { @Vigilant, 
    @TextProperty, 
    @ColorProperty, 
    @ButtonProperty, 
    @SwitchProperty, 
    Color 
} from 'Vigilance';

@Vigilant('Stormextras', 'config',{
})
class Settings {
    
    //SLAYERS
    @SwitchProperty({
        name: "&4Rev &7Boss Drops",
        description: "Click to enable Boss Drop alerts for rare drops!",
        category: "Slayer",
        subcategory: "Bosses",
    })
    revBossDrop = false;

    @SwitchProperty({
        name: "&8Tara &7Boss Drops",
        description: "Click to enable Boss Drop alerts for rare drops!",
        category: "Slayer",
        subcategory: "Bosses",
    })
    taraBossDrop = false;

    @SwitchProperty({
        name: "&fsven &7Boss Drops",
        description: "Click to enable Boss Drop alerts for rare drops!",
        category: "Slayer",
        subcategory: "Bosses",
    })
    svenBossDrop = false;

    @SwitchProperty({
        name: "&4Slayer trading help",
        description: "&7An easy way to see if its your boss to kill",
        category: "Slayer",
        subcategory: "Trading",
    })
    slayerhelp = false;

    //MINING
    @SwitchProperty({
        name: "&6Fortune Boost",
        description: "Click to enable Mining Fortune Boost alert",
        category: "Mining",
        subcategory: "Abilities",
    })
    fortuneBoostToggle = false;

    @SwitchProperty({
        name: "&6Speed Boost",
        description: "Click to enable Mining Speed Boost alert",
        category: "Mining",
        subcategory: "Abilities",
    })
    speedBoostToggle = false;

    @SwitchProperty({
        name: "&6Auto Boost",
        description: "Click to automatically toggle mining boosts",
        category: "Mining",
        subcategory: "Abilities",
    })
    autoboost = false;



    //ANGELICA
    @SwitchProperty({
        name: "Angelica Prediction",
        description: "Click to enable Angelica Predictions \nUse spade then click your keybind (set in MC options)",
        category: "Angelica",
        subcategory: "Burrows",
    })
    angelicaPredictionToggle = false;

    @SwitchProperty({
        name: "Angelica Mob Alert",
        description: "Click to enable Angelica Mob alert \nMakes a quick alert telling which mob was just dug up",
        category: "Angelica",
        subcategory: "Burrows",
    })
    angelicaAlertToggle = false;

    //FISHING
    @SwitchProperty({
        name: "Fishing Sea Emp Alert",
        description: "Quick alert when you fish up a Sea Emp",
        category: "Fishing",
        subcategory: "Sea creatures",
    })
    seaempAlertToggle = false;

    @SwitchProperty({
        name: "Fishing Werewolf Alert",
        description: "Quick alert when you fish up a Werewolf",
        category: "Fishing",
        subcategory: "Sea creatures",
    })
    werewolfAlertToggle = false;

    //DUNGEONS
    @SwitchProperty({
        name: "&4Maxor &fchat helper",
        description: "Helps with dungeons however is a WIP",
        category: "Dungeons",
        subcategory: "Maxor",
    })
    maxorAlertToggle = false;

    @SwitchProperty({
        name: "Terminal Solver",
        description: "Does not do anything at this moment in time",
        category: "Dungeons",
        subcategory: "Terminals",
    })
    terminalSolverToggle = false;

    //COPYCHAT
    @SwitchProperty({
        name: "Copy Chat",
        description: "Makes an option to copy any chat message",
        category: "Copy chat",
        subcategory: "toggle",
    })
    enabled = false;

    @SwitchProperty({
        name: "Copy Colors",
        description: "Makes an option to copy colors \nOnly works with certain ranks does not bypass this",
        category: "Copy chat",
        subcategory: "colors",
    })
    colours = false;

    //KEYBINDS
    @ButtonProperty({
        name: "&cKeybinds",
        description: "Keybinds can be found in minecraft control options\nThis button is just for show :)",
        category: "Keybinds",
        subcategory: "Keybinds",
        placeholder: "DONT WORK CLICK ME"
    })
    myButtonAction() {
        ChatLib.chat("I SAID THIS DONT WORK DUMBASS")    
    }
    
    //FAIRYHEARTS
    @SwitchProperty({
        name: "&cFairyhearts",
        description: "Shows all fairy heart locations",
        category: "FairyHearts",
        subcategory: "FairyHearts",
    })
    fairyhearts = false;
    
    //AUTOWARP
    @SwitchProperty({
        name: "&5Dark Auction",
        description: "Automatic warp to dark auction (only wih &6SVP &rOR &6CONTRA&c+ &rRANK)",
        category: "AutoWarps",
        subcategory: "Ranked",
    })
    darkwarp = false;

    @SwitchProperty({
        name: "&6&lONE SOUL",
        description: "Automatic warp to &6&lONE SOUL",
        category: "AutoWarps",
        subcategory: "UnRanked",
    })
    soulwarp = false;

    //EXTRA INFO
    constructor() {
        this.initialize(this)
        this.registerListener("Copy Colors", colours => {
            ChatLib.command(`sacopy colours`, true);
        });
        this.registerListener("Copy Chat", colours => {
            ChatLib.command(`sacopy toggle`, true);
        });
        this.setCategoryDescription("Slayer", "&c&lSlayers")
        this.setCategoryDescription("Mining", "&8&lMining")
        this.setCategoryDescription("Fishing", "&b&lFishing")
        this.setCategoryDescription("Angelica", "&f&lAngelica")
        this.setCategoryDescription("Dungeons", "&4&lDungeons")
        this.setCategoryDescription("Copy chat", "&9&lCopy Chat")
        this.setCategoryDescription("Keybinds", "&f&lKeybinds")        
        this.setCategoryDescription("FairyHearts", "&c&lFairyHearts")     
        this.setCategoryDescription("AutoWarps", "&5&lAutoWarps")
        this.setSubcategoryDescription("Angelica", "Burrows", "&f&lUsefull QOL features to help when Angelica is mayor")
        this.setSubcategoryDescription("AutoWarps", "Ranked", "&c&lOnly for ranked players")
        this.setSubcategoryDescription("AutoWarps", "UnRanked", "&a&lAnyone can use these warps")
        this.setSubcategoryDescription("Copy chat", "colors", "&7&lUsed if your rank is &6[SVP] &7&lor &6[CONTRA&c+&6] &7&lto copy chat colors")
        this.setSubcategoryDescription("Copy chat", "toggle", "&7&lUseable by any rank to make you able to copy chat messages if you dont already have one")
        this.setSubcategoryDescription("Dungeons", "Maxor", "&7&lAlerts when &4Maxor &7&lsends chat messages to make dungeons a little better")
        this.setSubcategoryDescription("Dungeons", "Terminals", "&7&lToggle this to automatically toggle dungeon terminal solvers")
        this.setSubcategoryDescription("FairyHearts", "FairyHearts", "&7&lToggle to be able to see a waypoint for every &cFairyHeart &7&laround the map\n&c&lCan cause massive frame drops so do not keep it on all the time")
        this.setSubcategoryDescription("Fishing", "Sea creatures", "&7&lQOL features when fishing")
        this.setSubcategoryDescription("Keybinds", "Keybinds", "&c&lDOES NOT WORK AS OF NOW JUST GO INTO MINECRAFT SETTTINGS")
        this.setSubcategoryDescription("Mining", "Abilities", "&7&lUsed to alert you for &6Fortune &7&land &6Speed boosts &7&lWhen mining")
        this.setSubcategoryDescription("Slayer", "Bosses", "&c&lSlayer &7&ldrop alerts for each slayer")
        this.setSubcategoryDescription("Slayer", "Trading", "&7&lWill allert you when it is the boss your need to kill when trading on &4STORMALPHA")
    
    }   
}

export default new Settings();
