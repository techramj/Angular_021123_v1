# Assignment 1
    Create 3 components  CompA CompB and CompC.  
    call it with three different type of selector
        a. Element
        b. attribute
        c. class

# Assignment 2
        create two component Person & People

        In people component, declare three person.
        person1, person2, person3 with 3 different value
        eg: 
        person1 = {name:'Jack', age:'22', hairColor:'black'};

        call the people component in app-component
        and call person in people component.

        people.component.html
            <app-person></app-person> //display the details of person1
            <app-person></app-person> //display the details of person2
            <app-person></app-person> //display the details of person3

            Note: display the person details in bootstrap-panel.



        step 1:
        ng g c person

        person.component.html
          Name: {{name}}
          age: {{age}}
          Hair color: {{hairColor}}

        person.compoenent.ts
            name = 'Jack123';
            age ='23';
            hiarColor = 'black';


        app.componenet.htm
          <app-person></app-person>

        


# Assignement 3
   people
      array of person
      display the details of all the person

    Add two button in people component
    button1=> Add Person
    button2 => Remove Person


# Assignement 4
  modify assignemnet 3
  add three input field:
  name
  age
  hairColor

  user can enter the value to three fields. On click of add button, it should be added in the array


7:30
  half an hour  

8:00

Two way binding
add import { FormsModule } from '@angular/forms' in app.modules.
refer: people1.cpmponent.ts
app.modules.ts



# ngIf , ngTemplate
      <div *ngIf="show; else templateName">
        <h4>My Favourite color</h4>
        <ul>
          <li *ngFor="let c of colors"  [ngStyle]="{'color':c}">{{c}}</li>
        </ul>
      </div>
      <div *ngIf="!show">
        <font color="red" [size]="10">Don't Display Color List</font>
      </div>

# ngFor

# ngSwitch ngSwitchCase  ngSwitchDefault

# ngStyle

# ngClass




# assignment 5
  create three component
    button-count-page
      <app-button-message>
      <app-button>

    button-count 
        button clicked
    button-message
        Congratulation!, You received Platinum batch.



    Congratulation!, You received Silver batch.
    button 
    Button clicked  5 times


    Congratulation!, You received Golden batch.
    button 
    Button clicked  10 times


    Congratulation!, You received Platinum batch.
    button 
    Button clicked  20 times