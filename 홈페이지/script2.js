const addScheduleBtn = document.getElementById("add-schedule-btn");
const scheduleBody = document.getElementById("schedule-body");

addScheduleBtn.addEventListener("click", function(event) {
  event.preventDefault();

  const dateInput = document.getElementById("date");
  const activityInput = document.getElementById("activity");
  
  const date = dateInput.value;
  const activity = activityInput.value;
  
  const row = document.createElement("tr");
  const dateCell = document.createElement("td");
  const activityCell = document.createElement("td");
  
  dateCell.textContent = date;
  activityCell.textContent = activity;
  
  row.appendChild(dateCell);
  row.appendChild(activityCell);
  
  scheduleBody.appendChild(row);
});

function 버튼(hole){
  document.getElementById('first').style.display = hole;
}
function replaceLink(link) {
  location.replace(link);
}