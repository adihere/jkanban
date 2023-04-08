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
        moveAllItems('_todo','_working');
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
        taskCount = tasks.length;
        for (var i = 0; i < taskCount; i++) { 
          
          KanbanTest.addElement("_working", {
            title: "Random Test Add " + Math.random().toString()
          });
  
          KanbanTest.removeElement(title);
  
        }      
      }
  

      // add a function to move an item from one board to another
    function moveItem(itemID, targetBoardID) {
      var item = KanbanTest.findElement(itemID); // find the item element by id
      //var originBoardID = item.parentElement.parentElement.dataset.id; // get the id of the origin board
      var targetBoard = KanbanTest.findBoard(targetBoardID); // find the target board element by id

      if (item && targetBoard) { // if both elements exist
       KanbanTest.removeElement(itemID); // remove the item from the origin board
       KanbanTest.addElement(targetBoardID, {
        id:itemID,
        title:item.innerHTML
       }); // add the item to the target board


      }
    }

    // add a function to move all items from one board to another board
  function moveAllItems(originBoardID, targetBoardID) {
    var originBoard = KanbanTest.findBoard(originBoardID); // find the origin board element by id
    var targetBoard = KanbanTest.findBoard(targetBoardID); // find the target board element by id
    if (originBoard && targetBoard) { // if both elements exist
      
      var items = KanbanTest.getBoardElements(originBoardID); // get all the items in the board by id
      for (var i = 0; i < items.length; i++) { // loop through each item
        var itemID = items[i].dataset.eid; // get the id of the item        
        moveItem(itemID, targetBoardID); // call the internal moveItem function with the item id and target board id       
        //KanbanTest.moveElement(items[i],targetBoardID);
      }
    }
  }

  // A function to simulate random creation of tasks on a Kanban board 
      function createRandomTasks1() {        
        // A random number between 1 and configmax 
        var randNumber = Math.random();
        var randTaskCount = Math.floor(randNumber * SimConfig.maxtaskinput) + 1; 
  
        for (var i = 0; i < randTaskCount; i++) { 
          var randomID = Math.random().toString(36).substr(2, 9); // generate a random ID using Math.random and toString
          KanbanTest.addElement("_todo", {
            id:randomID,
            title: "Random Test Add " + (randNumber+i).toString().substring(0,6)
          });
        }        
      }



