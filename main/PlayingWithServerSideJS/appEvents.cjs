const events = require('events');
const appEvents = new events.EventEmitter();
function emitEvent(){
    appEvents.emit('started', 'App has started.');
}

appEvents.on('started', function(data) {
    console.log(data);
});

emitEvent();

//Specify events and event listeners using the events node module.