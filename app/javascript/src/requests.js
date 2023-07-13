import $ from "jquery";
$.ajaxSetup({
  headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
  },
});

// GET ALL TASKS
export var indexTasks = function (successCB, errorCB) {
  var request = {
    type: "GET",
    url: "api/tasks?api_key=1",
    success: successCB,
    error: errorCB,
  };
  $.ajax(request);
};

// UPDATING TASK
export var updateTask = function (id, content, successCB, errorCB) {
  var request = {
    type: "PUT",
    url: "api/tasks/" + id + "?api_key=1",
    data: {
      task: {
        content: content,
      },
    },
    success: successCB,
    error: errorCB,
  };
  $.ajax(request);
};

// CREATING TASKS
export var postTask = function (content, successCB, errorCB) {
  var request = {
    type: "POST",
    url: "api/tasks?api_key=1",
    data: {
      task: {
        content: content,
      },
    },
    success: successCB,
    error: errorCB,
  };
  $.ajax(request);
};

// DELETING TASKS
export var deleteTask = function (id) {
  var request = {
    type: "DELETE",
    url: "api/tasks/" + id + "?api_key=1",

  };
  $.ajax(request);
};

// MARKING TASKS ACTIVE
export var markTaskActive = function (id) {
  var request = {
    type: "PUT",
    url: "api/tasks/mark_active?/" + id + "api_key=1",
    
  };
  $.ajax(request);
};

// MARKING TASKS COMPLETE
export var markTaskComplete = function (id) {
  var request = {
    type: "PUT",
    url: "api/tasks/mark_complete?/" + id + "api_key=1",
    data: {
      task: {
        complete: true,
      },
    },
  };
  $.ajax(request);
};
