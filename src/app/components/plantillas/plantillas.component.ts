import { Component, OnInit } from '@angular/core';
import { PlantillaService } from "./../../services/plantilla.service";
import { Plantilla } from "./../../models/plantilla";

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {

  public plantillas:Array<Plantilla>;

  constructor(private _service:PlantillaService) { 
    this.plantillas = [];
  }

  ngOnInit(): void {
    this.getPlantilla();
  }

  getPlantilla(){
    this._service.getPlantilla().subscribe(response => {
      this.plantillas = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
 
}
