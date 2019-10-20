import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  constructor(public menu:MenuController) {}
  ngOnInit()
  {
    this.menu.enable(true);
    this.menu.close();
  }
  openMenu()
  {
    this.menu.toggle();
  }
}
