import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import MainSidebar from "./Components/mainSidebar";
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
        {/* <p>asdasd</p> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/SubscriptionPage" element={<SubscriptionPage />} />
          <Route path="/WorkSpacePage" element={<WorkSpacePage />} />
          <Route path="/ComparePage" element={<ComparePage />} />
          <Route path="/MiscellaneousPage" element={<MiscellaneousPage />} />
          <Route path="/OperationCostPage" element={<OperationCostPage />} />
          <Route path="/ProjectConfigPage" element={<ProjectConfigPage />} />
          <Route path="/RevenuePage" element={<RevenuePage />} />
          <Route path="/TotalInvestmentPage" element={<TotalInvestmentPage />} />
          <Route path="/StatementsPage" element={<StatementsPage />} />   
          <Route path="/FFCPage" element={<FFCPage />} />   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
