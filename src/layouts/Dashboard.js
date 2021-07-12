import React from "react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { Segment } from "semantic-ui-react";
import { HomePage } from "../pages/HomePage";
import { JobAdvertisementDetails } from "../pages/Job/JobAdvertisementDetails";
import { JobAdvertisement } from "../pages/Job/JobAdvertisementList";
import { CandidateList } from "../pages/User/CandidateList";
import { EmployersList } from "../pages/User/EmployersList";
import { Footer } from "./Footer";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { AddJobAdvertisement } from "../pages/Job/AddJobAdvertisement";
import { EmployeeList } from "../pages/User/EmployeeList";

import { Resumes } from "../pages/Resume/Resumes";
import { ResumeDetails } from "../pages/Resume/ResumeDetails";
import { FavoriteAdvertisementList } from "../pages/Job/FavoriteAdvertisementList";
import { useDispatch } from "react-redux";
import { clearFilter } from "../store/actions/filterActions";
import { AddResume } from "../pages/Resume/AddResume";
import { RegisterUser } from "../pages/User/RegisterUser";
import { UserList } from "../pages/User/UserList";


export const Dashboard = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  !location.pathname.startsWith("/jobAdvertisements")&&dispatch(clearFilter())
  return (
    <div>
      <Navbar/>
      
     <Jumbotron location={location.pathname}/>
      
      <Route exact path="/jobAdvertisements" component={JobAdvertisement} />
      <Route exact path="/jobAdvertisements/:id" component={JobAdvertisementDetails} />
      <Route exact path="/employers" component={EmployersList} />
      <Route exact path="/candidates" component={CandidateList} />
      <Route exact path="/employees" component={EmployeeList} />
      <Route exact path="/addJobAdvertisement" component={AddJobAdvertisement} />
      <Route exact path="/resumes/:id" component={Resumes} />
      <Route exact path="/resume/:id" component={ResumeDetails} />
      <Route exact path="/favorites/:id" component={FavoriteAdvertisementList} />
      <Route exact path="/addResume/:id" component={AddResume} />
      <Route exact path="/user/new" component={RegisterUser} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/" component={HomePage} />

      
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <Segment>
        <Footer />
      </Segment>
    </div>
  );
};
