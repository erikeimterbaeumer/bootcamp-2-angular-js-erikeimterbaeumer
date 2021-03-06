angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function ($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function (code, name, latitude, longitude, address) {
      $scope.listings.push({
        code: code,
        name: name,
        coordinates: {
          latitude: latitude,
          longitude: longitude
        },
        address: address
      });
    };
    $scope.deleteListing = function ($index) {
      $scope.listings.splice($index, 1);
    };
    $scope.showDetails = function (index) {
      console.log($scope.listings[index]);
      
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);