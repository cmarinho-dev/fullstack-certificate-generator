import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {

}
