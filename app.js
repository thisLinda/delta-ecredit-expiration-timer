document.addEventListener('DOMContentLoaded', function(e) {
  // define target date variable for before 10/27/24
  const targetDate = dayjs('Saturday October 26, 2024 23:59:59')

  // calculate remaining days
  const timeDifference = targetDate.diff(dayjs(), "day")

  // number span
  const numberSpan = document.createElement("span")
  numberSpan.textContent = timeDifference
  numberSpan.classList.add("countdown-number")

  // string span
  const textSpan = document.createElement("span")
  textSpan.textContent = "  days"
  textSpan.classList.add("countdown-text")

  // append spans to container
  const countdownContainer = document.getElementById("countdown")
  // clear existing content
  countdownContainer.innerText = ""
  countdownContainer.appendChild(numberSpan)
  countdownContainer.appendChild(textSpan)
})