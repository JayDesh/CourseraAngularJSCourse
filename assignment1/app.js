
( function () {
  'use strict';

  angular.module( 'LunchApp', [])
  .controller( 'LunchController', LunchController );

  LunchController.$inject = ['$scope'];
  function LunchController ( $scope ) {
    $scope.computeLunchMessage = function() {
      var lunchItemsArray  = createLunchItemArray ( $scope.lunchList ),
          lunchItemsArrayLength = computeArrayLength ( lunchItemsArray );

      switch ( true ) {
        case ( lunchItemsArrayLength === 0):
          $scope.lunchMessage = 'Please enter data first';
          break;
        case ( lunchItemsArrayLength < 4 ):
          $scope.lunchMessage ='Enjoy!';
          break;
        default:
          $scope.lunchMessage = 'Too Much';
      }
    }
  }

  function createLunchItemArray ( str ) {
    if( typeof str  === 'undefined' ){
      return [];
    }
    return str.split(',');
  }

  function computeArrayLength ( arr ){
    var count = 0;
    for( var i=0; i<arr.length; i++ ){
      if( arr[i].trim() != '' ){
        count++;
      }
    }
    return count;
  }
})();
