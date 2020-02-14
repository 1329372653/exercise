import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';


const todos = [{
  id: 1,
  title: "吃饭",
  done: true
},
{
  id: 2,
  title: "睡觉",
  done: false
}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private router: Router) { }

  public visibility: string = 'all'

  ngOnInit() {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          const hash = window.location.hash.substr(1)
          switch (hash) {
            case '/':
              this.visibility = 'all'
              break;
            case '/active':
              this.visibility = 'active'
              break;
            case '/completed':
              this.visibility = 'completed'
              break;
          }
        }
      })
  }

  get filterTodos() {
    if (this.visibility === 'all') {
      return this.todos
    } else if (this.visibility === 'active') {
      return this.todos.filter(t => !t.done)
    } else if (this.visibility === 'completed') {
      return this.todos.filter(t => t.done)
    }
  }
  title = 'todomvc-angular';
  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = todos

  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null

  addTodo(e): void {
    var taskName = e.target.value;
    var lastTask = this.todos[this.todos.length - 1];
    var newTask = {
      id: lastTask ? lastTask.id : 0 + 1,
      title: taskName,
      done: false
    }
    this.todos.push(newTask)
    e.target.value = ""
  }


  get toggleAll() {
    return this.todos.every(t => t.done)
  }

  set toggleAll(val: boolean) {
    this.todos.forEach(t => t.done = val)
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1)
  }

  saveEdit(todo, e) {
    // 保存编辑
    todo.title = e.target.value
    // 去除编辑样式
    this.currentEditing = null
  }

  handleEditKeyUp(e) {
    const { keyCode, target } = e
    //esc键  还原最初的文字
    if (keyCode === 27) {
      // 取消编辑
      // 同时把文本框的值恢复为原来的值
      target.value = this.currentEditing.title
      this.currentEditing = null
    }
  }

  get remainCount() {
    return this.todos.filter(t => !t.done).length
  }

  clearAllDone() {
    this.todos = this.todos.filter(t => !t.done)
  }

  // callPhone(value){
  //   console.log(value)
  // }
}
