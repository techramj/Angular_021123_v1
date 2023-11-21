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

        
