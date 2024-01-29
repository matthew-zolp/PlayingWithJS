let user1 = {
    firstName: 'John',
    lastName: 'Smith',
    role: 'admin',
    level: 10,
    getPermissionsLevel() {
      if (this.role === 'admin') return this.level + 5;
      return this.level;
    },
    getUserInfo() {
      let fullName = this.firstName + ' ' + this.lastName;
      const compilePermissions = () => { //An arrow function must be used here to bind the proper this value to the object within
                                         //its lexical scope, the user1 object. Otherwise, the this.role reference will return undefined
       return `${this.role} - ${this.getPermissionsLevel()}`;
      }
      let perms = compilePermissions();
      return fullName + ' + ' + perms;
    }
  };

  console.log(JSON.stringify(user1.getUserInfo()));
  