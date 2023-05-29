import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ServiceService {
 
  localData: any[] | undefined;
private storageKey = 'myData'
 Users: any
url = ('https://fakestoreapi.com/products ')
  constructor(private http:HttpClient) { }
apiData():Observable<any> {
  return this.http.get<any>('https://fakestoreapi.com/products ')
}
getData(): any[] {
  const data = localStorage.getItem(this.storageKey);
  return data ? JSON.parse(data) : [];
}

saveData(data: any[]): void {
  localStorage.setItem(this.storageKey, JSON.stringify(data));
}


}

