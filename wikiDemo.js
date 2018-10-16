const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/Lists_of_hospitals_in_Africa';

rp(url)
  .then(function(html){
    //success!
    console.log($('ul> li > a', html).length);
    // console.log($('big > a', html));
  })
  .catch(function(err){
    //handle error
  });
