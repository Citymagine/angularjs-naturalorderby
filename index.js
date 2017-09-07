'use strict';

angular.module('angularjsNaturalorderby', [])
  .filter('naturalOrderBy', function ($filter, $window) {
    return function (array, sortPredicate, reverseOrder) {
      return $filter('orderBy')(array, sortPredicate, reverseOrder, function(a, b) {
        return $window.naturalSort(a.value, b.value);
      });
    };
  });
