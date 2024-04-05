document.addEventListener('DOMContentLoaded', function(e) {
  // define target date variable for before 10/27/24
  const targetDate = dayjs('Saturday October 26, 2024 23:59:59')

  // calculate remaining days
  let timeDifference = targetDate.diff(dayjs(), "day")
  let unit = timeDifference <= 1 ? " day" : "days"

  if (timeDifference <= 1) {
    timeDifference = targetDate.diff(dayjs(), "hour")
    unit = timeDifference === 1 ? " hour" : " hours"

    if (timeDifference <= 1) {
    timeDifference = targetDate.diff(dayjs(), "minute")
    unit = timeDifference === 1 ? " minute" : " minutes"
    }
  }

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