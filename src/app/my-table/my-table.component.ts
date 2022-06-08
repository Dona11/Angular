import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  birthDate: string;
  firstName: String;
  lastName: string;
  gender: String;
  hireDate: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 10001, birthDate: "1953-09-01", firstName: "Georgi", lastName: "Facello", gender: "M", hireDate: "1986-06-25"},
  {id: 10002, birthDate: "1964-06-01", firstName: "Bezalel", lastName: "Simmel", gender: "F", hireDate: "1985-11-20"},
  {id: 10003, birthDate: "1959-12-02", firstName: "Parto", lastName: "Bamford", gender: "M", hireDate: "1986-08-27"},
  {id: 10004, birthDate: "1954-04-30", firstName: "Chirstian", lastName: "Koblick", gender: "M", hireDate: "1986-11-30"},
  {id: 10005, birthDate: "1955-01-20", firstName: "Kyoichi", lastName: "Maliniak", gender: "M", hireDate: "1989-09-11"}
];

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
