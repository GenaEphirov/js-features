// Import stylesheets
import './style.css';

let progressButton = document.getElementById("progress-button")
progressButton.onclick = writeProgress;

let progressFill = document.getElementById("progress-fill");

function writeProgress() {
  let progressInput = document.getElementById("progress-input");
  let inputValue = Number(progressInput.value);
  progressFill.style.width = `${inputValue}%`;
  let checkpoints = document.getElementsByClassName("checkpoint-item");
  let checkpointsBounds = []
  for (let cp of checkpoints) {
    checkpointsBounds.push({element: cp, value: Number(cp.getAttribute("bound"))})
  }
  let index = 0;
  for (let cpinfo of checkpointsBounds) {
    if (cpinfo.value <= inputValue) {
      checkpoints[index].className = "checkpoint-item active";
    } else {
      checkpoints[index].className = "checkpoint-item";
    }
    index++
  }
  index = 0;
}