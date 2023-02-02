import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


movingmouse(){
  
  container:onmouseover = container.onmouseout = handler;
  function handler(event) {

    function str(el) {
      if (!el) return "null"
      return el.className || el.tagName;
    }
  
    log.value += event.type + ':  ' +
      'target=' + str(event.target) +
      ',  relatedTarget=' + str(event.relatedTarget) + "\n";
    log.scrollTop = log.scrollHeight;
  
    if (event.type == 'mouseover') {
      event.target.style.background = 'pink'
    }
    if (event.type == 'mouseout') {
      event.target.style.background = ''
    }
  }
  
}

}