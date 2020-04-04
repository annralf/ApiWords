import { Component, OnInit, Inject } from '@angular/core';
import {MatFormField,  MatLabel, MatError, MatFormFieldControl } from '@angular/material/form-field'; 
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  
  email = new FormControl('', [Validators.required, Validators.email]);
  igImages = [
    'url(\'assets/img/pic_1.png\')',
    'url(\'assets/img/pic_2.png\')',
    'url(\'assets/img/pic_3.png\')',
    'url(\'assets/img/pic_5.png\')',
    'url(\'assets/img/pic_7.png\')',
    'url(\'assets/img/pic_8.png\')'
  ];

  userEmails = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    });  
  counter:number = 0;
  value : string = '';
  msg: string = '';

  getErrorMessage() {
    if (this.email.hasError('required')) {
      console.log('error');
      return 'You must enter a value';
    }
    console.log('no valid');

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  shuffle(images) {
    var ctr = images.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = images[ctr];
        images[ctr] = images[index];
        images[index] = temp;
    }
    return images;
}
openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '250px',
    data: {msg: this.msg}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
};
get primEmail(){
	return this.userEmails.get('primaryEmail')
  }

  onInput(value: string) {
    this.counter = value.length;
    this.value = value;
    if(!this.userEmails.get('primaryEmail').invalid){
      if ((this.counter % 2) != 0) {
        this.msg = "okay es un par";
      }else{
        this.msg = "okay es un impar";
      }
      this.openDialog();
    console.log();  
    }
  }
ngOnInit(): void {
  this.igImages = this.shuffle(this.igImages);
}
}
 
export interface DialogData {
  msg: string;
}
@Component({
  selector: 'app-modal',
  template: `<div mat-dialog-content> 
              <h1>{{ data.msg }}</h1>
              <h5>Gracias!</h5>
            </div>`,
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
