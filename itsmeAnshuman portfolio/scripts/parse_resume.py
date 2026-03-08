import re
from pathlib import Path

text_path = Path('./public/Aashi_Electronics.pdf')
# We'll reuse the previous extraction by reading the already-extracted text via the extract script output.
# For simplicity, extract raw text again using PyPDF2
from PyPDF2 import PdfReader

reader = PdfReader(str(text_path))
text_parts = []
for page in reader.pages:
    text_parts.append(page.extract_text() or '')
raw = '\n'.join(text_parts)

lines = [l.strip() for l in raw.splitlines() if l.strip()]
res = {}
# Name is first non-empty line
res['name'] = lines[0] if lines else ''
# Email
m = re.search(r'[\w.+-]+@[\w-]+\.[\w.-]+', raw)
res['email'] = m.group(0) if m else ''
# Phone (simple heuristic)
m = re.search(r'\+?\d[\d\s\-]{7,}\d', raw)
res['phone'] = m.group(0) if m else ''
# GitHub
m = re.search(r'github[:\s]*([A-Za-z0-9_\-]+)', raw, re.I)
res['github'] = m.group(1) if m else ''
# LinkedIn
m = re.search(r'linkedin[:\s]*([A-Za-z0-9_\- ]+)', raw, re.I)
res['linkedin'] = m.group(1).strip() if m else ''

# Sections
raw_upper = raw.upper()
projects = ''
skills = ''
edu = ''
if 'KEY PROJECTS' in raw_upper:
    a = raw_upper.index('KEY PROJECTS')
    b = raw_upper.find('TECHNICAL SKILLS', a)
    projects = raw[a:b].strip() if b!=-1 else raw[a:].strip()
if 'TECHNICAL SKILLS' in raw_upper:
    a = raw_upper.index('TECHNICAL SKILLS')
    b = raw_upper.find('RELEVANT COURSES', a)
    skills = raw[a:b].strip() if b!=-1 else raw[a:].strip()
if 'EDUCATION' in raw_upper:
    a = raw_upper.index('EDUCATION')
    b = raw_upper.find('KEY PROJECTS', a)
    edu = raw[a:b].strip() if b!=-1 else raw[a:].strip()

res['education'] = edu
res['projects_block'] = projects
res['skills_block'] = skills

print('---PARSED_RESUME_START---')
for k,v in res.items():
    print(f"{k}: {v}\n")
print('---PARSED_RESUME_END---')
