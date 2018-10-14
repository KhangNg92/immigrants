import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes} from 'prop-types';
import { connect } from 'react-redux';
 class Landing extends Component {
 componentDidMount(){
  if(this.props.auth.isAuthenticated){
   this.props.history.push('/');
  }
 }
 render() {
  return (
    <div className="landing">
    <div className="dark-overlay landing-inner text-light">
     <div className="container">
      <div className="row">
       <div className="col-md-12 text-center">

        <h1 className="display-5 mx-auto">Immigrant Portal for St. Louis </h1>
        <p className="lead1"> Matching non-profit organizations to immigrants</p>
       
        {/* <Link to="/register" className="btn btn-lg btn-dark ">Sign Up</Link>
        <Link to="/login" className="btn btn-lg btn-light">Login</Link> */}
        {/*<p> In this abc Community, we connect and help others out by sharing ideas and best practices</p>*/}
        <br/>
        <br/>
        <br/>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    
      
  
<div className="card-deck spacing">
 <Link to = '/login' className="card">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=47b4b88e2825332da6fb93898562051c&auto=format&fit=crop&w=1050&q=80" alt="Card image cap"/>
  <div className="card-body">
   <h5 className="card-title text-white">Housing</h5>
   <p className="card-text text-white">Assist with affordable housing programs enrollment, ITIN mortgages, etc </p>
   {/* /* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
  </div>
 </Link>
 <Link to = '/login'className="card">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1501516069922-a9982bd6f3bd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=794e5cf2083ae47e801eef74ec9842cf&auto=format&fit=crop&w=1350&q=80" alt="Card image cap"/>
  <div className="card-body1">
   <h5 className="card-title text-white">Employment</h5>
   <p className="card-text text-white">Vocational Training, Apprenticeship, Job Placement</p>
   {/* /* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
  </div>
 </Link>
 <Link to = '/login' className="card">
  <img className="card-img-top" src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8428c213c5c30918e7a4b10cb37d482f&auto=format&fit=crop&w=1350&q=80" alt="Card image cap"/>
  <div className="card-body">
   <h5 className="card-title text-white">Legal Services</h5>
   <p className="card-text text-white">Employment authorization, Family-based petitions, Naturalization/Citizenship</p>
   {/* /*<p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
  </div>
 </Link>
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
