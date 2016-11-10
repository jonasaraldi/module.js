# module

## Configuration

Defining a constructor method name for the module

```javascript
Module.config({
	constructor: "initialize"
});
```

## Usage: Creating a module
### Method signarute

```javascript
Module(namespace, moduleScope, dependencies)
```

### Examples
Creating a simple module attached with the namescape ```App.MyModule``` and with 2 dependencies (```window``` and ```document``` object).

```javascript
Module("App.MyModule", 
	function(global, doc) {
		"use strict"

		return {
			init: init
		}

		function init() {
			console.log("init");
		}
	},
	[window, document]
);
```
