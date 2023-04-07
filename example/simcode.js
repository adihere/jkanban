// a global object called simstate
var simstate = {
  // store integer variables
  daysofsim: 0,
  throughput: 0,
  teamsize: 0,
  // store boolean variable with default value of true
  simpaused: true,
  //  an empty object that stores key value pairs and name it taskstore
  taskstore1: {},
  taskstore2: {},
  taskstore3: {},
  taskstore4: {} 
};

//a global object named SimConfig
var SimConfig = {
    teamsize: 6,
    wipbacklog: 10,
    wiptodo: 5,
    wipinprogress: 3,
    maxtaskinput: 20
  };


```

// access the taskstore object from the simstate object
var tasks = simstate.taskstore;
// call the addTask function from the simstate object with a key and a value
simstate.addTask("task1", "do something");
// print the updated taskstore object
console.log(tasks);


// access the taskstore object from the simstate object
var tasks = simstate.taskstore;
// loop through the object using a for-in loop
for (var key in tasks) {
  // get the value of each key
  var value = tasks[key];
  // print the key and value pair
  console.log(key + ": " + value);
}

```