import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, AddTaskComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
