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
