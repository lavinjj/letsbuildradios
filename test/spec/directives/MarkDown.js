'use strict';

describe('Directive: MarkDown', function () {

  // load the directive's module
  beforeEach(module('letsbuildradios'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-mark-down></-mark-down>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the MarkDown directive');
  }));
});
