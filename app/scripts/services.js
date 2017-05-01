/* global angular */

'use strict';
angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")

.service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

  
  this.getDishes = function () {
    return $resource(baseURL + 'dishes/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  };

  // Only need GET so no custom actions defined.
  this.getPromotion = function () {
    return $resource(baseURL + 'promotions/:id');
  };
}])

.factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

  var corpfac = {};

  // Only need GET so no custom actions defined.
  corpfac.getLeaders = function () {
    return $resource(baseURL + 'leadership/:id');
  };

  return corpfac;
}])

.factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

  var feedfac = {};

  // Only need POST so no custom actions defined.
  feedfac.getFeedback = function () {
    return $resource(baseURL + 'feedback/:id');
  };

  return feedfac;
}])
