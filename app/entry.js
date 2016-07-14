'use strict'
require('!!file?name=[name].[ext]!./html/index.html')
const angular = require('angular')
const app = angular.module('demoApp', [])

app.controller('Wat', ['$scope', function($scope){
  $scope.lul = 'grr';
}])

app.controller('PlayerController', [PlayerController])

function PlayerController(){
  this.players = {};
  this.player = {
    name: 'slug',
    poewr: 'fly'
  }
}

PlayerController.prototype.addPlayer = function(){
  this.players[this.player.name] = player;
}


