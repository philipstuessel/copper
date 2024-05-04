# Params

The Params class is a JavaScript utility class designed to facilitate the management and manipulation of URL parameters. It provides methods for initializing parameters based on either the current URL or a provided URL, retrieving parameter values, checking parameter existence and values, adding new parameters, and updating existing parameters. The class offers flexibility for handling both internal and external URLs.

Key features of the Params class include:

1. Initialization: The class can be initialized with either the current URL or a provided URL. When initialized, it extracts various components of the URL such as the pathname, host, protocol, and search parameters.

2. Retrieval: It provides methods for retrieving parameter values based on their keys. These methods automatically convert parameter values to boolean values or null using a specified conversion function.

3. Checking: The class allows for checking the existence of parameters and their values. The is method checks if a parameter exists and optionally verifies its value against a provided value.

4. Modification: Parameters can be added or updated using the add method. This method accepts an array of parameter objects and optionally allows for reloading the page with the updated URL.

5. Utility Functions: The class includes a utility function toBoolOrNull for converting parameter values to boolean values or null based on predefined rules.

Overall, the Params class provides a convenient and efficient way to work with URL parameters in JavaScript applications, enabling developers to easily manipulate URLs and interact with query parameters.

Example 1: Initialization based on the current URL
```js
const params = new Params();
console.log(params.all()); // Returns all URL parameters as a JavaScript object
console.log(params.get('param1')); // Returns the value of parameter 'param1', converted to a boolean value or null
console.log(params.is('param2', true)); // Checks if the parameter 'param2' has the value 'true'
```

Example 2: Initialization based on a provided URL
```js
const url = 'https://example.com/path?param1=true&param2=false';
const params = new Params(url);
console.log(params.all()); // Returns all URL parameters as a JavaScript object
console.log(params.get('param1')); // Returns the value of parameter 'param1', converted to a boolean value or null
console.log(params.is('param2', false)); // Checks if the parameter 'param2' has the value 'false'
```

Example 3: Adding new parameters to the current URL
```js
const params = new Params();
params.add([{ name: 'newParam', value: 'newValue' }]);
// Updated URL and return the url
```

Example 4: Adding new parameters and reloading the page
```js
const params = new Params();
params.add([{ name: 'newParam', value: 'newValue' }], true);
// The page reloads with the updated URL
```

Example 5: Updating existing parameters and redirecting to an external URL
```js
const externalUrl = 'https://example.com/new-path';
const params = new Params(externalUrl);
params.add([{ name: 'param1', value: 'updatedValue' }], true);
// The page redirects to the updated external URL
```

These are just a few examples of how you can utilize the Params class. With this class, you can read, check, update, and add new URL parameters, simplifying URL manipulation in JavaScript.