import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = origin + "/api/"

  constructor(private http: HttpClient, private settingsService: SettingsService) { }

  getOnePkmById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'pokemon/' + id)
  }

  getOneRandomPkm(): Observable<any> {
    // We need to parse json with boolean has strings
    let params = {}
    const gens = { ...this.settingsService.getSettings().gens }
    for (const key in gens) params[key] = gens[key].toString()

    return this.http.get(this.baseUrl + 'pokemon/random', {
      params: new HttpParams({
        fromObject: params
      })
    })
  }

  getTenScore(): Observable<any> {
    return this.http.get(this.baseUrl + 'user/list');
  }

  postScore(data) {
      return this.http.post(this.baseUrl + 'user/insert', data);
  }

}
