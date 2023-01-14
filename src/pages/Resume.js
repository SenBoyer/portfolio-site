import React from "react";
import Navbar from "../components/navbar";

import samplePDF from "../components/pdf/resume_boyer_2023.pdf";

const Resume = () => {
  return (
    <>
      <style>
        {`
      .pdf-wrapper{
        display:flex;
        width: 90%;
        max-width: 1110px;
        margin-left: auto;
        margin-right: auto;
        height: 100vh;
        justify-content: center;
        }

        #pdf-viewer i-frame {
          height: 100vh;
          width: 100vw;
        }
      `}
      </style>
      <>
        <Navbar />
        <div className="pdf-wrapper">
          <div className="pdf-viewer">
            <iframe
              src={samplePDF}
              title="resume"
              className="i-frame"
              style={{ height: "100vh", width: "100vw" }}
            />
          </div>
        </div>
      </>
    </>
  );
};

export default Resume;
