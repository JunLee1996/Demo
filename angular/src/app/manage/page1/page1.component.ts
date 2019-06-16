import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  current:number;
  steps:string[]
  constructor(private router:Router,private route:ActivatedRoute) { 
    this.current=0;
    this.steps=['step1','step2','step3']
  }

  ngOnInit() {

  }
  Previous(){
    this.current--
    this.router.navigate([this.steps[this.current]],{relativeTo: this.route});
  }
  next(){
    this.current++
    this.router.navigate([this.steps[this.current]],{relativeTo: this.route});
  }
}
