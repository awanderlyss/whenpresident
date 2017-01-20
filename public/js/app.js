(function(){

  angular
    .module("whenPresident", [
      "ui.router",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      Router
    ])
    .factory("Candidate", [
      "$resource",
      CandidateFunction
    ])
    .controller("indexCtrl", [
      "Candidate",
      indexCtrlFunction
    ])
    .controller("showCrtl", [
      "$stateParams",
      "Candidate",
      showCrtlFunction
    ]);

    function Router($stateProvider){
      $stateProvider
        .state("welcome", {
          url: "/",
          templateUrl: "/assets/js/ng-views/welcome.html"
        })
        .state("index", {
          url: "/candidates",
          templateUrl: "/assets/js/ng-views/index.html",
          controller: "indexCtrl",
          controllerAs: "vm"
        })
        .state("show", {
          url: "/candidates/:name",
          templateUrl: "/assets/js/ng-views/show.html",
          controller: "showCrtl",
          controllerAs: "vm"
        });
    }

    function CandidateFunction($resource) {
      return $resource("/api/candidates/:name", {}, {
        update:{
          method: "PUT"
        }
      });
    }

    function indexCtrlFunction(Candidate){
      this.candidates = Candidate.query();
    }

    function showCrtlFunction($stateParams, Candidate){
      this.candidate = Candidate.get({name: $stateParams.name});
    }

})();
