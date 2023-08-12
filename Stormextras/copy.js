import PogObject from "../PogData"

let settings = new PogObject("Stormextras", {
  "enabled": false,
  "colours": false
})

register("chat", (event) => {
  if (!settings.enabled || ChatLib.getChatMessage(event) == " ") return
  let chunks = ChatLib.getChatMessage(event, true).replaceAll("&r", "&7").split("&")
  let word = []
  chunks.forEach((ch,i) => {
    word.push("&" + ch.split(" ").join(` &${ch[0]}`))
  })
  let msg = word.join("").substring(1)
  let chat = new Message(EventLib.getMessage(event))
  chat.addTextComponent(new TextComponent(` &7[C]`).setClick("run_command", `/copyToClipboard ${msg}`))
  cancel(event)
  ChatLib.chat(chat)
})

register("command", (...args) => {
  ChatLib.command(settings.colours? "ct copy " + args.join(" ").replaceAll("§", "&") : "ct copy " + args.join(" ").removeFormatting(), true)
  ChatLib.chat(new TextComponent("&6Copied to clipboard!").setHoverValue(settings.colours? args.join(" ").replaceAll("§", "&") : args.join(" ").removeFormatting()))
}).setName("copyToClipboard")

register("command", (arg) => {
  switch (arg){
    case "toggle":
      settings.enabled = !settings.enabled
      break
    case "colours":
      settings.colours = !settings.colours
      break
  }
}).setName("sacopy").setTabCompletions(["toggle", "colours", "settings"])


