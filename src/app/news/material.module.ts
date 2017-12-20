import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule,
  MatCardModule
} from '@angular/material';

import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
})
export class MaterialModule {}
