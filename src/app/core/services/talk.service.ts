import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Talk } from '../models/talk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  private talksUrl = 'api/data';

  constructor(private http: HttpClient) { }

}
