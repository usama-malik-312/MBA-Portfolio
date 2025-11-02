# Create Placeholder PDF

## Quick Setup

Since we can't include binary PDF files in the repository, you need to add a placeholder PDF.

## Option 1: Create a Simple PDF (Recommended for Testing)

1. **Using any PDF creator:**
   - Open a document editor (Word, Google Docs, etc.)
   - Create a simple document with "Resume" as title
   - Add sample content like:
     ```
     ALEX FASIH
     Senior Financial Analyst & FP&A Professional
     
     Email: contact@alexfasih.com
     Phone: +1 (555) 123-4567
     
     [Your resume content here]
     ```
   - Export/Save as PDF
   - Name it `resume.pdf`
   - Place it in `public/` folder

2. **Using online PDF generators:**
   - Visit https://www.ilovepdf.com/create-pdf
   - Create a simple PDF with sample content
   - Download and place in `public/resume.pdf`

## Option 2: Use Your Actual Resume

Simply copy your resume PDF to:
```
public/resume.pdf
```

## Verification

After adding the PDF:
1. Run `npm run dev`
2. Navigate to `http://localhost:3000/resume`
3. You should see the PDF viewer with your document
4. Test the download button

## File Requirements

- ✅ Filename: `resume.pdf` (exact match, case-sensitive)
- ✅ Location: `public/resume.pdf`
- ✅ Format: PDF (.pdf)
- ✅ Size: Recommended under 5MB for best performance
- ✅ Not password-protected
