# Jsapi

The `Jsapi` class serves as an interface for communicating with an API. It provides methods for fetching data (`getData`), sending HTTP requests (`fetchData`), and appending optional parameters (`attach`). These methods utilize the Fetch API to send HTTP requests to the specified API URL and process the responses.

#### Constructor

The constructor of the `Jsapi` class creates a new instance of the class with a specified API URL and optional request headers. By default, the header `'Content-Type': 'application/json'` is used.

#### `getData` Method

The `getData` method retrieves data from the API by sending a GET request to the API URL. It expects the response to be in JSON format and returns the parsed data. It handles errors that occur during the fetch operation.

#### `fetchData` Method

The `fetchData` method sends an HTTP request to the API with specified parameters (URL, method, data). It supports various HTTP methods (GET, POST, PUT, PATCH, DELETE) and expects JSON responses. It can optionally send data in the request body. This method also handles errors that occur during the fetch operation.

#### `attach` Method

The `attach` method appends optional parameters to the URL and retrieves data from the API. It uses the `fetchData` method to send the request to the constructed URL. This method also handles errors that occur during the fetch operation.

#### Example Usage

```ts
const jsapi = new Jsapi('https://example.com/api/');

// Example: Fetch data from the API
jsapi.getData()
    .then(responseData => console.log(responseData))
    .catch(error => console.error('Error fetching data:', error));

// Example: Send a PUT request with data
const data = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
};
jsapi.fetchData('PUT', data)
    .then(responseWithParams => console.log(responseWithParams))

// Example: Attach optional parameters and fetch data
const optionalParams = {
    page: 'path'
};
jsapi.attach(optionalParams, 'GET')
    .then(responseWithParams => console.log(responseWithParams))
```