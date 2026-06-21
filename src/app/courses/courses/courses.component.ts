import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Course } from '../model/courses';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-courses',
  imports: [
    MatTableModule, MatCardModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.scss',
})
export class CoursesComponent {
  courses : Course[] = [{ _id: '1', name: 'Angular', category: 'Frontend' }];
  displayedColumns = ['name', 'category'];
}
