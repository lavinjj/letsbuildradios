/// <reference path="../../typings/angular2/angular2.d.ts" />
var Project = (function () {
    function Project(theTitle, theUrl, theDescription, theImage) {
        this.title = theTitle;
        this.url = theUrl;
        this.description = theDescription;
        this.image = theImage;
    }
    return Project;
})();
exports.Project = Project;
var ProjectManager = (function () {
    function ProjectManager() {
        this.projects = [];
        this.projects.push(new Project("The Let's Build Something Radio", "posts/LBS/intro.md", "Step-by-step guide to building the Let's Build Something SSB Transceiver", "img/icons/avatar-analog.png"));
        this.projects.push(new Project("The Minima SSB Transceiver", "posts/Minima/intro.md", "Step-by-step guide to building the Minima SSB Transceiver", "img/icons/avatar-analog.png"));
        this.projects.push(new Project("The SW40+ CW Transceiver", "posts/LBS/intro.md", "Step-by-step guide to building the Small Wonders CW Transceiver", "img/icons/avatar-analog.png"));
    }
    ProjectManager.prototype.addProject = function (project) {
        this.projects.push(project);
    };
    return ProjectManager;
})();
exports.ProjectManager = ProjectManager;
//# sourceMappingURL=projects.js.map