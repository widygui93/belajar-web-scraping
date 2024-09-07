const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeSite(){
	const url = 'https://globaloptima.co.id/about/';
	const { data } = await axios.get(url);

	const $ = cheerio.load(data);

	const results = [];

	for (var i = 0; i < $('div[data-id="3c7711b1"] section').length; i++) {
		let namaPT = $('div[data-id="3c7711b1"] section').eq(i).find('h5.elementor-heading-title').text();

		let industriPT = [];
		$(`div[data-id="3c7711b1"] section:eq(${i}) h6.elementor-heading-title`).each((i,el) => {
			industriPT.push($(el).text());
		});
		results.push({namaPT, industriPT});	
	}

	for (var i = 0; i < $('div[data-id="a38e660"] section').length; i++) {
		let namaPT = $('div[data-id="a38e660"] section').eq(i).find('h5.elementor-heading-title').text();

		let industriPT = [];
		$(`div[data-id="a38e660"] section:eq(${i}) h6.elementor-heading-title`).each((i,el) => {
			industriPT.push($(el).text());
		});
		results.push({namaPT, industriPT});	
	}
	
	return results;
}

scrapeSite()
	.then(result => {
		console.log(result);
	})
	.catch(err => console.error(err));