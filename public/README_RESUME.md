# Resume PDF Setup

## Adding Your Resume PDF

1. Place your resume PDF file in this directory (`public/`)
2. Name it exactly: `resume.pdf`
3. The file should be readable and not password-protected

## File Requirements

- Format: PDF (.pdf)
- Filename: `resume.pdf` (case-sensitive)
- Location: `public/resume.pdf`
- Recommended size: Under 5MB for best performance

## After Adding Your PDF

1. The PDF will automatically appear on `/resume` page
2. Users can view it in-browser with the PDF viewer
3. Users can download it using the "Download Resume" button

## Testing

1. Navigate to `http://localhost:3000/resume`
2. Verify the PDF loads correctly
3. Test the download button
4. Test navigation between pages (if multi-page)

## Fallback

If the PDF fails to load, users will see:
- An error message
- A direct download link as fallback

For browser compatibility, the viewer uses react-pdf which supports modern browsers.
