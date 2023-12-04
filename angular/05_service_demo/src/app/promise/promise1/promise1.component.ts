import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise1',
  templateUrl: './promise1.component.html',
  styleUrls: ['./promise1.component.css']
})
export class Promise1Component implements OnInit {


  ngOnInit(): void {
    //declare
    console.log('Promise1Component ngOnInit called');
    const promise = new Promise(resolve=>{
      console.log('Inside promise');
      setTimeout(()=>{
        resolve('first Promise resolved');
        resolve('second Promise resolved');
      }, 3000);
    });


    //calling promise
    promise.then(res=>{
      console.log(res);
    });



  }
}
