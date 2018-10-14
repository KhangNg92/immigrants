import React, { Component } from 'react'
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty'
import Timeline from './Timeline';
class ProfileAbout extends Component {
 
  
  render() {
    const { profile } = this.props;

    //  Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    // Skill list
    const skills = profile.skills.map((skill, index) => (

      <div key = {index} className = "p-3">
      <i className = "fas fa-house-damage" /> {skill}
      
      </div>
    ))
    return (
      <div className="row">
      <div className="col-md-11">
        <div className="card1 card-body bg-light mb-3">
          <h3 className="text-center text-info">{firstName}'s Status</h3>
          <Timeline />
          
          <hr />
          <h3 className="text-center text-info">Need Help With</h3>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
           {skills}
            </div>


          </div>
        </div>
      </div>
     
    </div>
    
    )
  }
}
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}
export default ProfileAbout;