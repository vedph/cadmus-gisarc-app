import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// cadmus
import { CadmusCoreModule, PendingChangesGuard } from '@myrmidon/cadmus-core';
import { CadmusMatPhysicalSizeModule } from '@myrmidon/cadmus-mat-physical-size';
import { CadmusRefsDecoratedCountsModule } from '@myrmidon/cadmus-refs-decorated-counts';
import { CadmusStateModule } from '@myrmidon/cadmus-state';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusUiFlagsPickerModule } from '@myrmidon/cadmus-ui-flags-picker';
import {
  CadmusGisarcPartUiModule,
  EPI_SUPPORT_PART_TYPEID,
  EPI_WRITING_PART_TYPEID,
  LOCATION_PART_TYPEID,
} from '@myrmidon/cadmus-gisarc-part-ui';

// local
import { LocationPartFeatureComponent } from './location-part-feature/location-part-feature.component';
import { EpiSupportPartFeatureComponent } from './epi-support-part-feature/epi-support-part-feature.component';
import { EpiWritingPartFeatureComponent } from './epi-writing-part-feature/epi-writing-part-feature.component';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';

export const RouterModuleForChild = RouterModule.forChild([
  {
    path: `${LOCATION_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: LocationPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: `${EPI_SUPPORT_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: EpiSupportPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
  {
    path: `${EPI_WRITING_PART_TYPEID}/:pid`,
    pathMatch: 'full',
    component: EpiWritingPartFeatureComponent,
    canDeactivate: [PendingChangesGuard],
  },
]);

@NgModule({
  declarations: [
    LocationPartFeatureComponent,
    EpiSupportPartFeatureComponent,
    EpiWritingPartFeatureComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModuleForChild,
    // material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    // cadmus
    CadmusCoreModule,
    CadmusStateModule,
    CadmusUiModule,
    CadmusUiPgModule,
    CadmusUiFlagsPickerModule,
    CadmusMatPhysicalSizeModule,
    CadmusRefsDecoratedCountsModule,
    CadmusGisarcPartUiModule,
  ],
  exports: [
    LocationPartFeatureComponent,
    EpiSupportPartFeatureComponent,
    EpiWritingPartFeatureComponent,
  ],
})
export class CadmusGisarcPartPgModule {}
