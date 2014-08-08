Node Nab
========

It has gotten to the point where I am fed up of having to manually find every element I need in a set of html (I'm looking at you templates), then assigning it to a variable in a view object. This gets even worse when your web designer changes a class name you were hooked to!

Node Nab aims to eliminate this issue for you. By simply including node nab you will be able to automatically assign elements to a named variable in an object via calling a jquery plugin.

Usage
-----
Non-AMD: `<script src="path/to/node-nab.js"></script>`

AMD: `define([path/to/node-nab', function() {});`

You would use node nab like you would any other jquery plugin.
```
$('.container').nodeNab({
  // Options / Configuration
});
```

**HTML**
```
<div id="example" data-nab="container">
	<span data-nab="minime"></span>
</div>
```

**JS**
```
var myObj = {};

$('#example').nodeNab({
  dest: myObj
});
```

**Result**
```
myObj => {
  $container: jquery element
  $minime: jquery element
}
```

Options
-------
| Name | Default | Description |
| ---- | ------- | ----------- |
| `dest`| `undefined`  | This is the object you wish to have the variables bound on to. Accepts an object or an object like type (function - not invoked) |
| `prefix` | `'$'` | The prefix to add to the variable name given in the data key. Accepts a string or `false` for no prefix |
| `key` | `'nab'` | The key to use when looking in the data object. Accepts string |
| `jquery` | `true` | Whether the elements found should be set as HTMLElements or as a jquery object. Accepts bool |
| `multiple` | `true` | Whether the previous property should be overwritten with a later found element, or compiled into an array. Accepts bool |

Dependencies
------------
The only 100% requirement is jquery. But require can be also be used.

As for the jquery minimum version. The tested version is `2.1.1` - However it will work with the following methods supported:
- `add` => v1
- `$.extend` => v1
- `each` => v1
- `filter` => v1
- `data` => v1.2.3
- `jquery` => v1

Overall lowest support of v1.2.3
