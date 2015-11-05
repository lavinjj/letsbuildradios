/// <reference path="../../typings/tsd.d.ts" />
import { Http } from 'angular2/http';
import { Injectable } from 'angular2/angular2';

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


