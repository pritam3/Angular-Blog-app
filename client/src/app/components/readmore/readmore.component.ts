import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import{ Location } from '@angular/common';
import{ ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {

  message;
  messageClass;
  blog;
  currentUrl;
  loading = true;

  constructor(private location : Location,
              private activatedRoute :ActivatedRoute,                
              private blogService :BlogService,) { }
                
  goBack(){
    this.location.back();
  }

  ngOnInit() {
    //to grab the id from url 
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.blogService.getReadmore(this.currentUrl.id).subscribe(data =>{
      if(!data.success){
        this.messageClass = "alert alert-danger";
        this.message= data.message;
      }
      else{
        this.blog=  data.blog;
        this.loading = false;
      }
    })
  }  
}