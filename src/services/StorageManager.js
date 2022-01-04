class StorageManager {
    addItem(name, myObj) {
        const myObj_serialized = JSON.stringify(myObj);
        localStorage.setItem(name, myObj_serialized);
    }
    removeItem(name) {
        localStorage.removeItem(name);
    }
    getItem(name) {
        const myObj_deserialized = JSON.parse(localStorage.getItem(name));
        return myObj_deserialized;
    }
}

export default new StorageManager();
