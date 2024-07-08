import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComputadora } from '../interface/Computadoras';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ComputadorasService {
  private _endpoint: string = environment.endPoint;
  private apiUrl: string = this._endpoint + "Computadoras/";

  constructor(private _http: HttpClient) { }

  // Método para invocar al endpoint de ListaComputadoras
  getList(): Observable<IComputadora[]> {
    return this._http.get<IComputadora[]>(`${this.apiUrl}ListaComputadoras`);
  }

  // Método para invocar al endpoint de BuscarComputadora
  search(query: string): Observable<IComputadora[]> {
    return this._http.get<IComputadora[]>(`${this.apiUrl}BuscarComputadora`, {
      params: { query }
    });
  }

  // Método para invocar al endpoint de FiltrarPorCategoria
  filterByCategory(categoria: number): Observable<IComputadora[]> {
    return this._http.get<IComputadora[]>(`${this.apiUrl}FiltrarPorCategoria/${categoria}`);
  }
}