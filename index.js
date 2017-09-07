'use strict';

angular.module('angularjsNaturalorderby', [])
  .filter('naturalOrderBy', function ($filter) {
    return function (array, sortPredicate, reverseOrder) {
      return $filter('orderBy')(array, sortPredicate, reverseOrder, function(a, b) {
        return naturalSort(a.value, b.value);
      });
    };
  });
