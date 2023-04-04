import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftResponse, Gif } from 'src/app/interfaces/SearchGiftResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'tA6baari8DZStMRBpVOsozaNMDsJLZFE';
  private servicioUrl = 'http://api.giphy.com/v1/stickers';
  private _historial: string[] = [];
  
  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient ){
    // if (localStorage.getItem('historial')){
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    this.resultados = JSON.parse( localStorage.getItem('resultado')! ) || [];
  }

  buscarGifts(query: string){

    query = query.trim().toLocaleLowerCase();
    
    if ( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
     

    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);

    this.http.get<SearchGiftResponse>(`${this.servicioUrl}/search`, { params })
    .subscribe( (resp)=> {
      this.resultados = resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultados));
    } )


  }

}
