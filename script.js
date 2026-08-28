const selectedTimes = document.querySelector('#selected-times');
const summary = document.querySelector('#time-summary');

document.querySelectorAll('.time-slot').forEach(slot => slot.addEventListener('click', () => {
  slot.classList.toggle('selected');
  const times = [...document.querySelectorAll('.time-slot.selected')].map(item => item.dataset.time);
  selectedTimes.value = times.join(', ');
  summary.textContent = times.length ? `${times.length} time${times.length > 1 ? 's' : ''} selected` : 'Select any times that work for you';
}));

const selectedHelp = document.querySelector('#selected-help');
const helpSummary = document.querySelector('#help-summary');
document.querySelectorAll('.help-option').forEach(option => option.addEventListener('click', () => {
  option.classList.toggle('selected');
  const help = [...document.querySelectorAll('.help-option.selected')].map(item => item.dataset.help);
  selectedHelp.value = help.join(', ');
  helpSummary.textContent = help.length ? `${help.length} item${help.length > 1 ? 's' : ''} selected` : 'Select anything that applies';
}));
