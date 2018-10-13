const Validator = require('validator');
const isEmpty = require ('./is-empty');
module.exports = function validateProfileInput(data){
    let errors = {};


data.handle = !isEmpty(data.handle) ? data.handle : "";
data.status = !isEmpty(data.status) ? data.status : "";
data.skills = !isEmpty(data.skills) ? data.skills : "";



if(!Validator.isLength(data.handle, {min: 2, max: 40})){
    errors.handle = 'Handle needs to be between 2 and 4 characters';
}

if(Validator.isEmpty(data.handle)){
    errors.handle = 'Profile handle is required';
}

if(Validator.isEmpty(data.status)){
    errors.status = 'Status field is required';
}

if(Validator.isEmpty(data.skills)){
    errors.skills = 'Skills handle is required';
}

if(!isEmpty(data.website)){ //they're not required but 
    if(!Validator.isURL(data.website)){
        errors.website = 'Not a valid URL'
    }
}

if(!isEmpty(data.youtube)){ //they're not required but 
    if(!Validator.isURL(data.youtube)){
        errors.youtube = 'Not a valid URL'
    }
}

if(!isEmpty(data.twitter)){ //they're not required but 
    if(!Validator.isURL(data.twitter)){
        errors.twitter = 'Not a valid URL'
    }
}

if(!isEmpty(data.facebook)){ //they're not required but 
    if(!Validator.isURL(data.facebook)){
        errors.facebook = 'Not a valid URL'
    }
}

if(!isEmpty(data.linkedin)){ //they're not required but 
    if(!Validator.isURL(data.linkedin)){
        errors.linkedin = 'Not a valid URL'
    }
}

if(!isEmpty(data.instagram)){ //they're not required but 
    if(!Validator.isURL(data.instagram)){
        errors.instagram = 'Not a valid URL'
    }
}
    return {
        errors, 
        isValid: isEmpty(errors)
    }
}