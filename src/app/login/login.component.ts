import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  home() {
    const thumbs = document.getElementById('thumbs') as HTMLUListElement;
    const largeImg = document.getElementById('largeImg') as HTMLImageElement;

    thumbs.addEventListener('click', (event) => {
      const target = (event.target as HTMLElement).closest('a');
      if (!target) return;

      event.preventDefault();
      const href = target.href;
      const title = target.title;

      if (!href || !title) return;

      largeImg.src = href;
      largeImg.title = title;
    });
  }

  newimage() {
    function showImage(e) {
      let img = document.getElementById('largeImg');

      if (e.target.matches('img')) {
        let imgSrc = e.target.closest('a');
        img.src = imgSrc.href;
      } else {
        img.src = e.target.href;
      }

      e.preventDefault();
    }

    let thumbs = document.getElementById('thumbs');
    thumbs.addEventListener('click', showImage, false);
  }
  keyboard() {
    let button = document.getElementById('event');
    button.onclick = function (event) {
      if (event.altKey && event.shiftKey) {
        alert('Hooray!');
      }
    };
  }

  runkey() {
    runOnKeys(() => alert('Hello!'), 'KeyQ', 'KeyW');
  }
}

function runOnKeys(arg0: () => void, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}
