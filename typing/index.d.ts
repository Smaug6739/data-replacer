/**
 * Replacer
 * github.com/SmaugDev/replacer
 */
import { IOptions, IReplace } from './typescript/interfaces';
/**
 
 */
declare class DataReplacer {
    caseInsensitive: boolean;
    required: boolean;
    multipleReplaces: boolean;
    constructor(options: IOptions);
    replace(text: string, replace: IReplace): string;
    checkTypes(text: string, replace: IReplace): void;
}
export { DataReplacer };
