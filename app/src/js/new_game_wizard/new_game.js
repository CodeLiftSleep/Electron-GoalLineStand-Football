(function () {
    'use strict';
angular
  .module('routerApp')
  .controller('newGameCtrl', function newGameCtrl($scope, $state) {
    var vm = this;
    vm.model = {};

    vm.fields = [
        {
            className: 'newGame animated bounceInRight',
            key: 'selectLeagueType',
            wrapper: 'panel',
            type: 'leagueType',
            templateOptions: {
                label: 'League Creation',
                templateUrl: '../html/Start/league_type.html'
            },
            controller: function($scope) {
                $scope.Update = function() {
                    angular.element('.newGame').removeClass('bounceInRight').addClass('bounceOutLeft');
                };
            },
        }
      ];
    });
})();
