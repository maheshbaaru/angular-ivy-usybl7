import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formevent(){
    let openModalButton = document.querySelector('#open-modal-button');

let modalContainer = document.querySelector('#prompt-form-container');
let form = document.querySelector('#prompt-form');
let promptMessage = document.querySelector('#prompt-message');


let text = form.elements.text;
let cancel = form.elements.cancel;

let coverDiv = document.createElement('div');
coverDiv.id = 'cover-div';

promptMessage.userSetTitle = function(value) {
    this.innerHTML = value;
};

openModalButton.onclick = function(event) {
    showPrompt('something valuable appears to be entered..:D', value => {
        alert(`value is: ${value}`);
    });
};

function showPrompt(titleHTML = promptMessage.innerHTML, callback) {
    promptMessage.userSetTitle(titleHTML);
    showModal();

    form.addEventListener('keydown', onKeyDown);

    form.onsubmit = function(event) {
        event.preventDefault();

        if (!text.value) return;

        hideModal();
        return callback.call(this, text.value);
    };

    cancel.onclick = function(event) {
        hideModal();
        return callback.call(this, null);
    };

    function onKeyDown(event) {
        if (event.key == 'Escape') {
            hideModal();
            form.removeEventListener('keydown', onKeyDown);

            return callback.call(this, null);
        }
    }
}

function showModal() {
    document.body.style.overflowY = 'hidden';
    document.body.append(coverDiv);
    modalContainer.hidden = false;
    text.value = '';
    text.focus();
}

function hideModal() {
    coverDiv.remove();
    modalContainer.hidden = true;
    document.body.style.overflowY = 'auto';
  }
}
  secdsolutn(){
    <script>
    // Show a half-transparent DIV to "shadow" the page
    // (the form is not inside, but near it, because it shouldn't be half-transparent)
    function showCover() {
      let coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';

      // make the page unscrollable while the modal form is open
      document.body.style.overflowY = 'hidden';

      document.body.append(coverDiv);
    }

    function hideCover() {
      document.getElementById('cover-div').remove();
      document.body.style.overflowY = '';
    }

    function showPrompt(text, callback) {
      showCover();
      let form = document.getElementById('prompt-form');
      let container = document.getElementById('prompt-form-container');
      document.getElementById('prompt-message').innerHTML = text;
      form.text.value = '';

      function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
      }

      form.onsubmit = function() {
        let value = form.text.value;
        if (value == '') return false; // ignore empty submit

        complete(value);
        return false;
      };

      form.cancel.onclick = function() {
        complete(null);
      };

      document.onkeydown = function(e) {
        if (e.key == 'Escape') {
          complete(null);
        }
      };

      let lastElem = form.elements[form.elements.length - 1];
      let firstElem = form.elements[0];

      lastElem.onkeydown = function(e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
      };

      firstElem.onkeydown = function(e) {
        if (e.key == 'Tab' && e.shiftKey) {
          lastElem.focus();
          return false;
        }
      };

      container.style.display = 'block';
      form.elements.text.focus();
    }

    document.getElementById('show-button').onclick = function() {
      showPrompt("Enter something<br>...smart :)", function(value) {
        alert("You entered: " + value);
      });
    };
  </script>

  }


}