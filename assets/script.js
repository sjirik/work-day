$(document).ready(function () {
 
var button = $('.saveBtn')

button.on('click', function (){
  var appointment = $(this).siblings('.description').val();
  var block = $(this).parent().attr('id').split('-')[1];
  localStorage.setItem(block, appointment);
});

function blockColor() {
  
  var timeOfDay = dayjs().hour(); /*this is going to get my current time from day.js*/
  var timeBlock = $('.time-block')
  
  timeBlock.each(function () {
    var timeOfBlock = parseInt($(this).attr('id').split('-')[1]) /*this is going to loop my function over all of my time blocks and turns them into integers*/

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

blockColor();

  $('#hour-9 .description').val(localStorage.getItem('9'));
  $('#hour-10 .description').val(localStorage.getItem('10'));
  $('#hour-11 .description').val(localStorage.getItem('11'));
  $('#hour-12 .description').val(localStorage.getItem('12'));
  $('#hour-13 .description').val(localStorage.getItem('13'));
  $('#hour-14 .description').val(localStorage.getItem('14'));
  $('#hour-15 .description').val(localStorage.getItem('15'));
  $('#hour-16 .description').val(localStorage.getItem('16'));
  $('#hour-17 .description').val(localStorage.getItem('17'));
/*this allows the contents to stay on the page by pulling it from localstorage under the key number*/

var timeClock = $('#currentDay')

  timeClock.text(dayjs().format('dddd, MMMM D, YYYY')); /*this adds the time to the to of the page*/
});
