import React from "react";
import Navbar from "../components/navbar";
import SinglePagePDFViewer from "../components/pdf/single-page";

import samplePDF from "../components/pdf/resume_boyer_2023.pdf";

const Resume = () => {
  return (
    <>
      <style>
        {`
      .pdf-viewer{
        display: flex;
        justify-content: center;
        background-color: #222733;
      `}
      </style>
      <>
        <Navbar />
        <div className="pdf-viewer">
          <SinglePagePDFViewer pdf={samplePDF} />
        </div>
      </>
    </>
  );
};

export default Resume;
