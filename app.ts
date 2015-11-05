/// <reference path="typings/tsd.d.ts" />

import {Component, bootstrap} from 'angular2/angular2';
import {ProjectList} from './components/project-list/project-list';

@Component({
  selector: 'app',
  template: '<project-list>Loading...</project-list>',
  directives: [ProjectList]
})
class AppComponent {
  constructor(){
  }
}

bootstrap(AppComponent);
