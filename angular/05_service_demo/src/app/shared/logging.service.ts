import { Injectable } from '@angular/core';

export class LoggingService {

  logs:{msg:string, time:Date}[] = [];

  constructor() { }


  log(logData:any){
    console.log(logData.msg+" at "+logData.time);
    this.logs.push(logData);
  }

  getLogs(){
    return this.logs;
  }
}
