import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable4',
  templateUrl: './observable4.component.html',
  styleUrls: ['./observable4.component.css']
})
export class Observable4Component implements OnInit{

  ngOnInit(): void {
    let observable = new Observable<string>(subscribe =>{
      subscribe.next('one');
      subscribe.next('tw0');
      subscribe.next('twenty one');
      subscribe.next('one thousand');
      subscribe.next('one lakh');
      subscribe.next('five');
    });

    /*observable.subscribe(data=>{
      console.log(data);
    });*/

    observable
    .pipe<string>(filter((data)=> data.includes('one')))
    .pipe<string>(map(data => data+"."))
    .subscribe(data=>{
      console.log(data);
    })
  }
}
