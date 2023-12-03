import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
    constructor(
      private userService: UserService
    ){}
    ngOnInit() {
      this.userService.retrieveObjects().subscribe(
        (res: any) => {
          console.log('API Response:', res);
        },
        (error) => {
          console.error('API Error:', error);
          console.log('Status:', error.status);
        }
      );
    }
    

}
