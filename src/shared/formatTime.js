function formatCurrentDateAndTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const formattedDateAndTime = `${year}.${
    month + 1
  }.${date} ${hours}:${minutes}:${seconds}`;

  return formattedDateAndTime;
}

export default formatCurrentDateAndTime;
