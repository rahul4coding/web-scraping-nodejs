const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/Lists_of_hospitals';

  function rkb(url) {
    rp(url)
        .then(function (html) {
            //success!
            const wikiUrls = [];
            for (let i = 0; i < 6; i++) {
                wikiUrls.push($('li > a', html)[i].attribs.href);
            }
            // return Promise.all(
            //     wikiUrls.map(function (url) {
            //         return potusParse('https://en.wikipedia.org' + url);
            //     })
            // );
            console.log(wikiUrls);
        })
        .then(function (presidents) {
            //  console.log(presidents);
        })
        .catch(function (err) {
            //handle error
            console.log(err);
        })


}

console.log(rkb(url));


module.exports = rkb;