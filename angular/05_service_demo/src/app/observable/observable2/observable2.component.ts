import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit, OnDestroy{
  subscription:Subscription =new Subscription();
  num:number = 0;
  obs1:any ;

  ngOnInit(): void {
    this.obs1 = interval(1000);

    this.subscription = this.obs1.subscribe((num:any)=>{
      console.log('num='+num);
      this.num = num;
    });
  }

  ngOnDestroy(): void {
      console.log('Observable2Component destroy called. ')
      this.subscription.unsubscribe();
  }






}
