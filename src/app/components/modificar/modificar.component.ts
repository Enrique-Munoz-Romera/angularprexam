import { Component, OnInit } from '@angular/core';
import { PlantillaService } from "./../../services/plantilla.service";
import { Plantilla } from "./../../models/plantilla";

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  public updatePlantilla = Plantilla;

  constructor(private _service:PlantillaService) { }

  ngOnInit(): void {
  }

}
