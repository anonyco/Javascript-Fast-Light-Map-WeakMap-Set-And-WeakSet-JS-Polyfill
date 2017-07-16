//anonyco
let weakMapMinimal = (window.WeakMap && new WeakMap()) || (window.Map && new Map());
if (!weakMapMinimal){
    let weakMapMinimalVALUE = [], weakMapMinimalKEY = [], keycur;
    weakMapMinimal = {
        delete: key => {
            keycur = weakMapMinimalKEY.lastIndexOf(key); // k is for keys
            if (!~keycur) return false;
            weakMapMinimalKEY.splice(keycur, 1);
            weakMapMinimalVALUE.splice(keycur, 1);
            return true;
        },
        get: key => {
            return weakMapMinimalVALUE[weakMapMinimalKEY.lastIndexOf(key)];
        }
        set: (key, value) => {
            keycur = weakMapMinimalKEY.lastIndexOf(key);
            if (!~keycur) weakMapMinimalKEY[keycur = weakMapMinimalKEY.length] = key;
            weakMapMinimalVALUE[keycur] = value;
        }
    };
}
