/**
 * Replacer
 * github.com/SmaugDev/replacer
 */

import { IOptions, IReplace } from './typescript/interfaces';

/**
 
 */
class DataReplacer {
	caseInsensitive: boolean;
	skip: number;
	maxReplaces: number;
	constructor(options: IOptions) {
		this.caseInsensitive = options.caseInsensitive;
		this.skip = options.skip;
		this.maxReplaces = options.maxReplaces;

	}
	replace(text: string, replace: IReplace) {
		const keys = Object.keys(replace);
		let skipOptions: number = this.skip;
		for (const key of keys) {
			if (this.checkIncludes(text, replace[key]))
				if (skipOptions) {
					skipOptions = skipOptions - 1;
					continue;
				}
			// const newText = text.replace()
		}
	}
	private checkIncludes(text: string, word: string) {
		if (this.caseInsensitive) {
			if (text.toLocaleLowerCase().includes(word)) return true;
			return false;
		} else {
			if (text.includes(word)) return true;
			return false;
		}
	}
}
