import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

    feedbacks = {
  name: '',
  email: '',
  phoneNo: '',
  feedBack: '',
  message: ''
};

onSubmit() {
  const whatsappNumber = '+971528031100'; // your WhatsApp number

  const text =
`Feedback Form
------------------
Name: ${this.feedbacks.name}
Email: ${this.feedbacks.email}
Phone: ${this.feedbacks.phoneNo}
Feedback: ${this.feedbacks.feedBack}
Message: ${this.feedbacks.message}`;

  const encodedText = encodeURIComponent(text);

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.open(whatsappURL, '_blank');
}

}
