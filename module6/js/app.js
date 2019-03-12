(function(global){

   // Prevent variables from leaking into the parent scope.
   'use strict';

    // Define the overall module and the single controller for this app.
   angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

   // Prevent minification issues by defining the dependency injection variables.
   LunchCheckController.$inject = ['$scope'];

   // Magic!
   function LunchCheckController($scope) {
     $scope.inputListValue = "";
     $scope.outputMessage  = "";

     $scope.submitList = function() {
        var segmentCount = getSegments($scope.inputListValue).length;
        var message      = getMessage(segmentCount);
        $scope.outputMessage = message;
     };
   }

   // Used to determine if the input value is empty, prior to attempting to split for values.
   function isEmpty(string) {
      return string === "";
   }

   // Used to split the input string into segments, using a comma "," as the separator.
   function getSegments(string) {
      if (isEmpty(string)) {
         return [ ];
      } else {
         var splitValues = string.split(",");
         var scrubbed    = [ ];

         for (var index = 0; index < splitValues.length; index++) {
            if (!isEmpty(splitValues[index].trim())) {
               scrubbed.push(splitValues[index]);
            }
         }

         return scrubbed;
      }
   }

   // Determine the appropriate message, based on segment counts.
   function getMessage(count) {
      if (count <= 0) {
         return "Please enter data first.";
      } else if (count <= 3) {
         return "Enjoy!";
      } else {
         return "Too much!";
      }
   }
})(window);
