export const keybinds = {
  mute: (webContents)=>{
    webContents.executeJavaScript(`window.kd8lvt.buttons.mute.click();`);
  },
  deafen: (webContents)=>{
    webContents.executeJavaScript(`window.kd8lvt.buttons.deafen.click();`);
  }
}