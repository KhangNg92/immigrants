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
              
                <h1 className="display-6 mx-auto">Welcome to Immigrant social
                </h1>
                <p className="lead1"> Welcome Newcomers to St.Louis's community</p>
                <hr />
                {/* <Link to="/register" className="btn btn-lg btn-dark ">Sign Up</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link> */}
                <p> In this Community, we connect, share ideas and help others out by sharing ideas, documents </p>
<div className="card-deck">
  <Link to ='/login' className="card">
    <img className="card-img-top" src="https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fafe7536d18fede71e9100625feb695c&auto=format&fit=crop&w=1350&q=80" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title text-white">Card title</h5>
      <p className="card-text text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text text-white"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </Link>
  <div className="card">
    <img className="card-img-top" src="https://c.o0bg.com/rf/image_835w/Boston/2011-2020/2017/02/16/BostonGlobe.com/Politics/Images/635145662.jpg" alt="Card image cap"/>
    <div className="card-body1">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src=".../100px200/" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title text-white">Card title</h5>
      <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text text-white"><small class="text-muted">Last updated 3 mins ago</small></p>
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
