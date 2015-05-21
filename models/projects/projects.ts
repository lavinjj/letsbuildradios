/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Injectable} from 'angular2/angular2';

export class Project{
  public title: String;
  public url: String;
  public description: String;
  public image: String;
  constructor(theTitle: String, theUrl: String, theDescription: String, theImage: String){
    this.title = theTitle;
    this.url = theUrl;
    this.description = theDescription;
    this.image = theImage;
  }
}

export class ProjectManager{
  public projects:Array<Project> = [];
  constructor(){
    this.projects.push(new Project("The Let's Build Something Radio", "posts/LBS/intro.md", "Step-by-step guide to building the Let's Build Something SSB Transceiver", "img/icons/ssb.png"));
    this.projects.push(new Project("The Minima SSB Transceiver", "posts/Minima/intro.md", "Step-by-step guide to building the Minima SSB Transceiver", "img/icons/ssb.png"));
    this.projects.push(new Project("The SW40+ CW Transceiver", "posts/LBS/intro.md", "Step-by-step guide to building the Small Wonders CW Transceiver", "img/icons/cw.png"));
  }

  addProject(project:Project){
    this.projects.push(project);
  }
}
