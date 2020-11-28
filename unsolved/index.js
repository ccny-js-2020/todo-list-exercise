/*
	When the Add Todo Button is clicked
	 - The todo text is added to the dom with a Red X Button next to it

  When the Red X button is clicked,
    - delete/remove that Todo & Red X Button
    - update the todo number that shows on the dom

  When the todo text is clicked,
    - a modal pops up with an input and a Button
    - Note: In order to transfer data before and after the update, I held data in the modal button
  When the button inside the modal is clicked:
    - The modal will close
    - The todo text will be updated with what was in the input box and the current number of the todo

  Please watch the video

  Steps:
  1. Get the button click to work
  2. Get the input value from the button click
  3. Set appropriate data values for each todo
    - In mine, i've assigned a unique ID to each todo text to setup the todo "deletion"
    - In mine, i've assigned that same unique ID as the data-id of that text to be used as part of the "update" todo
    - In mine, I'm setting the number on the left of the todo (i.e. "1. ") as the current number of todos on the dom
  4. Append the todo text and the deletion button for each todo input
  5. When the X/Delete Button next to the todo text is pressed, it will delete/remove that todo text and the button from the dom
     In mine, i also update the numbers on the left of the todo text as per the order that theyre in. Watch the video
  6. When the todo text is clicked on, it will pop up a modal that has an input and a button.
     The input value in the modal should have the value of the text that you clicked on
     In mine, im parsing out the number on the left of the todo (i.e. "1. ") and setting the input value of whatever is to the right of the "#. " i.e "1. "
     In mine, im setting data values of the unique ID of the todo and the number to the left that i parsed out (i.e. "1. ")
  7. When you have updated the text in the input and the button in the modal is clicked
     Im using this syntax: $("#todo-" + uniqueIdentifierOfTodo + "-p").text(currentTodoNumber + todoUpdateInputValue);
*/
