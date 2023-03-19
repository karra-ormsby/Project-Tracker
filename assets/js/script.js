


displayTime();

function displayTime () {
   var today = dayjs().format('MM DD, YYYY [at] hh:mm:ss a');
   $("#today-date").text(today);
}
