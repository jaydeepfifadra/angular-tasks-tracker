import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title : string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => this.showAddTask = value);
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url == route;
  }
}
