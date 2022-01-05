import StorageManager from '../src/services/StorageManager';

describe('StorageManager test', () => {
    describe('Set value and key to add item to local storage', () => {
        const value = {
            id: 'id',
            movie: 'movie'
        };
        const key = 'key';
        describe('Add value with a key to local storage', () => {
            it('Then check whether StorageManager gets proper value by passing its key', () => {
                StorageManager.addItem(key, value);
                expect(StorageManager.getItem(key)).toEqual(value);
            });
        });
        describe('Remove item from local storage by passing its key', () => {
            it('Then check whether StorageManager returns null due to the absence of key and value', () => {
                StorageManager.removeItem(key);
                expect(StorageManager.getItem(key)).toBeNull();
            });
        });
    });
});
