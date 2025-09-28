import { Injectable } from '@angular/core';
import { CertificateInterface } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  certificates: CertificateInterface[] = [];

  constructor() {}

  add(certificate: CertificateInterface) {
    this.certificates.unshift({ ...certificate })
    localStorage.setItem('certificates', JSON.stringify(this.certificates))
  }
}
