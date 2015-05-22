/// <reference path="../../typings/angular2/angular2.d.ts" />

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
    this.projects.push(new Project("The Let's Build Something Radio", "posts/LBS/intro.md", "Step-by-step guide to building the Let's Build Something SSB Transceiver", "img/icons/lbs.png"));
    this.projects.push(new Project("The Minima SSB Transceiver", "posts/Minima/intro.md", "Step-by-step guide to building the Minima SSB Transceiver", "img/icons/minima.png"));
    this.projects.push(new Project("The Sproutie Regen Receiver", "posts/Sproutie/intro.md", "Step-by-step guide to building the Sproutie Regen Receiver", "img/icons/sproutie.png"));
  }

  addProject(project:Project){
    this.projects.push(project);
  }
}
