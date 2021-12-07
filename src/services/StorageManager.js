export class StorageManager  {
  addItem(name, myObj) {
    let myObj_serialized = JSON.stringify(myObj)
    localStorage.setItem(name, myObj_serialized)
   }
   
  removeItem(name) {
     localStorage.removeItem(name)
   }
  getItem(name) {
      let myObj_deserialized = JSON.parse(localStorage.getItem(name))
      return myObj_deserialized
   }
} 