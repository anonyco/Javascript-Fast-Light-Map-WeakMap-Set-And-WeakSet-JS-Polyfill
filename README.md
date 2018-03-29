# Fast & Light Map, WeakMap, Set, & WeakSet Polyfill
This is a fast, lightweight (~1.94kb ungzipped, and only 703 bytes gziped) Javascript Map and Weakmap polyfill. If you don't want to download the script, then you can always just use the script hosted at dropbox by inserting the following into your `<head>`.

```HTML
<script src="https://dl.dropboxusercontent.com/s/mxu7cxl5ubh3t3t/mapPolyfillv2.min.js?dl=0" type="text/javascript"></script>
```

# When To & When Not To Use This Polyfill
This polyfill differs from the other polyfills in that it reasonably sacrafices standard-conformity for lightweightness and fastness. Basicly, this polyfill is 100% standards-compliant except for 2 big things:

 * The objects returned by the `values`, `keys`, and `entries` methods are not instances of MapIterator. However, no need to worry too much: solongas you do not check the constructor (`.constructor`) for theese methods or use `instanceof` on the return values of theese methods then your code will run fine.
 * When this library polyfills in unsupporting browsers, it attempts to makes Maps and WeakMaps the same object if the browser only supports Maps (but not WeakMaps), and likewise Sets and WeakSets the same object too. E.g. `Set === WeakSet` Will evaluate to true under theese circumstances.

# Browser Support
This polyfill should bring Map and WeakMap support to IE9 and above.

# Sorta Important Memory-Leak Bug
A potential problem with this polyfill, or many other Map polyfills, are 'memory leaks'. For example, if you set an object key in a map to a value, then unreference that object key, then the object will still be in memory because of the reference to it inside this polyfills internal look-up table. For example, in the native implementation of javascipt maps, this should not consume much memory, but in the polyfill it will:

```Javascript
    var myMap = new WeakMap(), longString = 'some random strang ', i=100e+6;
    
    while (i--)
        myMap.set({}, longString += i)
    
    console.log(longString.length * myMap.length)
```

The unavoidable, unfixable reason for this is because there currently is no way to assign weak references (or better yet, weak tables) to objects in javascript, which would allow the browser to know that its safe to ignore specific references to something.

However, Benive has devised an alternative polyfill solution that fixed this memory leak bug by using properties on the objects, and covering up the fact that they exist. **Don't** go rushing to his polyfill just yet. It comes with many (quite severe) penalities that will damage your javascripts performance to a much greater extent than this memory leak:

  * Even if the browser already supports WeakMaps (which most browsers now do), then Benive's solution will still overwrite the native `object.getOwnPropertyNames` method, resulting in making the rest of your code signifigantly slower even if the browser already supports WeakMaps.
  * Benive's solution has extensive usage of deeply nested function calls, resulting in a much slower performance in polyfilled browsers.
  * Benive's solution is, when compressed & gzipped, more than 2x the size of this polyfill.

If you really do need his memory fix, then you used to be able to find it at <a href="https://github.com/Benvie/WeakMap">you can find it here</a>. However, his account appears to have been deleted from the github servers.

# The <i>SingleWeakMapMinimal.src.js</i> file
This is some code I wrote for my own project to create an absolute bare minimalistic way to get a single weak map for referencing DOM elements. I thought someone else might find it useful/helpful, so I posted it up here. Enjoy.
