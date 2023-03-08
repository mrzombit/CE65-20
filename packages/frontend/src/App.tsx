import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import DBTest1 from "./pages/.test/dbTest1";
import DBTest2 from "./pages/.test/dbTest2";

import MainSidebar from "./components/common/mainSidebar/mainSidebar";
import ProfilePage from "./pages/profilePage/profilePage";
import AccountPage from "./pages/accountPage/accountPage";
import LandingPage from "./pages/landingPage/landingPage";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import SubscriptionPage from "./pages/subscriptionPage/subscriptionPage";
import WorkSpacePage from "./pages/workSpacePage/workSpacePage";
import ComparePage from "./pages/comparePage/comparePage";
import MiscellaneousPage from "./pages/bizTools/miscellaneousPage/miscellaneousPage";
import OperationCostPage from "./pages/bizTools/operationCostPage/operationCostPage";
import TotalInvestmentPage from "./pages/bizTools/totalInvestmentPage/totalInvestmentPage";
import RevenuePage from "./pages/bizTools/revenuePage/revenuePage";
import FFCPage from "./pages/checkBiz/ffcPage/ffcPage";
import StatementsPage from "./pages/checkBiz/statementsPage/statementsPage";
import ProjectConfigPage from "./pages/bizTools/projectConfigPage/projectConfigPage";
import { useDispatch, useSelector } from "react-redux";
import store from "./app/store";
import PleaseLogin from "./pages/landingPage/pleaseLogin";
import { fetchAssetAccounts } from "./features/assetAccountsSlice";
import { fetchBusinessGoals } from "./features/businessGoalsSlice";
import { fetchCurrencies } from "./features/currenciesSlice";
import { fetchIndustries } from "./features/industriesSlice";
import { fetchPeriods } from "./features/periodsSlice";
import { fetchSubscriptionPlans } from "./features/substriptionPlansSlice";

function App() {
  type RootState = ReturnType<typeof store.getState>;
  const dispatch = useDispatch<typeof store.dispatch>()
  const isLoggedIn = useSelector<RootState, boolean>((state) => state.users.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchAssetAccounts())
    dispatch(fetchBusinessGoals())
    dispatch(fetchCurrencies())
    dispatch(fetchIndustries())
    dispatch(fetchPeriods())
    dispatch(fetchSubscriptionPlans())
  }, [])
  
  return (
    <Router>
      <div className="root-style">
        <MainSidebar />
        <div>
          {isLoggedIn ?
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Profile" element={<ProfilePage />} />
              <Route path="/Account" element={<AccountPage />} />
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
              <Route path="*" element={<LandingPage />} />
              {/* <Route path="/NewInvestmentProject" element={<NewInvestmentProject />} /> */}
            </Routes>
            : <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Register" element={<RegisterPage />} />   
              <Route path="/WorkSpace" element={<WorkSpacePage />} />
              <Route path="*" element={<PleaseLogin />} />
            </Routes>
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
