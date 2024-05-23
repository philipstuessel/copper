# LS Documentation

The LS (LocalStorage) class provides a simple interface to interact with the browser's localStorage facility, allowing the storage, retrieval, deletion, and complete clearance of data under a specific namespace defined by storageKey.

The class uses the key-value method, whereby each data entry consists of a unique key and an assigned value. A basic key (storageKey) is used as a prefix, followed by a colon as a separator and the specific key of the data entry.

example:
```
storageKey:main = 1
storageKey:name = Alice

storage:main = 1
```

Constructor
Syntax:

```js
const storageInstance = new LS(storageKey);
```
Parameters:

storageKey (string): A string identifier used as the key under which all related data is stored in localStorage.
Description: Creates an instance of the LS class, initializing it with a storageKey which is used to namespace the data in the local storage.

Methods
`save(key, value)`

### Stores a value under a specified key within the namespace defined by storageKey.

Parameters:

key (string): The key under which the value should be stored.
value (any): The value to store. This can be any type that is serializable to JSON.
Example:

```js
storageInstance.save('user', { name: 'Alice', age: 30 });
load(key)
```

### Retrieves a value stored under a specified key within the namespace.

Parameters:

key (string): The key whose value needs to be retrieved.
Returns:

Returns the value associated with the key if found; otherwise, returns null.
Example:

```js
const user = storageInstance.load('user');
console.log(user);
remove(key)
```

### Removes a value stored under a specified key within the namespace.

Parameters:

key (string): The key whose value should be removed.
Example:

```js
storageInstance.remove('user');
loadAll()
```

### Retrieves all stored data within the namespace defined by storageKey.

Returns:

An object containing all key-value pairs stored under the namespace.
Example:

```js
const allData = storageInstance.loadAll();
console.log(allData);
clear()
```

### Clears all data stored under the namespace defined by storageKey.

Example:

`storageInstance.clear();`

Usage Example
```js

const storage = new LS('myAppStorage');

// Storing data
storage.save('user', { name: 'Alice', age: 30 });
storage.save('theme', 'dark');

// Retrieving data
const user = storage.load('user');
console.log(user);

// Removing data
storage.remove('theme');

// Retrieving all data
const allData = storage.loadAll();
console.log(allData);

// Clearing all data
storage.clear();
```