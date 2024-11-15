# Registration Form Validation

## Table of Contents

- Description
- Features
- Technologies Used
- Conclusion

## Description

This project is a Registration Form with validation features to ensure that users enter correct information before 
submitting. The form collects a username, email, password, and confirm password fields. Each input is validated for 
format and consistency, such as matching passwords, a valid email format, and non-empty username. The form also 
includes inline error messages to guide users in correcting input mistakes.

## Features

- Real-time Validation: As the user fills in each field, JavaScript provides instant feedback on errors (e.g., email 
format, password mismatch).

- Error Messages: Each field displays specific error messages if the input does not meet validation criteria, 
helping users identify and fix issues.

- Submit Button Activation: The "Register" button remains disabled until all fields meet the requirements, 
preventing form submission with incomplete or incorrect data.


## Technologies Used

- HTML: Provides the structure for the form fields and labels.

- CSS: Styles the form layout and error messages to improve user experience.

- JavaScript: Implements the validation logic in Formval.js, including error detection, displaying messages, and 
enabling/disabling the submit button.

## Conclusion

This project demonstrates a simple but effective form validation process using JavaScript. It improves the user 
experience by ensuring data accuracy and clarity through real-time error messages. Future enhancements could include 
more advanced password requirements and additional field types, like phone numbers or dropdown selections. This 
project provides a solid foundation for implementing basic form validation in web applications.