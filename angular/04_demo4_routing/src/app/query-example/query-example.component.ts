import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-example',
  templateUrl: './query-example.component.html',
  styleUrls: ['./query-example.component.css']
})
export class QueryExampleComponent {

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {

    // console.log(this.route.queryParams);
    this.route.queryParams.subscribe(params => console.log(params));
  }

}
