import React, { useState } from "react";
import BizSidebar from "../../../components/bizTools/bizSidebar/bizSidebar";
import BiztoolBody from "../../../components/investmentProject/biztoolBody/biztoolBody";
import BiztoolHeader from "../../../components/investmentProject/biztoolHeader/biztoolHeader";
import '../biztools.css'
import BIZTOOL_PAGE_CONFIG from "../pageConfig";
import BIZTOOL_PAGE_MOCKDATA from "../pageMockData";

function RevenuePage() {

<<<<<<< Updated upstream
  const [tableData, setTableData] = useState(BIZTOOL_PAGE_MOCKDATA.revenue.data)
=======
  const [newProjectPopupState, setNewProjectPopupState] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.users.auth);
  const user = useSelector((state) => state.users.user);
  const projects = useSelector((state) => state.projects.projects);
  const selectedProject = useSelector(
    (state) => state.projects.selectedProject
  );
  const [isLoaded, setIsLoaded] = useState({ user: false, projects: false });
  const isAlert = useRef(false);

  useEffect(() => {
    if (auth.username) {
      if (auth.token != "") {
        if (!isLoaded.user) {
          dispatch(
            fetchUserByUsername({ username: auth.username, token: auth.token })
          );
          setIsLoaded({ user: true, projects: false });
        }
      }
      
      // if(isLoaded) console.log(JSON.stringify(user));
      if (isLoaded.user) {
        if (isLoaded.projects) {
          // dispatch(fetchProjectsByUserId(user._id))
          dispatch(fetchProjectById(selectedProject));

          setIsLoaded({ user: true, project: true });
        }
        // else console.log(JSON.stringify(projects))
        console.log(JSON.stringify(selectedProject.revenue.service_tables));
        // console.log(JSON.stringify(selectedProject.expense.investment_tables));
      }
    } else navigate("/login");
  }, [auth.token, user, newProjectPopupState]);


  // const [tableData, setTableData] = useState(BIZTOOL_PAGE_MOCKDATA.revenue)
  // const [tableData, setTableData] = useState(selectedProject.revenue)
>>>>>>> Stashed changes
  const [config, setConfig] = useState(BIZTOOL_PAGE_CONFIG.revenue)

  return (
    <div className="d-flex ">
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <BiztoolHeader
          type={config.type}
          title={config.title}
          handleFunction={config.addTableHandleFunction}
        />
        <BiztoolBody
          type={config.type}
          tableStyle={config.tableStyle}
          tableData={selectedProject.revenue}
          onChangeHandle={config.onChangeHandle}
          handleFunction={config.addTableHandleFunction}
        />
      </div>
    </div>
  );
}

export default RevenuePage;
