# Yummy Cafe — Assignment #5: Forms and Validation

## 1. Project Overview

Yummy Cafe is a responsive cafe website developed as part of the Frontend course at Astana IT University.

This assignment extends the existing website by adding accessible HTML forms, Bootstrap styling, client-side validation, and responsive layouts.

The project contains two main forms:

- **Contact Form:** Allows visitors to enter their name, email address, and message.
- **Registration Form:** Allows visitors to enter personal information, create a password, select optional interests, and choose their country.

Both forms demonstrate HTML5 validation, Bootstrap form components, and JavaScript validation.

## 2. Technologies Used

- HTML5 — page structure and form elements
- CSS3 — styling and responsive layouts
- Bootstrap 5 — form controls, grid system, buttons, and validation styles
- JavaScript — custom form validation and submission feedback
- Google Fonts — typography
- Git and GitHub — version control and teamwork
- GitHub Pages — website deployment, if enabled

## 3. Project Structure

```text
cafe-website/
├── index.html
├── menu.html
├── about.html
├── booking.html
├── contact.html
├── register.html
├── demo-result.html
├── css/
│   ├── style.css
│   ├── index.css
│   ├── responsive.css
│   ├── fonts.css
│   └── forms.css
├── js/
│   ├── validation.js
│   └── register-validation.js
├── images/
│   └── ...
└── README.md
```

*Note: The `demo-result.html` file is included if required by the assignment. Remove or rename entries if your final project uses a different structure.*

## 4. Contact Form

The contact form is implemented in `contact.html`.

### Fields

- Full name — required, minimum 2 characters
- Email address — required, must use a valid email format
- Message — required, minimum 10 and maximum 500 characters

### Features

- Labels associated with their corresponding inputs
- HTML5 validation attributes
- Bootstrap form controls and buttons
- Validation feedback for invalid input
- Submit and reset buttons
- Responsive layout for mobile, tablet, and desktop screens

The contact form demonstrates validation in the browser. It does not send messages to a real email address or backend service.

## 5. Registration Form

The registration form is implemented in `register.html`.

### Required fields

- First name — minimum 2 characters
- Last name — minimum 2 characters
- Email address — valid email format
- Password — minimum 8 characters
- Confirm password — must match the password
- Country — must be selected

### Optional fields

- Gender — radio button group
- Interests — checkboxes

### Features

- Bootstrap form controls and responsive grid layout
- HTML5 validation attributes
- JavaScript password confirmation
- Validation feedback for invalid fields
- Submit and reset buttons
- Success message for valid demo submissions

The registration form does not create a real user account or store registration data on a server.

## 6. Validation and Submission

Validation uses HTML5 form constraints, Bootstrap validation styles, and JavaScript.

The contact form uses `js/validation.js`, while the registration form uses `js/register-validation.js`.

The registration script checks that the password and confirmation match. Custom validation errors are cleared when the user corrects the input.

Invalid forms are prevented from proceeding, and a successful demonstration submission displays a confirmation message.

## 7. Responsive Design

The form pages use Bootstrap's responsive grid and custom CSS media queries.

The layout adapts to different screen sizes:

- **Mobile:** single-column form layout and vertically stacked buttons
- **Tablet:** responsive form fields and adjusted spacing
- **Desktop:** wider form container and two-column name fields in the registration form

The shared form stylesheet is kept separate from the homepage styles to reduce conflicts with Bootstrap.

## 8. Testing

The following cases should be tested before submission.

| Test case | Expected result |
|---|---|
| Submit contact form with empty fields | Required-field errors appear |
| Enter a one-character name | Name validation fails |
| Enter an invalid email | Email validation fails |
| Enter a message shorter than 10 characters | Message validation fails |
| Enter a message longer than 500 characters | Input is limited to 500 characters |
| Submit registration form with empty fields | Required-field errors appear |
| Enter a password shorter than 8 characters | Password validation fails |
| Enter different passwords | Password confirmation error appears |
| Correct the password confirmation | Password mismatch error clears |
| Leave country unselected | Country validation fails |
| Submit valid values | Demo success message appears |
| Click reset | Form values and validation feedback reset |
| Open pages on mobile, tablet, and desktop | Layout adapts to the viewport |

Record the actual results after testing and include screenshots in the final report.

## 9. Team Contributions

Update the table below to reflect the work completed by each team member.

| Team member | Responsibility |
|---|---|
| Student 1: Aisana Ashikova | Contact form implementation and testing |
| Student 2: Oraz Kaiyrzhan | Registration form implementation |
| Student 3: Moldir Zhaksylyk | JavaScript validation and form behavior |
| Student 4: Zhantore Murat | Integration, responsive testing, README, and report |

All team members should review the integrated website and be prepared to explain their contributions during the project defence.

## 10. How to Run the Project

1. Clone or download the repository.
2. Open the project folder in a code editor.
3. Open `index.html` in a browser or run the project using a local development server.
4. Navigate to the Contact Us and Register pages.
5. Test the form validation and responsive layouts.

Bootstrap CSS is loaded through a CDN, so an internet connection is required for its styles to load.

## 11. Limitations

- Forms use client-side validation only.
- Contact messages are not delivered to a real email address.
- Registration does not create real accounts.
- No database or backend is connected.
- Client-side validation is intended for demonstration and would need server-side validation in a production application.

## 12. Conclusion

This assignment demonstrates how to create accessible and responsive forms using HTML5, Bootstrap, CSS, and JavaScript. It provides practical experience with form controls, validation constraints, password confirmation, responsive design, testing, and collaborative development.

The completed forms extend the existing Yummy Cafe website while preserving its overall visual identity.
