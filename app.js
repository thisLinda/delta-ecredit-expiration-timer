function updateCountdown() {
  const targetDate = dayjs('Saturday October 26, 2024 23:59:59')
  let timeDifference = targetDate.diff(dayjs(), "day")
  let unit = "days"

  if (timeDifference < 1) {
    timeDifference = targetDate.diff(dayjs(), "hour")
    unit = "hours"

    if (timeDifference < 1) {
    timeDifference = targetDate.diff(dayjs(), "minute")
    unit = "minutes"
    }
  }

  const countdownContainer = document.getElementById("countdown")
  countdownContainer.innerHTML = 
    `<span class="countdown-number">${timeDifference}</span>
    <span class="countdown-text">${unit}</span>`

  // call the function in 1 minute
  setTimeout(updateCountdown, 60000)
}

// call to start the countdown
document.addEventListener('DOMContentLoaded', updateCountdown)
