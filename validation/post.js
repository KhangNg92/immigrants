const Validator = require('validator');
const isEmpty = require ('./is-empty');
module.exports = function validatePostInput(data){
    let errors = {};


data.text = !isEmpty(data.text) ? data.text : ''; //this line check if it's empty then it will return blank




if(!Validator.isLength(data.text, {min:10, max: 300})){
    errors.text = 'Post must be between 10 and 300 characters';
}
    
if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
}


    return {
        errors, 
        isValid: isEmpty(errors)
    };
}