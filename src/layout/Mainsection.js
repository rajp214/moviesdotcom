import React from 'react'
import './Mainsection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import HomeSection from '../component/HomeSection';
import MovieSection from '../component/MovieSection';
import TvShowsSection from '../component/TvShowsSection';
import DetailsPage from '../component/DetailsPage';
import SignUp from '../component/SignUp';

function Mainsection() {
    return (
      <div className="mainSectionBg">
        <div className="mainSectionClass">
          <Switch>   
              <Route exact path="/" component={HomeSection}/>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/movies" component={MovieSection}/>
              <Route exact path="/tvshows" component={TvShowsSection}/>
              <Route exact path="/DetailsPgae/:id/:type" component={DetailsPage}/>
          </Switch>   
        </div>
      </div>
    );
};
    

export default Mainsection;
