// localstorage.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.LS = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    class LS {
        constructor(storageKey) {
            this.storageKey = storageKey;
        }

        save(key, value) {
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            localStorage.setItem(this.storageKey + ':' + key, value);
        }

        load(key) {
            let value = localStorage.getItem(this.storageKey + ':' + key);
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        }

        remove(key) {
            localStorage.removeItem(this.storageKey + ':' + key);
        }

        clear() {
            Object.keys(localStorage)
                .forEach(k => {
                    if (k.startsWith(this.storageKey + ':')) {
                        localStorage.removeItem(k);
                    }
                });
        }
    }

    return LS;
}));
