function countdown(seconds) {
  var delay = 0;
  while (seconds >= 0) {
    (function () {
      var time = seconds;
      setInterval(function () {
        console.log(time);
      }, delay * 1000);
      delay++;
    })();
    seconds--;
  }
}
console.log(countdown(3));
