import {Allergene} from "./allergene";
import {Ingrediente} from "./ingrediente";

export class Piatto{

  id!:number;
  numero!:number;
  variante!:string;
  nome!:string;
  prezzo!:number;
  allergeni!:Allergene[];
  //settare il set di allergeni
  ingredienti!:Ingrediente[];
  limite!:number;
  valutazioneMedia!:number;
  valutazioneUtente!:number;
  preferito!:boolean;
  popolare!:boolean;
  consigliato!:boolean;
  immagine!:Blob;
  alt!:string;


}
