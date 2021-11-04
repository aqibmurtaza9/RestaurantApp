import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';


@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  
  constructor(private resto:RestoService) { }
  collection:any=[];

  ngOnInit(): void {
    this.resto.getList().subscribe((result)=> {
      Object.entries(result);
      console.warn(result);
          
    this.collection=result;
   
    })

  }
  



}
