const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { exit } = require('process');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    icon: __dirname + '/icon.png',
  });
  
  // and load the index.html of the app.
  //mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setTitle("GetsionD");
  mainWindow.loadURL('http://docsmanager.gq/');
  mainWindow.maximize();
  
  var menu = Menu.buildFromTemplate([
    {
      label: 'Inicio',
      accelerator: 'CommandOrControl+I',
      click(){
        mainWindow.loadURL('http://docsmanager.gq//');
      }
    },
    {
      label: 'Propietarios',
      submenu: [
        {
          label: 'Agregar Propietario',
          accelerator: 'CommandOrControl+D',
          click(){
            mainWindow.loadURL('http://docsmanager.gq//add_customer');
          }
        },
        {
          label: 'Ver Propietarios',
          accelerator: 'CommandOrControl+G',
          click(){
            mainWindow.loadURL('http://docsmanager.gq//table_customer');
          }
        }
      ],
    },
    {
      label: 'Mascotas',
      submenu: [
        {
          label: 'Agregar Mascota',
          accelerator: 'CommandOrControl+M',
          click(){
            mainWindow.loadURL('http://docsmanager.gq//add_pet');
          }
        },
        {
          label: 'Ver Mascotas',
          accelerator: 'CommandOrControl+T',
          click(){
            mainWindow.loadURL('http://docsmanager.gq//table_pet');
          }
        }
      ],
    },
    {
      label: 'Informes',
      submenu: [
        {
          label:'Nuevo Registro',
          accelerator: 'CommandOrControl+N',
          click(){
            mainWindow.loadURL('http://docsmanager.gq//add_inform');
          }
        },
        {
          label:'Ver Registros',
          accelerator: 'CommandOrControl+Q',
          click(){
            mainWindow.loadURL('http://docsmanager.gq//table_inform');
          }
        }
      ],
    },
    {
      label: 'Aplicacion',
        submenu: [
          {
            label:'Salir',
            role: 'close',
          }
        ]
    }
  ])
  Menu.setApplicationMenu(menu); 
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
