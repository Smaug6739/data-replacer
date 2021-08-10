/**
 * Replacer
 * github.com/SmaugDev/data-replacer
 */

import { IOptions, IReplace } from './typescript/interfaces';

/**
 
 */
class DataReplacer {
	caseInsensitive: boolean;
	required: boolean;
	multipleReplaces: boolean;
	constructor(options: IOptions) {
		this.caseInsensitive = options.caseInsensitive || true;
		this.required = options.required || false;
		this.multipleReplaces = options.multipleReplaces || true;
	}
	replace(text: string, replace: IReplace) {
		this.checkTypes(text, replace);
		const keys: string[] = Object.keys(replace);
		const replaceFlags = [];
		if (this.multipleReplaces) replaceFlags.push('g');
		if (this.caseInsensitive) replaceFlags.push('i');

		for (const key of keys) {
			if (this.required && !text.includes(key)) throw new Error(`Missing word ${key} in text.`);
			const regex = new RegExp(key, replaceFlags.join(''));
			text = text.replace(regex, replace[key]);
		}
		return text;
	}
	checkTypes(text: string, replace: IReplace) {
		if (!text || typeof text !== 'string') throw new TypeError(`text must be non-empty string.`);
		if (!replace || typeof replace !== 'object') throw new TypeError(`replace must be an object.`);
	}
}

export { DataReplacer }