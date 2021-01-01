//creating an application called myShoppingList
var app = angular.module('myShoppingList', []);
//added a controlled named myCtrl to the app
app.controller("myCtrl", function($scope) {
    // created an array of products
    $scope.products = [ "Milk" , "Bread", "Cheese"];
    // function that adds the new item from the input field 
    // to the array of the products array
    $scope.addItem = function() {
        $scope.errorText = "";
        if (!$scope.newItem) { return;}
        if ($scope.products.indexOf($scope.newItem) == -1) {
            $scope.products.push($scope.newItem);
        } else {
            $scope.errorText = "The item is already in your shopping list";
        }
    }
    //removes an item from the products array using the index parameter
    $scope.removeItem = function(index) {
        $scope.products.splice(index, 1)
    }
});
