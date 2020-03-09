import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import Todo from './TodoList/todo.component';
import TodoList from './TodoList/todo-list.component';
import TodoInput from './TodoInput/todo-input.component';
import FilterToggle from './FilterToggle/filter-toggle.component';

import { state } from './shared'

@NgModule({
    declarations: [
        AppComponent,
        Todo,
        TodoList,
        TodoInput,
        FilterToggle
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [{
        provide:state,
        useValue:{
            todos:[{
                text:'Create API',
                done: true
            },{
                text:'Secure API',
                done: false
            },{
              text:'Make Auth to API',
              done: false
            }]
        }
    }],
    bootstrap: [AppComponent]
})
export class AppModule {}