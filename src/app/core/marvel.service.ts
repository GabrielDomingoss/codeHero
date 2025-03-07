import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private baseUrl = "http(s)://gateway.marvel.com/";
  private publicKey = "6725fcfbb3f1a500bce9a87ebac4e197";
  private privateKey = "e8976609c206f3e08a4fd535f17c3b536aa1d2fa";
  private timeStamp = new Date().getTime();
  private hash = Md5.hashStr(this.timeStamp + this.privateKey + this.publicKey);

  constructor(private http: HttpClient) { }

  getCharacters(offset = 0) {
    return this.http.get(`${this.baseUrl}characters`, {
      params: {
        ts: this.timeStamp.toString(),
        apiKey: this.publicKey,
        hash: this.hash,
        limit: '10',
        offset: offset.toString()
      }
    });
  }
}
