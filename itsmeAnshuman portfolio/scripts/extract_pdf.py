from PyPDF2 import PdfReader
from pathlib import Path
import sys

pdf_path = Path('./public/Aashi_Electronics.pdf')
if not pdf_path.exists():
    print('ERR file not found:', pdf_path)
    sys.exit(1)

reader = PdfReader(str(pdf_path))
text_parts = []
for page in reader.pages:
    try:
        text_parts.append(page.extract_text() or '')
    except Exception as e:
        text_parts.append('')

text = '\n'.join(text_parts).strip()
print('---PDF_TEXT_START---')
print(text)
print('---PDF_TEXT_END---')
