import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //  myFunction() {
  //   document.getElementById("myTable").deleteRow(0);

  // }

  //  addbtn(){

  //  var table = document.getElementById("myTable");
  //   var row = table.insertRow(0);
  //   var cell1 = row.insertCell(0);
  //   var cell2 = row.insertCell(1);
  //   cell1.innerHTML = "NEW CELL1";
  //   cell2.innerHTML = "NEW CELL2";
  // }

  row = [
    {
      id: '',
      name: '',
      email: '',
    },
    {
      id: '',
      name: '',
      email: '',
    },
    {
      id: '',
      name: '',
      email: '',
    },
  ];

  addTable() {
    const obj = {
      id: '',
      name: '',
      email: '',
    };
    this.row.push(obj);
  }

  deleteRow(x) {
    // var delBtn = confirm(' Do you want to delete ?');
    // if (delBtn == true) {
    //   this.row.splice(x, 1);
    // }
    this.row.splice(x, 1);
  }

  // deleteRow(row) {
  //   var i = row.parentNode.parentNode.rowIndex;
  //   document.getElementById('POITable').deleteRow(i);
  // }

  // insRow() {
  //   console.log('hi');
  //   var x = document.getElementById('POITable');
  //   var new_row = x.rows[1].cloneNode(true);
  //   var len = x.rows.length;
  //   new_row.cells[0].innerHTML = len;

  //   var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
  //   inp1.id += len;
  //   inp1.value = '';
  //   var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
  //   inp2.id += len;
  //   inp2.value = '';
  //   x.appendChild(new_row);
  // }
}
