import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import DBTest1 from "./Pages/.test/dbTest1";
import DBTest2 from "./Pages/.test/dbTest2";

import MainSidebar from "./Components/common/mainSidebar/mainSidebar";
import ProfilePage from "./Pages/profilePage/profilePage";
import AccountPage from "./Pages/accountPage/accountPage";
import LandingPage from "./Pages/landingPage/landingPage";
import LoginPage from "./Pages/loginPage/loginPage";
import RegisterPage from "./Pages/registerPage/registerPage";
import SubscriptionPage from "./Pages/subscriptionPage/subscriptionPage";
import WorkSpacePage from "./Pages/workSpacePage/workSpacePage";
import ComparePage from "./Pages/comparePage/comparePage";
import MiscellaneousPage from "./Pages/bizTools/miscellaneousPage/miscellaneousPage";
import OperationCostPage from "./Pages/bizTools/operationCostPage/operationCostPage";
import TotalInvestmentPage from "./Pages/bizTools/totalInvestmentPage/totalInvestmentPage";
import RevenuePage from "./Pages/bizTools/revenuePage/revenuePage";
import FFCPage from "./Pages/checkBiz/ffcPage/ffcPage";
import StatementsPage from "./Pages/checkBiz/statementsPage/statementsPage";
import ProjectConfigPage from "./Pages/bizTools/projectConfigPage/projectConfigPage";


function App() {
  return (
    <Router>
      <div className="root-style">
        <MainSidebar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/" element={<DBTest1/>} /> */}
            <Route path="/test1" element={<DBTest1 />} />
            {/* <Route path="/test2" element={<DBTest2/>} /> */}
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/Account" element={<AccountPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Subscription" element={<SubscriptionPage />} />
            <Route path="/WorkSpace" element={<WorkSpacePage />} />
            <Route path="/Compare" element={<ComparePage />} />
            <Route path="/ProjectConfig" element={<ProjectConfigPage />} />
            <Route path="/TotalInvestment" element={<TotalInvestmentPage />} />
            <Route path="/OperationCost" element={<OperationCostPage />} />
            <Route path="/Revenue" element={<RevenuePage />} />
            <Route path="/Miscellaneous" element={<MiscellaneousPage />} />
            <Route path="/FFC" element={<FFCPage />} />
            <Route path="/Statements" element={<StatementsPage />} />
            <Route path="/Statements" element={<StatementsPage />} />
            {/* <Route path="/NewInvestmentProject" element={<NewInvestmentProject />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
