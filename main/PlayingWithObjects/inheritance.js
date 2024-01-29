function Rooms(nameStr, mRoomBool, scheduleBool) {
    this.name = nameStr;
    this.meetingRoom = mRoomBool;
    this.canSchedule = scheduleBool;
  };
  Rooms.prototype.availToSchedule = function() {
    return this.canSchedule;
  };
  function MeetingRooms(nameStr, scheduleBool, capacityNum) {
    Rooms.call(this, nameStr, true, scheduleBool);
    this.capacity = capacityNum;
  };
  
  // To test the inheritance, she creates an object for the board room.
  // Add code here
  MeetingRooms.prototype = Object.create(Rooms.prototype);
  Object.defineProperty(MeetingRooms.prototype, 'constructor', {value: MeetingRooms, enumerable: false,writable: true});
  let boardRoom = new MeetingRooms('Board Room', false, 20);
  console.log('Can Schedule? ', boardRoom.availToSchedule());
  console.log(JSON.stringify(boardRoom));
  