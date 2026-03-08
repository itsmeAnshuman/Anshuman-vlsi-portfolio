const fs = require('fs');
const pdf = require('pdf-parse');
(async () => {
  try {
    const data = await pdf(fs.readFileSync('./public/Aashi_Electronics.pdf'));
    console.log('---PDF_TEXT_START---');
    console.log(data.text);
    console.log('---PDF_TEXT_END---');
  } catch (e) {
    console.error('ERR', e.message);
    process.exit(1);
  }
})();