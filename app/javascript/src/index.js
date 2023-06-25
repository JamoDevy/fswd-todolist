import $ from 'jquery';

import {
  indexTasks,
  postTask,
  markTaskActive,
  markTaskComplete,
  deleteTask,
} from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function(task) {
    return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \
      " + task.content + "\ <input type='checkbox' id='taskCheckBox' style='float:right'><button id='remove' classname='btn btn-primary mb-2' style='float:right'>Remove</button> \
      </div>"
      
  });

  $("#tasks").html(htmlString);

  $('#submit').on("click", function (e) {
    e.preventDefault();
    postTask($("task-input"));
  });

  $('#remove').on('click', function(e) {
    deleteTask();
    e.preventDefault();
  });
  


markTaskActive(function (task) {
  
  if ($('#taskCheckBox') == checked)
      task.complete == false
    
  else 
    ($('#taskCheckBox') == unchecked) 
      task.complete == true
});

markTaskComplete(function (response) {
  var htmlString = response.tasks.map(function(task) {
    if (task.complete == true)
      return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.complete + "'> \
      " + task.content + "\
      </div>"
    else (task.complete == false)


  })

$('#active').html(htmlString)


});
});
