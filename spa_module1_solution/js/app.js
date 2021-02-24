(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', setup);

    setup.$inject = ['$scope'];

    function setup($scope) {
        $scope.items = "";
        $scope.checkItems = function () {
            var numOfItems = 0;
            if ($scope.items !== "") {
                var numOfItems = $scope.items.split(',').filter(word => word !== "").length;
            }
            if (numOfItems > 0 && numOfItems < 4) {
                $scope.message = "Enjoy!";
                $scope.messageStyle = "color:green;border:solid green 2px;"
            } else if (numOfItems >= 4) {
                $scope.message = "Too much!";
            } else {
                $scope.message = "Please enter data first";
                $scope.messageStyle = "color:red;border:solid red 2px;"
            }
        };
    };

})();