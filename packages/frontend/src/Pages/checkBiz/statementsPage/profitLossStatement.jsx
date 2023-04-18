import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import BizSidebar from '../../../components/bizTools/bizSidebar/bizSidebar'
import StatementHearder from '../../../components/statement/statementHearder';
import "./statementsPage.css";
import IncomeDocument from '../../../components/statement/documents/incomeDocument';

// import Html from "react-pdf-html";
// import ExportPdfComponent from "../../../components/statement/ExportPdfComponent";
// import { Document, Page } from "react-pdf";
// import { PDFViewer } from "@react-pdf/renderer";

const profitLossStatement = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF();
      var pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.output('dataurlnewwindow');
      pdf.save("cashflow_statement.pdf");

    });
  };


  return (
    <div className="d-flex">
      <BizSidebar />
      <div className="">
        <StatementHearder
          title="Income Statement"
          sensitivityPath="/Sensitivity/income"
          listPath="/ProfitLossStatements"
          chartPath="/Chart/income"
        />
        <div className="">
          <button onClick={printDocument}>Print</button>
        </div>
        <div className="doc-center scrollable">
          <div id="divToPrint" className=" page">
            <IncomeDocument />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profitLossStatement;

