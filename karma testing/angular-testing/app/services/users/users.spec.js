describe('Users factory', function() {
  var Users;
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
  var singleUser = {
    id: '2',
    firstname: 'Bob',
    role: 'Developer',
    location: 'New York',
    twitter: 'billybob',
      lastname: 'james'
  };

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  it('should exist', function() {
    expect(Users).toBeDefined();
  });

  describe('.all()', function() {
    it('should exist', function() {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', function() {
    it('should exist', function() {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user object if it exists', function() {
      expect(Users.findById('2')).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', function() {
      expect(Users.findById('ABC')).not.toBeDefined();
    });

    it('should return fullname of the users', function(){
      expect(Users.fullName()).toBeDefined();
    })
  });
});
