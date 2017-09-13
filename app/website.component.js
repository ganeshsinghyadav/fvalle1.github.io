angular.module("website")
.component("mydev",{
  controller: function($scope){
    var ctrl = this;

    ctrl.interval=2500;
  },
  templateUrl: "app/website.template.html"
})
