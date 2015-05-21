/// <reference path="../../typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var projects_1 = require('models/projects/projects');
var ProjectList = (function () {
    function ProjectList() {
        var projects = new projects_1.ProjectManager();
        this.currentProjects = projects.projects;
    }
    ProjectList = __decorate([
        angular2_1.Component({
            selector: 'project-list'
        }),
        angular2_1.View({
            templateUrl: 'components/project-list/project-list.html',
            directives: [angular2_1.For]
        })
    ], ProjectList);
    return ProjectList;
})();
exports.ProjectList = ProjectList;
//# sourceMappingURL=project-list.js.map