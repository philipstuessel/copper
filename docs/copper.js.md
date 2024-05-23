# copper.js
---
## toggleMode()

This function toggles between light and dark themes by updating the theme preference stored in local storage and applying the corresponding theme to the document.

```js
toggleMode(); // Toggles between light and dark themes
```

## setThemePreference(theme)
This function sets the theme preference and stores it in local storage.
```js
setThemePreference('light'); // Sets the theme preference to 'light'
```

## setIconBasedOnTheme()
This function can be used to dynamically set icons based on the current theme. You can add your logic to this function as needed.

```js
setIconBasedOnTheme(); // Sets icons based on the current theme
```

## p(value)
This function logs the provided value to the console.
```js
p("Hello, world!"); // Logs "Hello, world!" to the console
```

## display(value)
This function displays the provided value in a div at the bottom of the page.
```js
display("Message displayed at the bottom!"); // Displays a message at the bottom of the page
```

## clipboard(text)
This function copies the provided text to the clipboard.
```js
clipboard("Text to be copied to clipboard"); // Copies text to clipboard
```

## cu_import(scriptPath, attribute = "")
This function dynamically imports a script with an optional attribute, such as 'async'.
```js
cu_import("exampleScript.js", "async"); // Dynamically imports a script with async attribute
```

## docAppend(value)
This function searches for an element in the document with the specified selector and returns it.
```js
docAppend("value"); // Returns the element with the specified selector
```

## setTitle(new_title)
This function sets the document's title to the specified new title.
```js
setTitle("New Title"); // Sets the document's title to the new title
```

## setIcon(new_icon)
This function updates the document's favicon with the specified new icon.

```js
setIcon("new_icon.png"); // Updates the document's favicon with the new icon
```

## showInfo()
bootstrap greetings // width - height
```js
showInfo();
```
<img src="../images/showInfo.png">

---

These examples demonstrate the functionality of each function and how they can be used within your script to perform various tasks such as theme toggling, logging messages, displaying content, copying text to clipboard, and dynamically importing scripts.