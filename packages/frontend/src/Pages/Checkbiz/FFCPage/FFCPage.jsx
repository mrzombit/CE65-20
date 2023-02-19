/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import BizSidebar from "../../../Components/bizSidebar/bizSidebar";
import BizHeader from "../../../Components/bizHeader/bizHeader";
import MultiStepProgressBar from "../../../Components/multiStepProgressBar/multiStepProgressBar";
import "./ffcPage.css";
import FFCOne from "../../../Components/ffcOne/ffcOne";
import FFCTwo from "../../../Components/ffcTwo/ffctwo";
import FFCTree from "../../../Components/ffcThree/ffcTree";
import FFCFour from "../../../Components/ffcFour/ffcFour";
import FFCFive from "../../../Components/ffcFive/ffcFive";
import FFCSix from "../../../Components/ffcSix/ffcSix";

function FFCPage() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };
  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      case "5":
        setPage("pagefive");
        break;
      case "6":
        setPage("pagesix");
        break;
      default:
        setPage("1");
    }
  };

  return (
    <div>
      <BizSidebar />
      <div>
        <BizHeader
          title="Financial Feasibility Canvas"
          infoPath="/"
          btnName=""
        />
      </div>
      <div className="ffc">
        <p className="ffc-head-text my-5">
          Answer the following Questions to Assess Your Financial Feasibility
          Canvas
        </p>
        <div className="">
          <MultiStepProgressBar
            page={page}
            onPageNumberClick={nextPageNumber}
          />
          <div className="ffc-body ">
            {
              {
                pageone: <FFCOne onButtonClick={nextPage} />,
                pagetwo: <FFCTwo onButtonClick={nextPage} />,
                pagethree: <FFCTree onButtonClick={nextPage} />,
                pagefour: <FFCFour onButtonClick={nextPage} />,
                pagefive: <FFCFive onButtonClick={nextPage} />,
                pagesix: <FFCSix />,
              }[page]
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default FFCPage;

