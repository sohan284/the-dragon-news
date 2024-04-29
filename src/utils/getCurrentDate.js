export default function getCurrentDateInfo() {
  // Get current date
  const currentDate = new Date();

  // Get day, month, date, and year
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  // Note: January is 0, February is 1, ..., December is 11
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];

  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Construct the date info string
  const dateInfo = `${dayOfWeek}, ${month} ${date}, ${year}`;

  return dateInfo;
}
