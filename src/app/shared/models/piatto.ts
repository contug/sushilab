export class Piatto{

  id!:number;
  numero!:number;
  variante!:string;
  nome!:string;
  prezzo!:number;
  allergeni!:string[];
  //settare il set di allergeni
  ingredienti!:string[];
  limite!:number;
  valutazioneMedia!:number;
  valutazioneUtente!:number;
  preferito!:boolean;
  popolare!:boolean;
  consigliato!:boolean;
  immagine!:string;
  alt!:string;

}
