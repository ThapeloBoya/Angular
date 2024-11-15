Angular Contact Form with EmailJS Integration
This project implements a contact form using Angular, integrated with EmailJS to send messages via email. The form includes basic input validation for the user's name, email address, and message. The layout is responsive, and the footer is sticky, remaining at the bottom of the page.

Features
Responsive Design: The form is designed to be mobile-friendly and adapts to different screen sizes.
Email Validation: The email field has validation to ensure a valid email address is entered.
Sticky Footer: The footer remains at the bottom of the page, even when the content does not fill the entire screen.
Form Submission: The form uses EmailJS to send the user's message via email.
Requirements
Angular 13+
EmailJS Account for sending emails. You need to set up an EmailJS account and get your serviceID, templateID, and userID.
Installation
Clone the repository to your local machine.
# git clone https://github.com/your-username/angular-contact-form.git

Navigate to the project directory.
# cd angular-contact-form

Install the necessary dependencies.
# npm install

Create an EmailJS account and obtain your serviceID, templateID, and userID. Follow the instructions below to set up EmailJS:

Sign up on EmailJS.
# Set up a new email service in the EmailJS dashboard.
# Create a new email template.
# Find your userID in the dashboard, and the serviceID and templateID in the email service and template setup.
# Update the Angular component with your EmailJS details:

In app.component.ts, replace the serviceID, templateID, and userID with your credentials:
# serviceID = 'your-service-id';
# templateID = 'your-template-id';
# userID = 'your-user-id';

Start the Angular development server.
# ng serve
Open your browser and navigate to http://localhost:4200.

Fill in the contact form and click Submit. If the form is valid, the message will be sent to the specified email address via EmailJS.

Troubleshooting
Ensure that your EmailJS account is correctly set up and that your service and template IDs are accurate.
If the form submission fails, check the browser console for error messages, which can help you identify issues with the form or the API request.
Project Structure
ruby
Copy code
src/
├── app/
│   ├── app.component.css         # Component CSS (form styling, sticky footer)
│   ├── app.component.html        # Component HTML (contact form layout)
│   ├── app.component.ts          # Component TypeScript (form logic, EmailJS integration)
│   └── app.module.ts             # Angular module configuration
├── assets/
│   └── ...                       # Static assets
├── environments/
│   └── environment.ts            # Development environment settings
└── styles.css                    # Global styles (if any)
License
This project is licensed under the MIT License - see the LICENSE file for details.