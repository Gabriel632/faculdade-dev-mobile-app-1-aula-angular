import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css'
})
export class ModalComponent {

    constructor(
        public dialogRef: MatDialogRef<ModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
      ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}