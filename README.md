# Fast & Light Map & WeakMap Polyfill
This is a fast, light Javascript Map and Weakmap polyfill. If you don't want to download the script, then you can always just use the following DropBox link:

```HTML
<script src="" type="text/javascript"></scirpt>
```

# When To & When Not To Use This Polyfill
This polyfill differs from the other polyfills in that it sacrafices standard-conformity that most production sites don't even use for lightweightness and fastness. For example, don't use this polyfill if you are relying on WeakMaps to only accept objects (this polyfill skips the check to greatly boost speed). Or, if your code heavily relies on probing the getters/setters of Weakmaps or Maps, then don't use this polyfill. Other than that, if your only purpose for using Maps are to use non-string types as keys, then this is the polyfill for you.

# Compatibility
Because this polyfill was aimed at speed & simplicity instead of explicit standard conformity, this polyfill would actually probably work in IE6. However no need to worry about that: this polyfill doesn't at all go out of it's way for absurd browser compatibility (like IE6), rather it just happens to be compatible with IE6.
