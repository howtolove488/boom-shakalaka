import { Component, OnInit, Input } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input("sidenavMenu") sidenavMenu: any;
  @Input("sidenavSearch") sidenavSearch: any;
  @Input("searchFormComponent") searchFormComponent: any;
  constructor() { }

  ngOnInit() {
  }

    // OpenSideNav Menu
    openSideNavMenu() {
        this.sidenavMenu.toggle();
    }
    // Opsen sideNavSearch
    openSideNavSearch() {
        // open sidenav Search
        this.sidenavSearch.open();
        this.searchFormComponent.searchInput.setValue(null);
        this.searchFormComponent.state = "active";
    }
}
