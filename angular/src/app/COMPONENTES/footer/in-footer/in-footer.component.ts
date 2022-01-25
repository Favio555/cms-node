import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-footer',
  templateUrl: './in-footer.component.html',
  styleUrls: ['./in-footer.component.scss']
})
export class InFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reloadCurrentPage(){
    window.location.reload();
  }
}
