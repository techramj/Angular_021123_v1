import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise2',
  templateUrl: './promise2.component.html',
  styleUrls: ['./promise2.component.css']
})
export class Promise2Component implements OnInit{



  ngOnInit(): void {
    const promise = new Promise((resolve, error)=>{
      let age = Math.round(Math.random()*500);
      setTimeout(()=>{
        if(age<=100){
          resolve('Promised completed. Num='+age);
        }else
        {
          error('Invalid age: '+age)
        }
      }, 2000);
    });


    promise.then(data=>{
      console.log('data=', data);
    }).catch(err=>{
      console.log('error: ', err);
    });
  }



}
