import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { ClubDetailsService } from '../services/club-details.service';
import { switchMap } from 'rxjs/operator/switchMap';
import { tap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  myControl = new FormControl();

  options = [
    new Club('Liverpool', 'LIVWX99'),
    new Club('Barcelona', 'BARC0993'),
    new Club('Chelsea', 'CHECLI39')
  ];
  filteredOptions: Observable<Club[]>;

  bloodGroups = ['A +', 'A -', 'B +', 'B -', 'O +', 'O -', 'AB +', 'AB -']

  constructor(private _formBuilder: FormBuilder,
              private clubService: ClubDetailsService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith<string | Club>(''),
    //     map(value => typeof value === 'string' ? value : value.name),
    //     map(name => name ? this.filter(name) : this.options.slice())
    //   )
    this.myControl.valueChanges
      .pipe(startWith(<string>('')))
      .debounceTime(500)
      .subscribe(value => this.clubService.searchByClubName(value))
    this.filteredOptions = <Observable<Club[]>>this.clubService.queryObservable$
                              .pipe(tap(value => {
                                console.log(value);
                                console.log('this is from inside the tap function');
                              }));
  }

  filter(name: string): Club[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  displayFn(user?: Club): string | undefined {
    return user ? user.name : undefined;
  }

  selectedImage =null;
  onFileSelected($event) {
    console.log($event);
    this.selectedImage = $event.target.files[0];
  }
}


export class Club {
  constructor(public name: string, public id: string) { }
}
