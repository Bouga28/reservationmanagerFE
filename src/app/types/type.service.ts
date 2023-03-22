import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from './type';
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  public isLoading: boolean = false;
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Type[]>('http://127.0.0.1:8000/api/type');
  }
  create(payload: Type) {
    return this.http.post<Type>('http://127.0.0.1:8000/api/type', payload);
  }

  update(payload:Type){
    return this.http.put(`http://127.0.0.1:8000/api/type/${payload.id}`,payload);
   }

   getById(id: number) {
    return this.http.get<Type>(`http://127.0.0.1:8000/api/type/${id}`);
   }

   delete(id:number){
    return this.http.delete<Type>(`http://127.0.0.1:8000/api/type/${id}`);
 }
}
