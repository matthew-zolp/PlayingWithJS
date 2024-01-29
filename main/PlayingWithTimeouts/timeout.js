//When a timeout is specified, the code inside will be executed from the message queue, not the call stack. The call stack will 
//empty before the message queue is flushed. If there are multiple timeouts, the code will be executed in the order from shortest
//timeout to longest.


const data = { 
    user: { 
      name: 'Jim Stokes', 
      updated: '2020-07-25' 
    } 
  };
  const fetchUser = (data) => {
    const user = data.user ? data.user.name : null;
    return user;
  }
  console.log('starting the process');
  setTimeout(()=> {
    console.log('updating user role');
    updateRole();
  }, 1000);
  setTimeout(()=> {
    console.log('updating user profile');
    updateProfile();
  }, 0);
  console.log(`updated user: ${fetchUser(data)}`);
  console.log('process complete');

  function updateProfile(){
    let updatedProfile;
  }
  function updateRole(){
    let updatedRole;
  }
  