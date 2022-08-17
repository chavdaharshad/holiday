import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseAPIClass } from '../class';

@Injectable()
export class UserService extends BaseAPIClass {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = '/user';
  }
}
