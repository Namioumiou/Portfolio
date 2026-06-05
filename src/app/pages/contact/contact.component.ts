import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

// Remplis ces valeurs depuis ton compte emailjs.com
const EMAILJS_SERVICE_ID = 'service_wvo5koc';
const EMAILJS_TEMPLATE_ID = 'template_3rsxaes';
const EMAILJS_PUBLIC_KEY = '5J0d4Us7XaDodAZ-Z';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  form: FormGroup;
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(2)]],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get name() { return this.form.get('from_name')!; }
  get email() { return this.form.get('from_email')!; }
  get message() { return this.form.get('message')!; }

  async send() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.status = 'loading';
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this.form.value, EMAILJS_PUBLIC_KEY);
      this.status = 'success';
      this.form.reset();
    } catch {
      this.status = 'error';
    }
  }
}
