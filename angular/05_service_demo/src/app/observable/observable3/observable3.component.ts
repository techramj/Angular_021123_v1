import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-observable3',
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.css']
})
export class Observable3Component implements OnInit, OnDestroy {

 ngOnDestroy(): void {

 }

 ngOnInit(): void {
   let observable = new Observable(subcribe=>{
    let age = Math.round(Math.random()*200);

    setTimeout(()=>{
      if(age<=100){
        subcribe.next('Subscribed successfully:'+ age);
      }else{
        subcribe.error('Invalid age:'+ age);
      }
    }, 1000);

   });

   observable.subscribe(data=>{
    console.log(data);
   }, err=>{
      console.log(err);
   });
 }

}
