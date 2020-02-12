import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.less']
})
export class FooComponent implements OnInit {

  message = "哈哈哈哈"

  onSave = () => {
    console.log("保存")
  }
  onSave2 = (event) => {
    console.log(event.target)
  }
  onSave3 = (event, msg) => {
    console.log(event.target)
    console.log(msg)
  }

  gender = 1;
  hobby = 0
  big = { "big": true }

  currentTime = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
