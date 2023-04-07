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

//a global object named SimConfig with default values 
var SimConfig = {
    teamsize: 6,
    wipbacklog: 10,
    wiptodo: 5,
    wipinprogress: 3,
    maxtaskinput: 20
  };


  // Declare a function named startSimulation
    function startSimulation() {
    //some logic to start the simulation
    
    console.log("Starting the simulation...");
  }
  
  // Declare a function named pauseSimulation
  function pauseSimulation() {
    //some logic to pause the simulation
    
    console.log("Pausing the simulation...");
}


function addTasksinToDo(){    

    KanbanTest.addElement("_todo", {
     title: "Test Add at Pos"
}, 1);    
}


function createRandomTasks() { 
    // An array of possible task names 
    var tasks = ['Buy groceries', 'Clean the house', 'Write a blog post', 'Call mom', 'Pay bills', 'Watch a movie', 'Read a book', 'Go for a walk']; 
    // A random number between 1 and 4 
    var numTasks = Math.floor(Math.random() * 4) + 1; 
    // Loop through the number of tasks to create 
    for (var i = 0; i < numTasks; i++) { 
        // Pick a random task name from the array 
        var taskName = tasks[Math.floor(Math.random() * tasks.length)]; 
        // Pick a random board id from the kanban instance 
        var boardId = KanbanTest.getBoardElements()[Math.floor(Math.random() * KanbanTest.getBoardElements().length)].dataset.id; 

        // Check if adding an item will exceed the WIP limit for this board  
        var currentItems = KanbanTest.getBoardElements(boardId).length;  
        var wipLimit = KanbanTest.options.boards.find(board => board.id === boardId).wipLimit;  
        if (currentItems < wipLimit) {  
            // Add the task to the board with a random color  
            KanbanTest.addElement(boardId, {title: taskName, class:'border border-' + ['primary','secondary','success','danger','warning','info','light','dark'][Math.floor(Math.random()*8)]});  
        } else {  
            console.log('Cannot add as you exceed WIP');
        }

    }

   }



    //move to 'in progress'
    function moveRandomTasks(){
        randTaskCount = tasks.length;
        for (var i = 0; i < randTaskCount; i++) { 
          
          KanbanTest.addElement("_working", {
            title: "Random Test Add " + Math.random().toString()
          });
  
          KanbanTest.removeElement(title);
  
        }      
      }
  
      // A function to simulate random creation of tasks on a Kanban board 
      function createRandomTasks1() {
        
        // A random number between 1 and 9 
        var randTaskCount = Math.floor(Math.random() * 9) + 1; 
  
        for (var i = 0; i < randTaskCount; i++) { 
          KanbanTest.addElement("_todo", {
            title: "Random Test Add " + Math.random().toString()
          });
        }        
      }



