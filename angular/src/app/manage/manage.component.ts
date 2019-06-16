import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../shared/app.service';
import { ManageService } from './shared/manage.service';
import { Menu } from './shared/manage.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  isCollapsed = false;
  menu: any;
  constructor(private router:Router,private route:ActivatedRoute,private as:AppService,private ms:ManageService) {
    let menus:Menu[]=[];
    this.ms.getallMenu().subscribe(
      ms=>{
        ms.forEach(m => {
        m.menus=[];
        });

        ms.forEach(m => {
          if(m.fatherId!==0){
          ms.find(item=>item.id===m.fatherId).menus.push(m);
          }
        });
       
        ms.forEach(el=>{
          if(el.fatherId===0){
            menus.push(el);
          }
        })
        this.menu = menus
        if(this.as.user.roles.content!=='admin'){
          this.menu.forEach(element => {
            element.menus=[];
          });
         }
      }
    )
  
  }

  ngOnInit() {
   
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  onClick(p){
  if(p.router){
    this.router.navigate([p.router],{relativeTo: this.route});
  }
  }
}
