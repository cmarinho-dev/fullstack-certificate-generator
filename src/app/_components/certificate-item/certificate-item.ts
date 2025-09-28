import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-item',
  imports: [
    SecondaryButton
  ],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.css'
})
export class CertificateItem {
  @Input() studentName: string = ''
  @Input() issueDate: string = ''
  @Input() id: string = ''


  constructor(private router: Router){}

  redirectToCertificate(){
    this.router.navigate(['/certificates', this.id])
  }
}
