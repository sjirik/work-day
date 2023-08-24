// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
function timeColor() {

  var timeOfDay = dayjs().hour(); /*this is going to get my current time from day.js*/

  $('.time-block').each(function () {
    var timeOfBlock = parseInt($(this).attr('id').split('-')[1]) /*this is going to loop my function over all of my time blocks*/

    if (timeOfBlock < timeOfDay) {
      $(this).addClass('past');
    } else if (timeOfBlock === timeOfDay) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future'); 
      /*Using 'if' 'then' I added and removed the classes from the time blocks based on the time of day*/
      /*Was not working, but I was sure my code was correct. turns out my integers in my HTML were not in military time*/
    }
  });

}

timeColor();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
var timeClock = $('#currentDay')

  timeClock.text(dayjs().format('dddd, MMMM D, YYYY'));
});
