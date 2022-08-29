import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationGuard } from '../authentication';
import { Authentication } from '../model/authentication.model';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL! : string;

  private _content!: Authentication.Credentials | null;


  constructor(private httpClient:HttpClient) { 
   }

    /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): Authentication.Credentials | null {
    return this._content;
  }

  /**
   * Get the auth token.
   * @return {string} The auth token is null if user is not authenticated.
   */
  get accessToken(): string | null {
    return this.credentials ? this.credentials.accessToken : null;
  }



   addData(task : Task):Observable<Task> {
    const headers = { 'content-Type': 'application/json','authorization': task.accessToken}  
    const body=JSON.stringify(task);
    console.log(headers)
    return this.httpClient.post<Task>('/holiday', body,{'headers':headers,})
   }

   getData(task : Task):Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.serviceURL)
   }

  //  deleteData(task : Task):Observable<Task> {
  //   return this.httpClient.delete<Task>(this.serviceURL+'/'+task.id)
  //  }

  //  editData(task : Task):Observable<Task> {
  //   return this.httpClient.put<Task>(this.serviceURL+'/'+task.id,task)
  //  }
}
