import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsAdminService } from '../../common/services/events-admin.service';
import { LocationService } from '../../common/services/location.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  eventAddForm: FormGroup;
  games = ['Football', 'Cricket', 'Basket ball', 'Other'];
  isSubmitting = false;
  // the blow observables should be moved to fixture services
  panchayat$: Observable<any[]>;
  selectedPanchayat: String = null;
  selectedDistrict: String = null;


  
  constructor(private formBuilder: FormBuilder,
              private eventAdmin: EventsAdminService,
              private locationService: LocationService) { }

  ngOnInit() {

    // TODO - last application date should be default to one week ahead date.
    const start = new Date();
    console.log(start);
    const end = new Date();
    end.setDate(start.getDate() + 7);


    this.eventAddForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: [new Date(), [Validators.required]],
      type: ['', [Validators.required]],
      lastApplicationDate: [end, [Validators.required]],
      prizeDetails: this.formBuilder.group({
        firstPrize: ['', [Validators.required]],
        secondPrize: ['', [Validators.required]],
        thirdPrize: ['', [Validators.required]],
      })

    });

       
  }

  filterClubs() {
    this.locationService.districtFilter$.next(this.selectedDistrict);
    this.locationService.panchayatFilter$.next(this.selectedPanchayat);
  }
  
  

  submitEvent() {

    console.log(this.eventAddForm.value);
  }

  selectionChange($event) {
    console.log($event);
  }

  addEvent() {
    this.eventAddForm.disable();
    this.isSubmitting = true;
    let formData = this.eventAddForm.value;
    this.eventAdmin.createEvent(this.eventAddForm.value)
      .then(res => {
        console.log(res);
        this.isSubmitting = false;
      });
  }

  selectedState = null;
  selectChange($event) {
    console.log($event.value);
    this.selectedState = $event.value;
    // this.Districts;
  }

  get States() {
    return this.eventAdmin.getStates();
  }

  get Districts() {
    return this.eventAdmin.getDistrict(this.selectedState);
    // return this.eventAdmin.districts$;
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
