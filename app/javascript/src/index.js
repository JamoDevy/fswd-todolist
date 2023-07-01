import $ from "jquery";

import {
  indexTasks,
  postTask,
  markTaskActive,
  markTaskComplete,
  deleteTask,
} from "./requests.js";

function refreshTasksList() {
  indexTasks(function (response) {
    var htmlString = response.tasks.map(function (task) {
      return (
        "<div class='col-12 mb-3 p-2 border rounded task' data-id='" +
        task.id +
        "'> \
        " +
        task.content +
        " \
        <input type='checkbox' id='taskCheckBox' style='float:right'> \
        <button class='btn btn-primary mb-2 remove' style='float:right'>Remove</button> \
        </div>"
      );
    });
  
    $("#tasks").html(htmlString);
  });
}


// Wait for the document to be ready before executing the code inside the function
$(document).ready(function () {

  // Call the refreshTasksList function to display the list of tasks
  refreshTasksList();

  // When the submit button is clicked, prevent the default form submission behavior
  $("#submit").on("click", function(e) {
    e.preventDefault();
  
    // Log the value of the task input field to the console
    console.log($("#task-input").val());

    // Call the postTask function to add a new task to the list and refresh the list
    postTask($("#task-input").val(), function (response) {
      refreshTasksList();
    });
    
  });



  // Delete task
  $(document).on('click', '.remove', function () {
    console.log($('.task').data('id')); 
    refreshTasksList();
  });


  
  // When the checkbox is clicked, call the markTaskActive function to mark the task as active or complete
  $(document).on('click', '#taskCheckBox', function () {
    markTaskActive(function (task) {
      if ($("#taskCheckBox").is(":checked")) {
        task.complete = false;
      } else {
        task.complete = true;
      }
    });
  });
});

