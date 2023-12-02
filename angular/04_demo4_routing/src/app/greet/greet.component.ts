import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  name:String = '';

  constructor(private route:ActivatedRoute, private router:Router){
  }

  ngOnInit(): void{
    console.log('GreetComponent loaded');
    //this.name = this.route.snapshot.paramMap.get('nickname') ||'' ;
    this.name = this.route.snapshot.paramMap.get('nickname');
    if(this.name === 'bye'){
       this.router.navigateByUrl("/farewell");
    }
  }









}
