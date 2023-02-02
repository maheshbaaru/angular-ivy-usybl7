import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  main() {
    let elem = document.getElementById('elem');

    class Menu {
      handleEvent(event) {
        switch (event.type) {
          case 'mousedown':
            elem.innerHTML = 'Mouse button pressed';
            break;
          case 'mouseup':
            elem.innerHTML += '...and released.';
            break;
        }
      }
    }

    let menu = new Menu();

    elem.addEventListener('mousedown', menu);
    elem.addEventListener('mouseup', menu);
  }
}
