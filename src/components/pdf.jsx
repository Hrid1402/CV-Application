import React from 'react'
import html2pdf from 'html2pdf.js';
import '../styles/App.css'
const generatePDF = () => {
    // Get the CV container element
    const element = document.querySelector('.CV');

  
    // Configure the PDF options
    const opt = {
        margin:       -7,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 4 , dpi: 300, letterRendering: true, useCORS: true},
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    // Generate and download the PDF
    html2pdf().set(opt).from(element).save();
  };
export function ButtonPDF(){
    return(
        <button onClick={generatePDF}>Download PDF</button>
    )
}