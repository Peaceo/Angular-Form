
    var app = angular.module("app",[]);
        app.controller("myCtrl", function($scope,$http){
        $scope.submitForm = function() {
            var data = {
                    firstName : $scope.firstName,
                    state : $scope.state,
                    address : $scope.address,
                    gender : $scope.gender,
                    dob : $scope.dob
                }
            $http.post('http://localhost:8080', data)
                .success(function (data, status, headers, config) {
                    $scope.PostDataResponse = data;
                })
                .error(function(data, status, header, config){
                    $scope.PostDataResponse = "Data: " + status;
                });
    };  

});