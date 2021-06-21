import React from "react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { Segment } from "semantic-ui-react";
import { HomePage } from "../pages/HomePage";
import { JobAdvertisementDetails } from "../pages/Job/JobAdvertisementDetails";
import { JobAdvertisement } from "../pages/Job/JobAdvertisementList";
import { JobPositionGuide } from "../pages/Job/JobPositionGuide";
import { CandidateList } from "../pages/User/CandidateList";
import { EmployersList } from "../pages/User/EmployersList";
import { Footer } from "./Footer";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";


export const Dashboard = () => {
  const location = useLocation()
  return (
    <div>
      <Navbar location={location.pathname}/>
     <Jumbotron location={location.pathname}/>
      
      <Route exact path="/jobAdvertisements" component={JobAdvertisement} />
      <Route exact path="/jobAdvertisements/:id" component={JobAdvertisementDetails} />
      <Route exact path="/employers" component={EmployersList} />
      <Route exact path="/candidates" component={CandidateList} />
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
