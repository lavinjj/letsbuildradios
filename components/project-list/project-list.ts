/// <reference path="../../typings/tsd.d.ts" />

import {Component, NgFor} from 'angular2/angular2';
import {Project} from '../../models/projects/projects';
import {ProjectManager} from '../../services/projectmanager/projectmanager';

@Component({
  selector: 'project-list',
  templateUrl: 'components/project-list/project-list.html',
  directives: [NgFor],
  providers: [ProjectManager],
})
export class ProjectList {
  private currentProjects: Project[];

  constructor(private projects: ProjectManager){
    this.currentProjects = projects.projects;
  }
}
