# Fast & Light Map & WeakMap Polyfill
This is a fast, light Javascript Map and Weakmap polyfill. If you don't want to download the script, then you can always just use the following DropBox link:

```HTML
<script src="" type="text/javascript"></script>
```

# When To & When Not To Use This Polyfill
This polyfill differs from the other polyfills in that it reasonably sacrafices standard-conformity for lightweightness and fastness. For example, this polyfill uses regular maps with a `length` getter added as a proxy to the `size` property as a polyfill to weakmaps. This may break some scripts which heavily probe the inner workings of Weakmaps. Also, this polyfill does not do Symbols, which should be an okay thing for the majority of production code.

# Compatibility
Because this polyfill was aimed at speed & simplicity instead of explicit standard conformity, this will work in IE9.
