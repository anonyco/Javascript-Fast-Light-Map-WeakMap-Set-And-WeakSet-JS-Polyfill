//anonyco
if (!window.Map)
(function(){
    'use-strict';
    var mapproto = Object.create(null),
        keycur, appliedToEach, Iterator;
    
    mapproto.size = 0;
    mapproto.delete = function( key ){
        keycur = this.k.lastIndexOf(key); // k is for keys
        if (!~keycur) return false;
        this.k.splice(keycur, 1);
        this.v.splice(keycur, 1);
        --this.size;
        return true;
    }
    mapproto.get = function( key ){
        return this.v[this.k.lastIndexOf(key)];
    }
    mapproto.set = function( key, value ){
        keycur = this.k.lastIndexOf(key);
        if (!~keycur) this.k[keycur = this.size++] = key;
        this.v[keycur] = value;
    }
    mapproto.has = function( key ){
        return this.k.lastIndexOf(key) !== -1;
    }
    mapproto.clear = function( key ){
        this.k.splice(0, this.size);
        this.v.splice(0, this.size);
        this.size = 0;
    }
    mapproto.forEach = function( func, thisArg ){
        appliedToEach = thisArg ? func.bind(thisArg) : func, Iterator = this.size;
        while (Iterator--) appliedToEach(this.k[Iterator], Iterator, this);
    }
    mapproto.entries = function( key ){
        var nextIndex = 0, that = this, len = this.size;
        return {
           next: function() {
               return nextIndex !== len ? {value: [that.k[nextIndex++], that.v[nextIndex]], done: false} : {done: true};
           }
        };
    }
    mapproto.keys = function( key ){
        var nextIndex = 0, that = this, len = this.size;
        return {
           next: function() {
               return nextIndex !== len ? {value: that.k[nextIndex++], done: false} : {done: true};
           }
        };
    }
    mapproto.values = function( key ){
        var nextIndex = 0, that = this, len = this.size;
        return {
           next: function() {
               return nextIndex !== len ? {value: that.v[nextIndex++], done: false} : {done: true};
           }
        };
    }
    /*window.*/Map = function(iterable){
        if (iterable instanceof Array){
            // split up the data into two useable streams: one for keys (k), and one for values (v)
            this.size = keycur = iterable.length;
            var k = new Array(keycur),
                v = new Array(keycur);
            
            while (keycur--)
                k[keycur] = iterable[keycur][0],
                v[keycur] = iterable[keycur][1];
            
            this.k = k, this.v = v;
        } else this.k = [], this.v = [];
    }
    /*Window*/Map.prototype = mapproto;
})();
if (!window.WeakMap) // maps are able to be used to polyfill weakmaps
  Object.defineProperty(
    (/*window.*/WeakMap = window.Map).prototype,
    'length',
    { get: function() { return this.size } }
  );
