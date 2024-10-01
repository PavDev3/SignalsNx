import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SingleUserResponse, User } from '../models/userService.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceApi {
  readonly baseUrl = 'https://reqres.in/api/users';
  readonly http = inject(HttpClient);

  getUsersById(id: number): Observable<User> {
    return this.http
      .get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => response.data));
  }
}
