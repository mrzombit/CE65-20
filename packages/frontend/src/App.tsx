import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import DBTest1 from "./Pages/.test/dbTest1";
import DBTest2 from "./Pages/.test/dbTest2";

import MainSidebar from "./Components/mainSidebar/mainSidebar";
import ProfilePage from "./Pages/profilePage/profilePage";
import AccountPage from "./Pages/accountPage/accountPage";
import LandingPage from "./Pages/landingPage/landingPage";
import LoginPage from "./Pages/loginPage/loginPage";
import RegisterPage from "./Pages/registerPage/registerPage";
import SubscriptionPage from "./Pages/subscriptionPage/subscriptionPage";
import WorkSpacePage from "./Pages/workSpacePage/workSpacePage";
import ComparePage from "./Pages/comparePage/comparePage";
import MiscellaneousPage from "./Pages/BizTools/miscellaneousPage/miscellaneousPage";
import OperationCostPage from "./Pages/BizTools/operationCostPage/operationCostPage";
import ProjectConfigPage from "./Pages/BizTools/projectConfigPage/projectConfigPage";
import RevenuePage from "./Pages/BizTools/revenuePage/revenuePage";
import TotalInvestmentPage from "./Pages/BizTools/totalInvestmentPage/totalInvestmentPage";
import StatementsPage from "./Pages/Checkbiz/statementsPage/statementsPage";
import FFCPage from "./Pages/Checkbiz/ffcPage/ffcPage";

function App() {
  return (
    <Router>
      <MainSidebar />
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<DBTest1/>} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Account" element={<AccountPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Subscription" element={<SubscriptionPage />} />
          <Route path="/WorkSpace" element={<WorkSpacePage />} />
          <Route path="/Compare" element={<ComparePage />} />
          <Route path="/Miscellaneous" element={<MiscellaneousPage />} />
          <Route path="/OperationCost" element={<OperationCostPage />} />
          <Route path="/ProjectConfig" element={<ProjectConfigPage />} />
          <Route path="/Revenue" element={<RevenuePage />} />
          <Route path="/TotalInvestment" element={<TotalInvestmentPage />} />
          <Route path="/Statements" element={<StatementsPage />} />   
          <Route path="/FFC" element={<FFCPage />} />   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
