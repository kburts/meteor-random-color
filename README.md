random-color
======================

Random Color (v0.2.0), lib for generating attractive random colors, from David Merfield, https://github.com/davidmerfield/randomColor, packaged for Meteor.js.

For generating attractive random colors. See the results on [the original demo](http://llllll.li/randomColor/) of David Merfield.

[![Hello](http://llllll.li/randomColor/repobg.png)](http://llllll.li/randomColor)

To install
----------

```sh
$ meteor add kburts:random-color
```

Examples
------

```
// Returns a hex code for an attractive color
randomColor();

// Returns an array of ten green colors
randomColor({
   count: 10,
   hue: 'green'
});

// Returns a hex code for a light blue
randomColor({
   luminosity: 'light',
   hue: 'blue'
});

// Returns a hex code for a 'truly random' color
randomColor({
   luminosity: 'random',
   hue: 'random'
});

// Returns a bright color in RGB
randomColor({
   luminosity: 'bright',
   format: 'rgb' // e.g. 'rgb(225,200,20)'
});
```

UI Template Helpers
------

Removed, check out https://github.com/AndrasPH/meteor-random-color if needed.