/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, NgFor} from 'angular2/angular2';
import {Project, ProjectManager} from '../../models/projects/projects';

@Component({
  selector: 'project-list',
  templateUrl: './components/project-list/project-list.html',
  directives: [NgFor]
})
export class ProjectList {
  currentProjects:Project[];
  constructor(){
    var projects = new ProjectManager();
    this.currentProjects = projects.projects;
  }
}
