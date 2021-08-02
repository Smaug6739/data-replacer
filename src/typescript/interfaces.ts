export interface IOptions {
	caseInsensitive: boolean;
	skip: number;
	maxReplaces: number;

}

export interface IReplace {
	[index: string]: string
}