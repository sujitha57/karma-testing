(function() {
  'use strict';

  angular.module('api.users', [])
  .factory('Users', function() {
    var Users = {};
    var userList = [
      {
        id: '1',
        firstname: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane',
          lastname: 'abc'
      },
      {
        id: '2',
        firstname: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
          lastname: 'james'
      },
      {
        id: '3',
        firstname: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo',
          lastname: 'klause'
      }
    ];

    Users.all = function() {
      return userList;
    };

    Users.findById = function(id) {
      return userList.find(function(user) {
        return user.id === id;
      });
    };
    Users.fullName = function(){
      return userList.firstname + userList.lastname;
    };

    return Users;
  });
})();
