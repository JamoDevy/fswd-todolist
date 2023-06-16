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
      " + task.content + "\ <button id='remove' classname='btn btn-primary mb-2' style='float:right'>Remove</button> \
      </div>"
      
  });

  $("#tasks").html(htmlString);

  $('#submit').on("click", function () {
    postTask($("#task-input"));
  });

  $('#remove').on('click', function(e) {
    console.log("this removes");
    e.preventDefault();
  });

});












