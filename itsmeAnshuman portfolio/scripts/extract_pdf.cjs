const fs = require('fs');
const pdfLib = require('pdf-parse');

(async () => {
  try {
    const buffer = fs.readFileSync('./public/Aashi_Electronics.pdf');
    const parse =
      typeof pdfLib === 'function'
        ? pdfLib
        : pdfLib && pdfLib.default
        ? pdfLib.default
        : pdfLib && pdfLib.parse
        ? pdfLib.parse
        : null;
    if (!parse) {
      console.error('ERR unable to locate parser in pdf-parse package');
      process.exit(1);
    }
    const data = await parse(buffer);
    console.log('---PDF_TEXT_START---');
    console.log(data.text);
    console.log('---PDF_TEXT_END---');
  } catch (e) {
    console.error('ERR', e.message);
    process.exit(1);
  }
})();