# install node js.
    https://nodejs.org/en/blog/release/v16.13.2

    test: node -v
        npm -v
        npx -v
# install  angular
    npm install -g @angular/cli@15
    ng version

            D:\ws\training\seed\js>ng version

             _                      _                 ____ _     ___
            / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
           / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
          / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
         /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                        |___/
            

        Angular CLI: 15.2.10
        Node: 16.13.2
        Package Manager: npm 8.1.2
        OS: win32 x64

        Angular:
        ...

        Package                      Version
        ------------------------------------------------------
        @angular-devkit/architect    0.1502.10 (cli-only)
        @angular-devkit/core         15.2.10 (cli-only)
        @angular-devkit/schematics   15.2.10 (cli-only)
        @schematics/angular          15.2.10 (cli-only)

# create  a angular project
    ng new <project-name>
    eg: ng new 01_demo01

# start the project
   cd 01_demo01
   ng serve
   or
   npm start

# component
    ng generate component <component-name>
    ng g c <component-name>
    ng g c <component-name> --skip-tests
    Note: you should be inside the project directory

    >ng g c greet
    CREATE src/app/greet/greet.component.html (20 bytes)
    CREATE src/app/greet/greet.component.spec.ts (592 bytes) --optional
    CREATE src/app/greet/greet.component.ts (198 bytes)
    CREATE src/app/greet/greet.component.css (0 bytes)
    UPDATE src/app/app.module.ts (471 bytes)


# step to add bootstrap
    run the 
    npm install --save bootstrap[@version]
    eg: npm install --save bootstrap@3
    Note: you should be inside the project directory

    add the path of css in the angular.json file in styles properties
    "node_modules/bootstrap/dist/css/bootstrap.min.css",

    after adding it will look like as below:
    "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],

    
    restart the server.(ctrl + c)

# Selector in componenet
## Type of selector
    1. Element :   <app-person></app-person>
    2. attribute : <div app-person></div> 
    3. class :  <div class="app-person"></div>

        @Component({
        selector: 'app-person',
        templateUrl: './person.component.html',
        styleUrls: ['./person.component.css']
        })

        how to call:
        <app-person></app-person>




Binding:
    Html                                TS
    {{name}}                          name:'Jack'
     
           <--------------------------
                {{string interpolation}}
                [attribute-binding]

     
            -------------------------->
                (eventBinding)="foo()"


            <------------------------->
                  [(ngModel)]=""

  

   communication between two component
   app-component
        <app-person name="Jack of app compenent" age="25">


        person-component
        name = "jackof app component"
        age
        hairColor



Directive:
    In Angular, Directives are defined as classes that can add new behavior to the elements in the template or modify existing behavior. 
    The purpose of Directives in Angular is to maneuver the DOM, 
    be it by adding new elements to DOM or removing elements 
    and even changing the appearance of the DOM elements.

    Type of Directive:
    Structural:
      ng-if
      ng-for




# service

   @Component({
        selector: 'app-comp1',
        templateUrl: './comp1.component.html',   --view
        styleUrls: ['./comp1.component.css']
        })

    data to be rendered => ts

    logic => ts


    @Component({
        selector: 'app-comp2',
        templateUrl: './comp2.component.html',   --view
        styleUrls: ['./comp2.component.css']
        })

      to share the data/logic between two componenet 
      @Input() / @Output()

      to get rid of this, we can use service
      Service is a class used to seperate the logic from the view.
      if you want to share the data, then we can use service.

      eg: logging,validation & interacting with APIs, exposing data.


      how to write the service
      ng g s service-name
      shared
        logging.service.ts

     three ways to use the service

      @Injectable -default
      @NgModule  --lazy binding
      @Component --



            
        @Injectable - root
        ServiceA

                App.comp 
                
            servers.comp     Account.comp

            server.comp


         @NgModule(

            providers:[ServiceA]
         ){
            
         }


         @Component(
            selector: 'app-servres'
             providers:[ServiceA]
         )

          @Component(
            selector: 'app-account'
             providers:[ServiceA]
         )

          @Component(
            selector: 'dashboard'
             providers:[ServiceA]
         )



# Observable vs Promise 

## observable
        1. Open stream
        2. return multiple value
        3. can be cancelled
        4. are lazy


## promise
        1. open and close
        2. return single value
        3. cannot be cancelled
        4. are not lazy or eager loading

## Observable 
        1. to subscribe use subscribe() method
        2. subscribe has three function:  next, error, completed
          
        observable.subscribed((data)=>{
            //
        });


# create server expose rest api
    step 1: create the folder.
    eg ems
    cd ems
    ems>

    step 2: execute the below command
    npm init -y

    step 3: create the json file
    eg: employees.json

    step 4: add few dummy data in employees.json file
    eg:

        {
            "employees":[
                {"id":1, "name":"Sam", "salary":1000, "email":"sam@test.com"},
                {"id":2, "name":"Jack", "salary":2000, "email":"Jack@test.com"},
                {"id":3, "name":"Ajay", "salary":3000, "email":"Ajay@test.com"},
                {"id":4, "name":"Vijay", "salary":4000, "email":"Vijay@test.com"},
                {"id":5, "name":"Jessica", "salary":5000, "email":"Jessica@test.com"}
            ]
        }
    
    step 5: execute the below command
        npm install -g json-server

    step 6: add below in package.json file in scrips property.
    "start" : "npx json-server --watch employees.json"

    step 7: start the server
    npm start

    step 8: test the api
    get
    expose all the employees
     url: http://localhost:3000/employees
     method: get

    detail of employee for a given id
     url: http://localhost:3000/employees/:id
     method: get

    add the employees
    url: http://localhost:3000/employees
    method: post
    body: 
    {
        "name": "Sameer",
        "salary": 14000,
        "email": "sameer@test.com"
    }

    update the employee with id = ?
    url: http://localhost:3000/employees/:id
    method: put
    {
        "id": 4,
        "name": "Vijay",
        "salary": 9999,
        "email": "Vijay@gmail.com"
    }

    delete
    url: http://localhost:3000/employees/:id
    method: delete


# unit testing

    why?
    Performing unit testing prevent the breaking of changes when we update or add features
    TDD can help us to do write robust program.


    Tools:
    Jasmine and Karma are used to run the unit test in angular.


    Jasmine is a BDD(Behaviour Driven Development) tesing framework.
            Describe the test in a human readoble way.

    To Test run the below  command
    ng test
    