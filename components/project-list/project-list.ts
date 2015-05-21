/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, For} from 'angular2/angular2';
import {Project, ProjectManager} from 'models/projects/projects';

@Component({
  selector: 'project-list'
})
@View({
  templateUrl: 'components/project-list/project-list.html',
  directives:[For]
})
export class ProjectList {
  currentProjects:Project[];
  constructor(){
    var projects = new ProjectManager();
    this.currentProjects = projects.projects;
  }
}
