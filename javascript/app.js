
var app = angular.module("test", []);
app.controller("mydate", function($scope, $http) {
  $scope.$watch('dateVal', function() {
    fetch();
  });

  function fetch() {
    $scope.dateVal = $scope.dateVal == null ? Math.round(new Date().getTime() / 1000) : $scope.dateVal;
    $http.get("https://timestamp-micro-service.herokuapp.com/" + $scope.dateVal).then(function(response) {
      $scope.dat = response.data;
    });
  }
});