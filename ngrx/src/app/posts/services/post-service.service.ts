import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postInterface, postStateInterface } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  getPostList():Observable<postInterface[]>{
    return this.http.get<postInterface[]>('https://jsonplaceholder.typicode.com/posts');
  }
  postDetails(id:number):Observable<postInterface>{
    return this.http.get<postInterface>('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
