import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
 class Landing extends Component {
 componentDidMount(){
  if(this.props.auth.isAuthenticated){
   this.props.history.push('/dashboard');
  }
 }
 render() {
  return (
    <div className="landing">
    <div className="dark-overlay landing-inner text-light">
     <div className="container">
      <div className="row">
       <div className="col-md-12 text-center">

        <h1 className="display-6 mx-auto">Immigrant Portal for St. Louis
        </h1>
        <p className="lead1"> Helping immgrants transitioning into new home </p>
        <hr />
        {/* <Link to="/register" className="btn btn-lg btn-dark ">Sign Up</Link>
        <Link to="/login" className="btn btn-lg btn-light">Login</Link> */}
        <p> In this Community, we connect and help others out by sharing ideas, best practices </p>
<div className="card-deck">
 <div className="card">
  <img className="card-img-top" src="https://unsplash.com/photos/NYSt8bgmPM8" alt="Card image cap"/>
  <div className="card-body">
   <h5 className="card-title">Housing</h5>
   <p className="card-text">Assist with affordable housing programs enrollment, ITIN mortgages, etc </p>
   {/* /* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
  </div>
 </div>
 <div className="card">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=794e5cf2083ae47e801eef74ec9842cf&auto=format&fit=crop&w=1350&q=80" alt="Card image cap"/>
  <div className="card-body1">
   <h5 className="card-title">Employment</h5>
   <p className="card-text">Vocational Training, Apprenticeship, Job Placement</p>
   {/* /* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
  </div>
 </div>
 <div className="card">
  <img className="card-img-top" src="https://unsplash.com/photos/GJao3ZTX9gU" alt="Card image cap"/>
  <div className="card-body">
   <h5 className="card-title">Legal Services</h5>
   <p className="card-text">Adjustment of Status, Consular Processing, Deferred Action for Childhood Arrivals (DACA), Employment authorization, Family-based petitions, Naturalization/Citizenship, Temporary Protected Status (TPS), U visas, Violence Against Women Act (VAWA) petitions</p>
   {/* /*<p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
  </div>
 </div>
</div>
      </div>
     </div>
    </div>
   </div>
  </div>


  )

 }
}
Landing.propTypes = {
 auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
 auth: state.auth
})
export default connect(mapStateToProps)(Landing);
