export interface IOptions {
	caseInsensitive: boolean;
	required: boolean;
	multipleReplaces: boolean;
	skip: number;
	maxReplaces: number;

}

export interface IReplace {
	[index: string]: string
}