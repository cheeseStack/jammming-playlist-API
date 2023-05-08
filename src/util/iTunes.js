//  iTunes API data from RapidApi :     https://rapidapi.com/volodimir.kudriachenko/api/iTunes/

//  code copied from above url
const url = 'https://itunesvolodimir-kudriachenkov1.p.rapidapi.com/searchMovies';

//  get the search 'term' required in the 'body' below:
const termValue = 'value from a search field'

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'bfeee83426msh83f706061cb8ed7p112c8fjsna5822e1ab260',
		'X-RapidAPI-Host': 'iTunesvolodimir-kudriachenkoV1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		country: 'gb',
		term: termValue     // const termValue = 'value from a search field'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}