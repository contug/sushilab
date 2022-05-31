import { Injectable } from '@angular/core';
import {MenuHttpService} from "../http/menu-http.service";
import {ImmaginiHttpService} from "../http/immagini-http.service";

@Injectable({
  providedIn: 'root'
})
export class ImmaginiService {

  mapImmagini!:Map<number,Blob>;


  constructor(public menuService:MenuHttpService,
              public immaginiService:ImmaginiHttpService) {

  }

  getIdPiatti():number[] {
    let arrayPiatti: number[] = [];

    this.menuService.ottieniMenu().subscribe(res => {
      res.forEach(element => {

        element.piatti.forEach(piatto => {
          arrayPiatti.push(piatto.id)

        })

      })
    })
    return arrayPiatti
  }

  getImmagini(){
    let arrayPiatti=this.getIdPiatti()

    arrayPiatti.forEach( element =>{
      this.immaginiService.ottieniImmagine(element).subscribe(res=>{
        this.mapImmagini.set(element,res)
      })
    })
  }

  getImmagine(id:number): Blob{
    return this.mapImmagini.get(id)!
  }

  creaUrl(blob:Blob):string{
    if (blob==null) {
      return "";
    }
    else {
      let url = URL.createObjectURL(blob)
      return url
    }
  }
}
