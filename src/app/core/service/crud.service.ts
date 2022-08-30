import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Authentication } from '../model/authentication.model';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL! : string;


  constructor(private httpClient:HttpClient) { 
   }

  


   addData(task : Task):Observable<Task> {
    console.log('task: ', task);
    const body=task;
   return this.httpClient.post<Task>('/holiday', body)
   }

   getData(task : Task):Observable<Task[]> {
    return this.httpClient.get<Task[]>('/holiday')
   }

   deleteData(task : Task):Observable<Task> {
    console.log("delete")
    return this.httpClient.delete<Task>(`/holiday/${task._id}`)
   }

   editData(task : Task):Observable<Task> {
    // console.log(task._id);
    return this.httpClient.put<Task>(`/holiday/${task._id}`,task)
   }
}
