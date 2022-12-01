const dateConverter = (date) => {
  let date_1 = new Date('2022-12-01T00:00:00')
  let date_2 = date

  let difference = date_2 - date_1
  let days = Math.floor(difference / (1000 * 3600 * 24));
  return days
}

module.exports = dateConverter