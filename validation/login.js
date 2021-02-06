const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email checks commented as phone based login
  //if (Validator.isEmpty(data.email)) {
  //   errors.email = "Email field is required";
  // } else if (!Validator.isEmail(data.email)) {
  //   errors.email = "Email is invalid";
  // }

  //Phone Number checks
  console.log(data.phonenumber);
  if (Validator.isEmpty(data.phonenumber)) {
    errors.phonenumber = "Phone Number is required";
  } else if (!Validator.isMobilePhone(data.phonenumber)) {
    errors.phonenumber = "Phone Number is not valid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
