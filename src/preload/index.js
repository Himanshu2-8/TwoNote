import { contextBridge } from 'electron'
import { ipcRenderer } from 'electron/renderer'

if (process.contextIsolated) {
  throw new Error('contextIsolation must be enabled')
}

try {
  contextBridge.exposeInMainWorld('notes', {
    save: (note) => ipcRenderer.invoke('notes:save', note),
    getAll: () => ipcRenderer.invoke('notes:getAll'),
    get: (id) => ipcRenderer.invoke('notes:get', id),
    delete: (id) => ipcRenderer.invoke('notes:delete', id)
  })
} catch (error) {
  console.log(error)
}
