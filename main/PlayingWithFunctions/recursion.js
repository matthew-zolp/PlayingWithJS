function factorial(num) {
    if(num ===1) return 1;
    console.log(num);
    return num * factorial(num - 1);
  };
  const result = factorial(10);
  console.log(result);
  