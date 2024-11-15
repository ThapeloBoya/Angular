import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serviceID = 'service_eym5ibd';
  templateID = 'template_3ak2p7k';
  userID = '0EBOAQ-bPGuLvZMa7';

  // Variables to track success and error messages
  successMessage: string | null = null;
  errorMessage: string | null = null;

  sendEmail(formData: any, contactForm: any): void {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
      .then((response) => {
        this.successMessage = 'Message sent successfully!';
        this.errorMessage = null; // Clear any previous error message
        contactForm.reset(); // Reset the form after successful submission
      }, (err) => {
        this.errorMessage = 'Failed to send message. Please try again later.';
        this.successMessage = null; // Clear any previous success message
        contactForm.reset(); // Reset the form after failure
      });
  }
}
