import pdf from '../../Assets/JacobHandelmanCV.pdf';
import { useEffect, useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex justify-center flex-col mb-32">
      <button
        className="px-7 mx-auto flex gap-2 justify-center items-center bg-purpMain-50/30 p-3 font-semibold  hover:bg-purpMain-50/[.2] mb-6 mt-6"
        onClick={(e) => {
          e.preventDefault();
          window.open(pdf);
        }}
      >
        <span className="text-xl">
          <AiOutlineDownload />
        </span>
        Download CV
      </button>

      <div className="mb-8">
        <Document
          file={pdf}
          className="flex justify-center text-transparent leading-[0] select-none"
        >
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
      <div>
        <Document
          file={pdf}
          className="flex justify-center text-transparent leading-[0] select-none"
        >
          <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />{' '}
        </Document>
      </div>
      <button
        className="px-7 mx-auto flex gap-2 justify-center items-center bg-purpMain-50/30 p-3 font-semibold  hover:bg-purpMain-50/[.2] mb-6 mt-6"
        onClick={(e) => {
          e.preventDefault();
          window.open(pdf);
        }}
      >
        {' '}
        <span className="text-xl">
          <AiOutlineDownload />
        </span>
        Download CV
      </button>
    </div>
  );
};

export default Resume;
