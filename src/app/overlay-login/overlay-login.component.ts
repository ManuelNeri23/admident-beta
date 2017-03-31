import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-login',
  templateUrl: './overlay-login.component.html',
  styleUrls: ['./overlay-login.component.sass']
})
export class OverlayLoginComponent implements OnInit {
  homeTitle = 'INICIO';
  myUser = 'manu23neri';
  myPswd = 'lokote';
  myString = 'Bienvenido';
  
  user = {
    name: 'manu23neri',
    psw: 'lokote'
  };

  alertMe(myVal) {
    alert(myVal);
    // alert('this.myString');
  }

  constructor() { }

  ngOnInit() {
  }

}
