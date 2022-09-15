/** kuncitts.com scrapper by ibnusyawall */

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Kuis
 * @param {String} question
 */

const Kuis = question => {
    var url = encodeURI(`https://kuncitts.com/form-jawaban-tts.php?kw=${question}&pattern=&widthscreen=500`);
    var options = {
        headers: {
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'googlebot'
        }
    }

    return new Promise((resolve, reject) => {
        axios(url, options)
            .then(({ data: html }) => {
                var $ = cheerio.load(html);
                var answers = [];
                $('table > tbody > tr.odd > td[colspan=2]').each(function() {
                    answers.push( $(this).find('a').text() );
                })
                resolve({
                    pertanyaan: question,
                    jawaban: answers[0],
                    lainnya: answers
                });
            })
            .catch(e => {
                reject({
                    status: 'error',
                    stack: String(e),
                    e: 'jawaban tidak ditemukan'
                });
            })
    })
}

module.exports = Kuis;
