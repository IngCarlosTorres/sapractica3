import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practica3';

  constructor(){}

  ngOnInit(): void {
  }

  mensaje(): void {
    Swal.fire({
      title: 'HOLA AUX MARIO \n ESTA ES MI PRACTICA 3 \n SOY CARLOS TORRES - 201504240',
      width: 600,
      padding: '3em',
      background: '#fff url(../assets/media/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("../assets/media/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }
}
