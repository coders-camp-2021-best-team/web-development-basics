export class StorageManager  {
    addAsset(name, myObj) {
      let myObjToString = JSON.stringify(myObj)
      localStorage.setItem(name, myObjToString)
     }
     
    removeAsset(name) {
       localStorage.removeItem(name)
     }
 } 