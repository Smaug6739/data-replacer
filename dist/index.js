"use strict";
/**
 * Replacer
 * github.com/SmaugDev/replacer
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReplacer = void 0;
/**
 
 */
class DataReplacer {
    constructor(options) {
        this.caseInsensitive = options.caseInsensitive || true;
        this.required = options.required || false;
        this.multipleReplaces = options.multipleReplaces || false;
    }
    replace(text, replace) {
        this.checkTypes(text, replace);
        const keys = Object.keys(replace);
        const replaceFlags = [];
        if (this.multipleReplaces)
            replaceFlags.push('g');
        if (this.caseInsensitive)
            replaceFlags.push('i');
        for (const key of keys) {
            if (this.required && !text.includes(key))
                throw new Error(`Missing word ${key} in text.`);
            const regex = new RegExp(key, replaceFlags.join(''));
            text = text.replace(regex, replace[key]);
        }
        return text;
    }
    checkTypes(text, replace) {
        if (!text || typeof text !== 'string')
            throw new TypeError(`text must be non-empty string.`);
        if (!replace || typeof replace !== 'object')
            throw new TypeError(`replace must be an object.`);
    }
}
exports.DataReplacer = DataReplacer;
