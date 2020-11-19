import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";
import { Plantilla } from "./../models/plantilla";

@Injectable()

export class PlantillaService{

    private url:string;    

    constructor(private _http:HttpClient){
        this.url=Global.urlPlantilla;
    }

    getPlantilla():Observable<any>{
        var request = "api/Plantilla";
        return this._http.get(this.url + request);
    }

    getDetails(idEmpleado:string):Observable<any>{
        var request = "api/Plantilla/" + idEmpleado ;
        return this._http.get(this.url + request);
    }

    updatePlantilla(idEmpleado:string,funcion:string):Observable<any>{
        var request = "api/Plantilla/" + funcion;
        return this._http.get(this.url + request);
    }
}