import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = 'http://localhost:3000/api/'

  constructor(private http: HttpClient, private settingsService: SettingsService) { }

  getOnePkmById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'pokemon/' + id)
  }

  getOneRandomPkm(): Observable<any> {
    //We need to parse json with boolean has strings
    let params = {}
    const gens = { ...this.settingsService.getSettings().gens }
    for (const key in gens) params[key] = gens[key].toString()

    return this.http.get(this.baseUrl + 'pokemon/random', {
      params: new HttpParams({
        fromObject: params
      })
    })
  }
}
