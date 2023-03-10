import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-acknowledgement-dialog',
  templateUrl: './acknowledgement-dialog.component.html',
  styleUrls: ['./acknowledgement-dialog.component.scss'],
})
export class AcknowledgementDialogComponent {
  public userInputFormControl: FormControl<string | null> = new FormControl<string>('');

  constructor(
    private dialogRef: MatDialogRef<AcknowledgementDialogComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  public onConfirmClick(): void {
    if (this.userInputFormControl.value === this.data.name) {
      this.dialogRef.close(true);
    }
  }

  public onCancelClick(): void {
    this.dialogRef.close(false);
  }

  public generatePattern(name: string): string {
    return `^${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`;
  }
}
