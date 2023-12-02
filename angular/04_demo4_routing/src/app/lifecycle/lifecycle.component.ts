import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {
  @Input()  a:number = 0;

  constructor(){
    console.log('LifecycleComponent constructor called');
  }

  ngOnChanges(){
    console.log('LifecycleComponent ngOnChanges called...');
  }

  ngOnInit():void{
    console.log('LifecycleComponent ngOnInit called...');
  }

  ngOnDestroy():void{
    console.log('LifecycleComponent ngOnDestroy called...');
  }
}
