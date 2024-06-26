import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  data: any = {
    "drivers": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@gmail.com",
        "phone": 12354698745,
        "city": "la",
        "address": "My address"
      },
      {
        "id": 2,
        "name": "Jack Idol",
        "email": "idol@gmail.com",
        "phone": 99999999999,
        "city": "bp",
        "address": "Rabbi str. 55."
      },
      {
        "id": 3,
        "name": "Charlie Filpo",
        "email": "cf@gmail.com",
        "phone": 99999999999,
        "city": "la",
        "address": "Ulica. 44."
      },
      {
        "name": "Ann",
        "email": "ann@xn--jasdfj-dva.com",
        "phone": "435345435435",
        "city": "bp",
        "address": "Kiss u. 10",
        "id": 7
      }
    ],
    "vehicles": [
      {
        "id": 1,
        "lp": "GOD-258",
        "year": 2015,
        "manufacturer": "VW",
        "consumption": 7,
        "engine": "diesel"
      },
      {
        "lp": "HHP-887",
        "year": "2002",
        "manufacturer": "Volvo",
        "consumption": "12",
        "engine": "gasoline",
        "id": 2
      }
    ],
    "fuelings": [
      {
        "id": 1,
        "vehicleId": "1",
        "driverId": "2",
        "amount": 40,
        "date": "2019-04-01"
      },
      {
        "vehicleId": "2",
        "driverId": "7",
        "amount": "100",
        "date": "2019-03-04",
        "id": 2
      },
      {
        "vehicleId": "2",
        "driverId": "1",
        "amount": "55",
        "date": "2019-03-13",
        "id": 3
      }
    ]
  }

  constructor() { }

  getAll(dataType: string): any[] {
    return this.data[dataType];
  }
}
