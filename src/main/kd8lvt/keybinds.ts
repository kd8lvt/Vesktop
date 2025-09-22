export const keybinds = {
  mute: {
    callback: (webContents)=>{
      webContents.executeJavaScript(`window.kd8lvt.buttons.mute.click();`);
    },
    key: "F9",
    name: "Mute"
  },
  deafen: {
    callback: (webContents)=>{
      webContents.executeJavaScript(`window.kd8lvt.buttons.deafen.click();`);
    },
    key: "F10",
    name: "Deafen"
  }
}