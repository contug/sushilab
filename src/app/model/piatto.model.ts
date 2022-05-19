export class Piatto{

  id!:number;
  numero!:number;
  variante:string="-";
  nome!:string;
  prezzo!:number;
  allergeni!:string[];
  //settare il set di allergeni
  ingredienti!:string[];
  limite:number=0;
  valutazioneMedia!:number;
  valutazioneUtente!:number;
  preferito!:boolean;
  ultimoOrdine!:string;
  popolare!:boolean;
  consigliato!:boolean;
  immagine!:string;
  alt!:string;

}
