import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsAdminService } from '../../common/services/events-admin.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  eventAddForm: FormGroup;
  // eventBasicForm: FormGroup;
  // eventDetailsForm: FormGroup;
  // eventPrizeForm: FormGroup;
  games = ['football', 'cricket', 'basket ball'];
  isSubmitting = false;
  constructor(private formBuilder: FormBuilder,
              private eventAdmin: EventsAdminService) { }

  ngOnInit() {
    this.eventAddForm = this.formBuilder.group({
      name: new FormControl('event name intitial', [Validators.required]),
      date: new FormControl(''),
      type: new FormControl(),
      location: new FormControl('location of the event'),
      firstPrize: new FormControl(),
      secondPrize: new FormControl(),
      thirdPrize: new FormControl()
    });

    this.eventAdmin.getEvents()
      .subscribe(res => console.log(res));
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

  selectionChange($event) {
    console.log($event);
  }

  addEvent() {
    console.log(this.eventAddForm.value);
    this.isSubmitting = true;
    this.eventAdmin.createEvent(this.eventAddForm.value)
      .then(res => {
        console.log(res);
        this.isSubmitting = false;
      });
  }

}


// this.eventAddForm = this.formBuilder.group({
//   name: new FormControl('event name intitial', [Validators.required]),
//   date: new FormControl(''),
//   location: new FormControl('location of the event')
// });

// this.eventBasicForm = this.formBuilder.group({
//   name: new FormControl(),
//   type: new FormControl(),
//   game: new FormControl(),
//   date: new FormControl()
// });

// this.eventDetailsForm = this.formBuilder.group({
//   place: new FormControl(),
//   state: new FormControl(),
//   district: new FormControl(),
//   panchayath: new FormControl()
// });
