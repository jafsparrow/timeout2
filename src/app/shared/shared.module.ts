import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './service/auth.service';
import { MaterialModule } from '../material.module';

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  declarations: [],
  imports: [
    MaterialModule
  ],
  exports: [MaterialModule],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ AuthService ]
    };
  }
}
