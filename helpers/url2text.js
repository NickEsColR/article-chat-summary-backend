const cheerio = require('cheerio');
const axios = require('axios');

const url2text = async(url) => {
    try{
        const {data} = await axios.get(url)
        const $ = cheerio.load(data);
        return $("p").text()
    }catch(e){
        console.error(e)
    }
}

module.exports = {url2text}