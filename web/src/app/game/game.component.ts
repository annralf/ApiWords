import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup } from '@angular/forms';  
import { HttpClient, HttpParameterCodec, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private http: HttpClient) { }
    letters = new FormControl('',[Validators.required]);
    limit = new FormControl('',[Validators.required]);
    lang = new FormControl('',[Validators.required]);
    url = "http://172.17.0.1:8002/api";
    headers = new HttpHeaders({"Access-Control-Allow-Origin":"*", "Access-Control-Allow-Credentials": "true","withCredentials":"true"});
    words= [];
  ngOnInit(): void {
  }

  getWords(){    
   console.log(this.url+"?letters="+this.letters.value+"&limit="+this.limit.value+"&lang="+this.lang.value);
    return this.http.get(this.url+"?letters="+this.letters.value+"&limit="+this.limit.value+"&lang="+this.lang.value, {headers: this.headers });
  }

  search(){
    this.getWords().subscribe( (data: any[])  => {
      for (let index = 0; index < data.length; index++) {
        this.words.push(data[index]);
      }
  });
}
}
