document.addEventListener('DOMContentLoaded', function(e) {
  // define target date variable for before 10/27/24
  const targetDate = dayjs('Saturday October 26, 2024 23:59:59')

  // calculate remaining days
  const mockCurrentDate = dayjs('Saturday October 26, 2024 23:39:59')
  let timeDifference = targetDate.diff(mockCurrentDate, "day")
  let unit = timeDifference <= 1 ? " day" : "days"

  if (timeDifference <= 1) {
    timeDifference = targetDate.diff(mockCurrentDate, "hour")
    unit = timeDifference === 1 ? " hour" : " hours"

    if (timeDifference <= 1) {
    timeDifference = targetDate.diff(mockCurrentDate, "minute")
    unit = timeDifference === 1 ? " minute" : " minutes"
    }
  }

  // let timeDifference = targetDate.diff(dayjs(), "day")

  // if (timeDifference <= 1) {
  //   timeDifference = targetDate.diff(dayjs(), "hour")
  // }

  // number span
  const numberSpan = document.createElement("span")
  numberSpan.innerText = timeDifference
  numberSpan.classList.add("countdown-number")

  // string span
  const textSpan = document.createElement("span")
  textSpan.innerText = unit
  textSpan.classList.add("countdown-text")

  // append spans to container
  const countdownContainer = document.getElementById("countdown")
  // clear existing content
  countdownContainer.innerText = ""
  countdownContainer.appendChild(numberSpan)
  countdownContainer.appendChild(textSpan)
})