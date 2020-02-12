import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  message = "消息"
  constructor(private route: ActivatedRoute, private location: Location,private http: HttpClient) { }
  imageUrl = "http://img3.imgtn.bdimg.com/it/u=1208538952,1443328523&fm=26&gp=0.jpg"
  isButtonDisabled = undefined
  name = "gaofei"
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  isSpecial = true
  currentHero = "Windstorm"


  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.data.title)

    console.log(this.location.path())
    // this.location.back();
    // 发送get请求
    this.http.get('/api/getMovies').subscribe(data => {
      console.log(data)
    },
    //请求错误
    err => {
      console.log('Something went wrong!');	
    });
  }

}
