let date = new Date('1 January, 2024');

console.log('Convert to string in users time zone: ' + date.toString());
console.log('Convert to Coordinated User Time in human readable format: ' + date.toUTCString());
console.log('Convert to Coordinated User Time format: ' +date.toISOString());
console.log('Return only the date, not the time' + date.toDateString());