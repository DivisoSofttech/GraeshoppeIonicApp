import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private date: Date;
  private day: string;
  private month: string;
  private year: string;

  constructor() {
    this.date = new Date();
    this.day = String(this.date.getDate()).padStart(2, '0');
    this.month = String(this.date.getMonth() + 1).padStart(2, '0'); //January is 0!
    this.year = (String)(this.date.getFullYear());
  }

  public convertToInstantFromHourTime(timeToBeConverted: string) {

    console.log("time to be converted",timeToBeConverted);
/*     let today = this.year + '-' + this.month + '-' + this.day;
    console.log("time to be converted",timeToBeConverted);

    let timeHourPeriod = (timeToBeConverted.split(" "))[1];
    let time = (timeToBeConverted.split(" "))[0];
    let hour = (timeToBeConverted.split(":"))[0];
    let minute = ((timeToBeConverted.split(":"))[1]).split(" ")[0];
    console.log("today,time",today,time);
    return (timeHourPeriod == "AM") ? (today + 'T' + time + ':00Z') : (today + 'T' + hour + ':' + minute + ':00Z'); */
    //return ((timeToBeConverted.split("+"))[0])+'Z';
    return (timeToBeConverted.split("+")[1])?((timeToBeConverted.split("+"))[0])+'Z':timeToBeConverted;
  }

  deductTimeZone(timeToBeDeducted: string) {
    let extractedResult= (timeToBeDeducted.split("+"));
    let timeZone=extractedResult[1].split(":");
    let hour;
    let minute;
    
    let extractedTime=extractedResult[0].split("T")[1];
    if((minute=(+extractedTime[1]-(+timeZone[1])))<0){
      minute=-(minute);
      hour=+(extractedTime[0])-1;
    }
    hour=hour-(+timeZone[1]);


  }
}
