import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username;
  constructor(private authService: AuthService,
  private router : Router) { }
  onLogout(){    
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.authService.getprofile().subscribe(data=>{
      this.username= data.user.username;
    });
  }
}
