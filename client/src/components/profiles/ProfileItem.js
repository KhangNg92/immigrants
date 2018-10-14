import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
class ProfileItem extends Component {
  render() {

    const {profile} = this.props;
    return (
        <div className="card1 card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.user.name}</h3>
            <p className = "text-muted">
              {profile.status}{' '}
              {(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>Current Residence: {profile.location}</span>
              )}
            </p>
  <p>
  Joined Date:  <Moment format = "YYYY/MM/DD"></Moment>
  </p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-dark">
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Need Help With</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                 <i className="fas fa-house-damage"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem;