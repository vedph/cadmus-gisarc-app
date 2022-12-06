import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
  UntypedFormGroup,
} from '@angular/forms';

import { AuthJwtService } from '@myrmidon/auth-jwt-login';
import { EditedObject, ModelEditorComponentBase } from '@myrmidon/cadmus-ui';

import { LocationPart, LOCATION_PART_TYPEID } from '../location-part';

/**
 * Location part editor component.
 * Thesauri: none.
 */
@Component({
  selector: 'cadmus-gisarc-location-part',
  templateUrl: './location-part.component.html',
  styleUrls: ['./location-part.component.css'],
})
export class LocationPartComponent
  extends ModelEditorComponentBase<LocationPart>
  implements OnInit
{
  public latitude: FormControl<number>;
  public longitude: FormControl<number>;
  public hasAltitude: FormControl<boolean>;
  public altitude: FormControl<number>;
  public geometries: FormControl<string>;

  constructor(authService: AuthJwtService, formBuilder: FormBuilder) {
    super(authService, formBuilder);
    // form
    this.latitude = formBuilder.control(0, {
      validators: Validators.required,
      nonNullable: true,
    });
    this.longitude = formBuilder.control(0, {
      validators: Validators.required,
      nonNullable: true,
    });
    this.hasAltitude = formBuilder.control(false, { nonNullable: true });
    this.altitude = formBuilder.control(0, { nonNullable: true });
    this.geometries = formBuilder.control('', { nonNullable: true });
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildForm(formBuilder: FormBuilder): FormGroup | UntypedFormGroup {
    return formBuilder.group({
      latitude: this.latitude,
      longitude: this.longitude,
      hasAltitude: this.hasAltitude,
      altitude: this.altitude,
      geometries: this.geometries,
    });
  }

  private updateForm(part?: LocationPart | null): void {
    if (!part) {
      this.form.reset();
      return;
    }
    this.latitude.setValue(part.latitude);
    this.longitude.setValue(part.longitude);
    if (part.altitude !== null && part.altitude !== undefined) {
      this.hasAltitude.setValue(true);
      this.altitude.setValue(part.altitude);
    } else {
      this.hasAltitude.setValue(false);
      this.altitude.reset();
    }
    if (part.geometries?.length) {
      this.geometries.setValue(part.geometries.join('\n'));
    } else {
      this.geometries.reset();
    }
    this.form.markAsPristine();
  }

  protected override onDataSet(data?: EditedObject<LocationPart>): void {
    // form
    this.updateForm(data?.value);
  }

  protected getValue(): LocationPart {
    let part = this.getEditedPart(LOCATION_PART_TYPEID) as LocationPart;

    part.latitude = this.latitude.value;
    part.longitude = this.longitude.value;
    part.altitude = this.hasAltitude.value ? this.altitude.value : undefined;
    part.geometries = this.geometries.value.trim().length
      ? this.geometries.value.split('\n').filter((s) => s.length)
      : undefined;

    return part;
  }
}
