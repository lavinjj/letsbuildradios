/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {ProjectList} from './components/project-list/project-list';

@Component({
  selector: 'app'
})
@View({
  template: '<project-list>Loading...</project-list>',
  directives: [ProjectList]
})
class AppComponent {
  constructor(){
  }
}

bootstrap(AppComponent);
