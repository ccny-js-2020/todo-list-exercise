//Setting a number which will act as the todo-id
var num = 0;

//when the #todo-button is clicked on
$("#todo-button").click(function(){
	//Store the input value in a variable
	var todoInput = $("#add-todo-input").val();

	//if the input value is not blank
	if(todoInput != ""){
		//increment the number
		num++;

		//storing the input value and current value of the num in an object
		//the num will act as a "unique" id for the todo, as each today will have their own separate num
		var todo = {
			id: num,
			todo: todoInput
		}

		//getting the current number of children in the #todos-div
		//which is representative of the current number of todos on the dom
		var numberOfTodos = $("#todos-div").children().length;
		//todo current todo is not added to that div just yet
		//in preparation, im setting the current number to the amount of children + 1s
		var currentTodoNumber = numberOfTodos + 1;

		//logging to value of the todo object
		console.log(todo)
		//creating a div to add the todo to
		//giving the div a unique id, as the todo.id will always be incremented
		//no todo will have the same id
		//this will be accessed later on
		var todoDiv = $("<div id='todo-id-" + todo.id + "'>");
		//giving the todo div a class of todo
		//this will be accessed later on
		todoDiv.addClass('todo');

		//creating a p tag for the todo text
		var todoP = $("<p>");
		//adding a class to the p tag to be accessed later
		todoP.addClass("todo-text");
		//adding a unique id to the todo text
		todoP.attr("id", "todo-" + todo.id + "-p");
		//attributing a unique data attribute to the todo text
		todoP.data("todo-id", todo.id);
		//setting the text of the todo
		//using the currentTodoNumber and then the todo text from the object above
		//i.e. "3. Do Something"
		todoP.text(currentTodoNumber + ". " + todo.todo);

		//creating a button to be added next to the todo text
		//giving it a bootstrap class and text of "X"
		var xButton = $("<button>", {
			class: "btn btn-danger delete-todo-button",
			text: "X"
		});

		//appending the p tag and the button to the todoDiv
		todoDiv.append(todoP).append(xButton);

		//appending the todoDiv holding the p tag and the buttom to the dom
		$("#todos-div").append(todoDiv);

		//clearing the input value after a successful submit of a todo
		$("#add-todo-input").val("");
	} else {
		//If there is nothing in the text input when the button is clicked
		//then this happens
		alert("Please Insert Text")
	}

});

$(document).on('click', '.delete-todo-button', function(){
	// var todoId = $(this).attr("todo-id");

	//one way to do the deletion
	//deleteUsingJquery(todoId);

	//another way to do the deletion
  console.log($(this).parent("div"))
	$(this).parent("div").remove();

	//this here is updating the number before the todos (i.e. "1. ", "2. ") after a deletion
	//looping through all of the children that are p tags in the todo class
	$(".todo").children("p").each(function(index, value){
		//getting the text of each todo
		var textWithoutNumber = $(this).text().substring(1, $(this).text().length);
		//replacing the number on the left of the todo text with the current order of the todos
		var nextNumber = index + 1;
		//setting the new text for each p tag
		$(this).text(nextNumber + textWithoutNumber);
	});
});

//used in the event right above
function deleteUsingJquery(todoId){
	//this is the unique id set on every todo div above
	//view the google inspect on the dom
	$("#todo-id-" + todoId).remove();
}

//when the todo-text class is clicked on
$(document).on("click", ".todo-text", function(){
	//getting the current number on the left of the todo text
	var currentTodoNumber = $(this).text().substring(0,3);
	//getting the todo text without the number to the left
	var textWithoutNumber = $(this).text().substring(3, $(this).text().length);
	//giving the input in the modal the value of the text without the number to the left
	$("#update-text-input").val(textWithoutNumber);
	//assigning the modal button to have a data value of the
	//unique id of the todo currently being updated
	$("#update-text-button").data("todo-to-update", $(this).data("todo-id"));
	//assigning the modal button to have a data value of the
	//current number on the left of the todo text
	$("#update-text-button").data("current-todo-num", currentTodoNumber)
	//opening the modal
	$("#update-todo-modal").modal("toggle");
});

//when the button in the modal is clicked on
$("#update-text-button").click(function(){
	//retrieve both data values that were set from the .todo-text on click above
	var todoToUpdate = $(this).data("todo-to-update");
	var currentTodoNumber = $(this).data("current-todo-num");
	//getting the value of the input from the modal when the modal button is clicked
	var todoUpdateInputValue = $("#update-text-input").val();

	//accessing the id of the p that you are updating. That unique id is set on the text of every p tag.
	//You can look for this being set above
	//Giving the P Tag that im accessing a new text value of
		//what the current number on the left of the updated todo is
		//and the updated text value of the todo
	$("#todo-" + todoToUpdate + "-p").text(currentTodoNumber + todoUpdateInputValue);
	//closing the modal after the button is clicked
	$("#update-todo-modal").modal("toggle");
});
