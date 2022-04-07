import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  listPersons = [
    { name: 'pedro perez', nickname: 'pepe', email: 'pepe@gmail.com' },
  ];
  saludo=['hola','como','estas'];

  constructor() {}

  ngOnInit(): void {}
}
