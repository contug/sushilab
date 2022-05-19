import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  host: {class: 'router-element'},
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hidden: boolean = true;



  constructor() { }

  ngOnInit(): void {
  }


  togglePanel (){
    this.hidden = !this.hidden;
  }
}
