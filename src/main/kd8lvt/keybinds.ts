export const keybinds = {
  mute: (webContents)=>{
    webContents.executeJavaScript(`for (let val of document.getElementsByTagName('button')) {
  if (val.ariaLabel == 'Mute') {val.click();break;}
}`)
  },
  deafen: (webContents)=>{
    webContents.executeJavaScript(`for (let val of document.getElementsByTagName('button')) {
  if (val.ariaLabel == 'Deafen') {val.click();break;}
}`)
  }
}