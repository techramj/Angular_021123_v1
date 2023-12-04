import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {


  ngOnInit(): void {
    console.log('Observable1Component component init called');
    //asyncExample();
    //syncExample();

    //declare the observable
    const obs1 = new Observable((sub)=>{
      console.log("Inside Observable!!!");
      setTimeout(()=>{
        sub.next('subscribe one');
        sub.next('subscribe two');
      }, 3000);
    });


    //calling observable
    obs1.subscribe(data=>{
      console.log(data);
    });

  }

  asyncExample(){
    this.one();
    this.two();
    this.three();
  }

  syncExample(){
    this.one();
    this.foo();
    this.three();
  }

  one(){
    console.log('one');
  }

  two(){
    setTimeout(()=>{
      console.log('two');
    },3000);
  }

  foo(){
    alert('two');
  }

  three(){
    console.log('three');
  }



}
