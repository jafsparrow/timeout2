import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  eventAddForm: FormGroup;
  submitting = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.eventAddForm = this.formBuilder.group({
      name: new FormControl('event name intitial', [Validators.required]),
      date: new FormControl(''),
      location: new FormControl('location of the event')
    });
  }

  get name() {
    return this.eventAddForm.get('name');
  }

  get date() {
    return this.eventAddForm.get('date');
  }

  get location() {
    return this.eventAddForm.get('location');
  }

  submitEvent() {
    console.log(this.eventAddForm);
  }

}
