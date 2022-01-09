import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-practice',
  templateUrl: './reactive-forms-practice.component.html',
  styleUrls: ['./reactive-forms-practice.component.css']
})
export class ReactiveFormsPracticeComponent implements OnInit {
  userForm!: FormGroup
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]]
    })
  }

  ngOnInit(): void {
  }

}
