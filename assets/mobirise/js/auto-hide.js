var timedelay = 1;
var _delay = setInterval(delayCheck, 500);

$('.zoro').on('mousemove', showAllEvent);

function delayCheck() {
  if (timedelay == 7) {
    $('.cid-s8GUvxy8p2').removeClass('show');
    timedelay = 1;
  }
  timedelay = timedelay + 1;
}

function showAllEvent() {
  $('.cid-s8GUvxy8p2').addClass('show');
  timedelay = 1;
  clearInterval(_delay);
  _delay = setInterval(delayCheck, 500);
}