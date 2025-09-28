import { Component, OnInit } from '@angular/core';

import { CertificateItem } from '../../_components/certificate-item/certificate-item';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { CertificateService } from '../../_services/certificate';
import { CertificateInterface } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [CertificateItem, SecondaryButton, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates implements OnInit {

  certificates: CertificateInterface[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates
  }
}
