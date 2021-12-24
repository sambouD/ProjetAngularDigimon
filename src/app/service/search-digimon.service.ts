import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DIGIMONS } from '../bdd/digimons-list';
import { Digimon } from '../models/digimon';

@Injectable({
  providedIn: 'root'
})
export class SearchDigimonService {

  digimons = DIGIMONS
  digimon:Digimon = new Digimon();
  private digimonsUrlApi = 'api/digimons'
  constructor(private http:HttpClient) {  }

    getDigimons():Observable<Digimon[]>{
      return this.http.get<Digimon[]>(this.digimonsUrlApi);
    }

    getDigimon(id:number){

      const url = `${this.digimonsUrlApi}/${id}`;
      return this.http.get<Digimon>(url);
    }

    // SUPPRESSION
    deleteDigimon(digimon:Digimon){
      const url = `${this.digimonsUrlApi}/${digimon.id}`;
      const optionHttp = {
        headers: new HttpHeaders({'content-Type' : 'application/json'})
      }
      return this.http.delete<Digimon>(url,optionHttp);
    }

    // MODIFICATION
    updateDigimon(digimon:Digimon):Observable<Digimon>{

      const optionHttp = {
        headers: new HttpHeaders({'content-Type' : 'application/json'})
      }
      return this.http.put<Digimon>(this.digimonsUrlApi, digimon, optionHttp);
    }

  // AJOUter
  addDigimon(digimon:Digimon){
    const optionHttp = {
      headers: new HttpHeaders({'content-Type' : 'application/json'})
    }
    return this.http.post<Digimon>(this.digimonsUrlApi, digimon, optionHttp);
  }
}
