//DOESN'T WORK CORRECTLY
// https://stackoverflow.com/questions/75104923/react-pdf-displaying-text-found-inside-the-pdf-instead-of-the-pdf-itself

// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// export default function SinglePage(props) {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }

//   function changePage(offset) {
//     setPageNumber((prevPageNumber) => prevPageNumber + offset);
//   }

//   // function previousPage() {
//   //   changePage(-1);
//   // }

//   // function nextPage() {
//   //   changePage(1);
//   // }

//   const { pdf } = props;

//   return (
//     <>
//       <Document
//         file={pdf}
//         options={{ workerSrc: "/pdf.worker.js" }}
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={1} />
//       </Document>
//     </>
//   );
// }
