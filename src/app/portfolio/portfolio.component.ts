import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router'
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ ProjectService ]
})
export class PortfolioComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private ProjectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.ProjectService.getProjects();
  }

  goToProjectDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key])
  }

}
