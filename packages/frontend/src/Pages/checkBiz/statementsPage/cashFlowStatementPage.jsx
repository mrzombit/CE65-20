import React, { useState } from "react";
import Html from "react-pdf-html";
import ExportPdfComponent from "../../../components/statement/ExportPdfComponent";
import { Document, Page } from "react-pdf";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../../../components/statement/MyDocument";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import CashFlowDocument from "../../../components/statement/cashFlowDocument";

import StatementHearder from "../../../components/statement/statementHearder";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";

const cashFlowStatement = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      // pdf.save("cashflow_statement.pdf");
      ///////to png
      var newTab = window.open("about:blank", "image from canvas");
      newTab.document.write("<img src='" + imgData + "' alt='from canvas'/>");
    });
  };

  return (
    <div className="d-flex">
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <StatementHearder title="Cash Flow Statement" />
        <div>
          <div className="">
            <button onClick={printDocument}>Print</button>
          </div>
          <hr></hr>
          {/* <div id="divToPrint" style={{ width: "600px" }}> */}
          <div id="divToPrint" className="d-flex " style={{ width: "600px", }}>
            {/* <div>Note: Here the dimensions of div are same as A4</div> */}
            {/* <StatementHearder title="Cash Flow Statement" /> */}
            <CashFlowDocument />
          </div>
        </div>
      </div>
    </div>
  );
};

export default cashFlowStatement;
