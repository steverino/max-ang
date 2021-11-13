import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', select by attribute ie... <div app-servers></div>
  //selector: '.app-servers', select by class ie... <div class="app-servers"></div>
  templateUrl: './servers.component.html', 
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

}
