import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { CertificateItem } from '../../_components/certificate-item/certificate-item';

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButton, CertificateItem],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {

}
