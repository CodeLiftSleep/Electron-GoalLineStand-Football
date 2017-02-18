
(function () {
    'use strict';
angular
.module('routerApp', ['ui.router','formly', 'formlyBootstrap', 'ngAnimate', 'ui.bootstrap', 'ngMessages',
 'ngStorage', 'ui.grid', 'restangular', 'formly_templates', 'nya.bootstrap.select',
'rzModule', 'ui.mask', 'angular-3d-carousel', 'ui.grid.autoResize'])

.service('DB', function($q) {
    this.load = {
        isLoading: false,
        data: []
    };

    this.setIsLoading = function(value) {
        this.load.isLoading = value;
    };

    this.setData = function(data) {
        this.load.data = data;
    };

    this.getNumEnding = function(number) {
        var defer = $q.defer();
        var num = number.toString();
        var result = '';
        switch (num[num.length-1]) { //gets the last digit of the number
            case '1' : result = 'st'; break;
            case '2' : result = 'nd'; break;
            case '3' : result = 'rd'; break;
            default  : result = 'th';
        }
        defer.resolve(result);
        return result;
    };
})

.service('dataService', ['$timeout', '$q', function($timeout, $q) {

    this.getData = function() {
        var defer = $q.defer();
        $timeout(function() {
                var fs = require('fs');
                var sql = require('sql.js');
                var filebuffer = fs.readFileSync('app/assets/football.sqlite');
                var db = new sql.Database(filebuffer);
                var agentTemp = db.prepare('SELECT * FROM Agents');
                for(var agents = []; agentTemp.step();) agents.push(agentTemp.getAsObject());
                var coachTemp = db.prepare('SELECT * FROM Coaches');
                for(var coaches = []; coachTemp.step();) coaches.push(coachTemp.getAsObject());
                var draftTemp = db.prepare('SELECT * FROM DraftPlayers');
                for(var draftPlayers = []; draftTemp.step();) draftPlayers.push(draftTemp.getAsObject());
                var ownerTemp = db.prepare('SELECT * FROM Owners');
                for(var owners = []; ownerTemp.step();) owners.push(ownerTemp.getAsObject());
                var personnelTemp = db.prepare('SELECT * FROM Personnel');
                for(var personnel = []; personnelTemp.step();) personnel.push(personnelTemp.getAsObject());
                var rosterTemp = db.prepare('SELECT * FROM RosterPlayers');
                for(var rosterPlayers = []; rosterTemp.step();) rosterPlayers.push(rosterTemp.getAsObject());
                var teamTemp = db.prepare('SELECT * FROM Teams ORDER BY TeamName');
                for(var teams = []; teamTemp.step();) teams.push(teamTemp.getAsObject());
                var trainerTemp = db.prepare('SELECT * FROM TRAINERS');
                for(var trainers = []; trainerTemp.step();) trainers.push(trainerTemp.getAsObject());

                var teamOffTemp = db.prepare('SELECT * FROM TeamOffense ORDER BY TotalYards DESC');
                for(var teamOffense = []; teamOffTemp.step();) teamOffense.push(teamOffTemp.getAsObject());
                var teamDefTemp = db.prepare('SELECT * FROM TeamDefense ORDER BY TotalYards');
                for(var teamDefense = []; teamDefTemp.step();) teamDefense.push(teamDefTemp.getAsObject());

                var DB = {};
                DB.Agents = agents;
                DB.Coaches = coaches;
                DB.DraftPlayers = draftPlayers;
                DB.Owners = owners;
                DB.Personnel = personnel;
                DB.RosterPlayers = rosterPlayers,
                DB.Teams = teams;
                DB.Trainers = trainers;
                DB.TeamOffense = teamOffense;
                DB.TeamDefense = teamDefense;

                defer.resolve(DB);
        }, 0);
        return defer.promise;
    };


}])

.run(function(DB, dataService) {
    DB.setIsLoading(true),
    dataService.getData().then(function(data) {
        DB.setData(data);
        DB.setIsLoading(false);
    });
})

.controller('loadCtrl', [ "$scope", "DB", function loadCtrl($scope, DB) {
        $scope.appState =  DB.load;
}])

.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        //START GAME--MAIN
        .state('Start', {
            url: '/start',
            templateUrl: 'New_Game_Wizard/new_game.html',
            controller: 'newGameCtrl',
            controllerAs: 'vm'
        })
        //nested Start states--url will be Start/profile
        .state('Start.career', {
            url: '/career',
            pararms: {model: null},
            templateUrl: 'New_Game_Wizard/Start/Start-career.html',
            controller: 'careerCtrl',
            controllerAs: 'vm'
        })

        .state('Start.career2', {
            url: '/career2',
            params: {model: null},
            templateUrl: 'New_Game_Wizard/Start/Start-career2.html',
            controller: 'career2Ctrl',
            controllerAs: 'vm'
        })

        .state('Start.career3', {
            url: '/career3',
            params: {model: null},
            templateUrl: 'New_Game_Wizard/Start/Start-career3.html',
            controller: 'career3Ctrl',
            controllerAs: 'vm'
        })

        //Team Selection screen
        .state('Start.teamSelect', {
            url: '/teamSelect',
            params: {model: null},
            templateUrl: 'New_Game_Wizard/Start/Start-teamSelect.html',
            controller: 'teamSelectCtrl',
            controllerAs: 'vm'
        })

        .state('Start.single', {
            parent: 'Start',
            url: '/single',
            templateUrl: 'New_Game_Wizard/Start/Start-single.html'
        })

        .state('Start.quick', {
            parent: 'Start',
            url: '/quick',
            templateUrl: 'New_Game_Wizard/Start/Start-quick.html'
        })

        .state('Start.situation', {
            parent: 'Start',
            url: '/situation',
            templateUrl: 'New_Game_Wizard/Start/Start-situation.html'
        })

        .state('Load', {
            url: '/load',
            templateUrl: 'test.html',
            controller: 'testCtrl'
        })

        .state('Exit', {
            url: '/exit',
            templateUrl: 'exit_game.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('settings', {
            // we'll get to this in a bit
        })

        .state('menu', {

        });
}])

.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);
})();
