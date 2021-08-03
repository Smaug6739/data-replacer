const { DataReplacer } = require('../dist/index');

const Replacer = new DataReplacer({
	caseInsensitive: true,
	multipleReplaces: true,
	required: false
})

const str = `
	Hi {{username}} ! 
	Welcome to the website {{domain}}
	You can access to your account with the login page :
	{{domain}}/login
	`
const replace = {
	'{{username}}': 'Thomas',
	'{{website}}': 'https://exemple-website.com',
	'{{domain}}': 'https://exemple-website.com',
}

const replacedStr = Replacer.replace(str, replace);
console.log(replacedStr);