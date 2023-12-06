// Given a weekday `day` a  number `noOFDaysAhead`

function getNextDay(day, noOFDaysAhead) {
  return 'Mon';
}

// day: Mon, Tue, Wed, Thu, Fri, Sat, Sun
// noOFDaysAhead: 0 - 10000


getNextDay('Tue', 6) // return Monday


function getNextDay(day, noOFDaysAhead) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let idx = days.findIndex(day);
  let num = (noOFDaysAhead + idx) % 7;
  return days[num];
}

// day: Mon, Tue, Wed, Thu, Fri, Sat, Sun
// noOFDaysAhead: 0 - 10000
