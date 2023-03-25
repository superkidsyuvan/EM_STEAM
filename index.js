const { app, BrowserWindow } = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width:550,
        height:325,
        icon: "./resources/app/src_files/images/bin/SYS/ico/light.ico",
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('./src_files/data/index.html')
    win.setMenuBarVisibility(false)

    //win.webContents.openDevTools()
    //  <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';"> <script src="window.location.href.slice(0,-10)+'add_in_library.js'"> <-- tag use in head if no work (:
    // also add in body LAST, <div id="library_com"></div> (also <div id="sound_lib"></div>)
    // add bootleg() to end of imgur() and google()
    // add bootarm() to end of RBX() and drive()
    // remeber the button sound thing idk i forgor 
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
})