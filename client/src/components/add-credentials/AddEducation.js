import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import  TextFieldGroup  from '../common/TextFieldGroup';
import  TextAreaFieldGroup  from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux'; // {} from import is container
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileAction';
 class AddEducation extends Component {
     constructor(props){
         super(props);
         this.state ={
             school:'',
             degree:'',
             fieldofstudy:'',
             from:'',
             to:'',
             current:false,
             description: '',
             errors: {},
             disabled: false, // if they click on the current checkbox, it will blackout the to

         }

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
         this.onCheck = this.onCheck.bind(this);
     }
componentWillReceiveProps(nextProps){
    if(nextProps.errors) {
        this.setState({ errors: nextProps.errors})
    }
}
     onSubmit(e) {
         e.preventDefault();

         const expData = {
             school: this.state.school,
             degree: this.state.degree,
             fieldofstudy: this.state.fieldofstudy,
             from: this.state.from,
             to: this.state.to,
             current: this.state.current,
             description: this.state.description
         };

         this.props.addEducation(expData, this.props.history);
         console.log('submit');
     }

     onChange(e){
         this.setState({[e.target.name] : e.target.value})
     }

     onCheck(e){  // change the current option for disabled and current
         this.setState({
             disabled: !this.state.disabled,
             current: !this.state.current
         })
     }
  render() {
    const { errors } = this.state; // destructoring same as const errors = this.state.errors;
   
    return (
    //   <div className = "add-education">
    //     <div className = " container"> 
    //     <div className = "row">
    //     <div className = "col-md-8 m-auto">
    //         <Link to="/dashboard" className = "btn btn-light">
    //         Back
    //         </Link>
    //         <h1 className= "display-4 text-center"> Add Education</h1>
    //         <p className = "lead text-center"> Add any school, bootcamp, etc that you have attended</p>
    //         <small className = "d-block pb-3">* = required fields</small>
    //         <form onSubmit = {this.onSubmit}>
    //         <TextFieldGroup
    //               placeholder="* School"
    //               name="school"
    //               value={this.state.school}
    //               onChange={this.onChange}
    //               error={errors.school}
    //             />
    //             <TextFieldGroup
    //               placeholder="* Degree or Certification"
    //               name="degree"
    //               value={this.state.degree}
    //               onChange={this.onChange}
    //               error={errors.degree}
    //             />
    //             <TextFieldGroup
    //               placeholder="Field of Study"
    //               name="fieldofstudy"
    //               value={this.state.fieldofstudy}
    //               onChange={this.onChange}
    //               error={errors.fieldofstudy}
    //             />
    //             <h6>From Date</h6>
    //             <TextFieldGroup
    //               name="from"
    //               type="date"
    //               value={this.state.from}
    //               onChange={this.onChange}
    //               error={errors.from}
    //             />
    //             <h6>To Date</h6>
    //             <TextFieldGroup
    //               name="to"
    //               type="date"
    //               value={this.state.to}
    //               onChange={this.onChange}
    //               error={errors.to}
    //               disabled={this.state.disabled ? 'disabled' : ''}
    //             />
    //         <div className = "form-check mb-4">
    //         <input 
    //         type = "checkbox"
    //         className = "form-check-input"
    //         name = "current"
    //         value = {this.state.current}
    //         checked = {this.state.current}
    //         onChange = {this.onCheck}
    //         id = "current"
            
    //         />
    //       <label htmlFor = "current" className = "form-check-label">
    //       Current Job
    //       </label>
    //       </div>
    //       <TextAreaFieldGroup
    //               placeholder="Program Description"
    //               name="description"
    //               value={this.state.description}
    //               onChange={this.onChange}
    //               error={errors.description}
    //               info="Tell us about the the program that you were in"
    //             />
    //             <input
    //               type="submit"
    //               value="Submit"
    //               className="btn btn-info btn-block mt-4"
    //             />
    //         </form>
    //     </div>
    //     </div>
    //     </div>
    //   </div>
    ""
    )
  }
}
AddEducation.PropTypes = {
    AddEducation: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps, {addEducation})(withRouter(AddEducation)); //withRouter is used for redirect