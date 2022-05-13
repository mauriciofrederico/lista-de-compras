import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    M.Sidenav.init(this.sideNav?.nativeElement)
  }
}
