function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  console.log(fnInside(4)); // 7
  console.log(outside(5)(8)); // 13
  
//Inner functions can access local variables in outer functions, but not the other way around.
  function calculateDate(str) {
    let newDate = new Date(str);
    newDate.setDate(newDate.getDate() + 7); 
    return {
      newDate,
      getWeekday: function() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[newDate.getDay()];
      }
    }
  }

  console.log(calculateDate(new Date()).getWeekday()); 

  function calculateDate2(str) {
    let newDate = new Date(str);
    newDate.setDate(newDate.getDate() + 7); 
    return function() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[newDate.getDay()];
    }
  }

  console.log(calculateDate2(new Date())()); 
  ///////////////////////////////////////^Calls the inner function