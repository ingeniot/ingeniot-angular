import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public page_tittle:string;
  constructor() {
    this.page_tittle="Pagina no encontrada";
   }

  ngOnInit(): void {
  }

}
