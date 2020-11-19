import { Component, OnInit } from '@angular/core';
import { PlantillaService } from "./../../services/plantilla.service";
import { Plantilla } from "./../../models/plantilla";
import {ActivatedRoute,Params,Router } from "@angular/router";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  public detalle:Plantilla;

  constructor(private _service:PlantillaService,
    private _activatedRoute:ActivatedRoute,
    private _route:Router) {
    this.detalle = Plantilla.prototype;
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:Params) => {
      if(params.idEmpleado != null){
        this.getDetails(params.idEmpleado);
      }else{
        alert("Not Found Params");
      }
    })
  }

  getDetails(idEmpleado){
    this._service.getDetails(idEmpleado).subscribe(response => {
        this.detalle = response;
        console.log(response);
    });
  }
}
