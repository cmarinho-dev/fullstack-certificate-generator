import { Component, ViewChild, viewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificateInterface } from '../../interfaces/certificate';
import { CertificateService } from '../../_services/certificate';
import { v4 as uuidv4 } from 'uuid'
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-form',
  imports: [
    SecondaryButton,
    PrimaryButton,
    FormsModule,
    CommonModule
  ],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {

  constructor(
    private certificateService: CertificateService,
    private route: Router
  ) { }
  @ViewChild('form') form!: NgForm

  certificate: CertificateInterface = {
    id: '',
    name: '',
    activities: [],
    issueDate: ''
  }
  activity: string = '';

  invalidLabel(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0
  }

  addAcitivity() {
    if (this.activity.length == 0) return
    this.certificate.activities.push(this.activity)
    this.activity = ''
  }

  deleteActivity(index: number) {
    this.certificate.activities.splice(index, 1)
  }

  submit() {
    if (!this.validForm()) {
      return
    }
    this.certificate.issueDate = this.currentDate()
    this.certificate.id = uuidv4()
    this.certificateService.add(this.certificate)

    this.route.navigate(['certificates', this.certificate.id])
    // this.certificate = this.certificateInitialState()
    // this.form.resetForm()
  }

  currentDate() {
    const currentDate = new Date()
    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const year = String(currentDate.getFullYear())

    const formattedDate = `${day}/${month}/${year}`
    return formattedDate
  }

  certificateInitialState(): CertificateInterface {
    return {
      id: '',
      name: '',
      activities: [],
      issueDate: ''
    }
  }
}
