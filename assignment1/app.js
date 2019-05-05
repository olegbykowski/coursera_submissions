(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.name = "";

  $scope.CheckIfTooMuch = function (name) {
    //remove whitespaces and empty fields (,,) before proceeding
    var lunchlist = $scope.name
    .replace(/ /g , "")
    .replace(/,,/g , ",");
    var lunchlist = lunchlist.split(",");
    var lunchlistLength = lunchlist.length;

    $scope.myMessage = function () {
      if ($scope.name == "") {
        $scope.chosenColor = "red";
        return "Please enter data first";
      }

      else if (lunchlistLength <= 3) {
        $scope.chosenColor = "green";
        return "Enjoy!";}

      else if (lunchlistLength > 3) {
        $scope.chosenColor = "green";
        return "Too much!";}
    };
    // function `myMessage` ends

  };
  // function `CheckIfTooMuch` ends
}

})();
