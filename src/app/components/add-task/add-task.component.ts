import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
@Output() onAddTask: EventEmitter<Task> = new EventEmitter();

text: string;
day: string;
reminder: boolean = false;
showAddTask: boolean = false;
subscription: Subscription;

  constructor(private uiService: UiService) {
    
  }

  ngOnInit() {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => this.showAddTask = value);
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }

onSubmit() {
  if(!this.text) {
    this.uiService.toggleAddTask();
    //alert('Please add a task!');
    return;
  }

  const newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder
  }

  this.onAddTask.emit(newTask);

  this.text = '';
  this.day = '';
  this.reminder = false;

}

}
