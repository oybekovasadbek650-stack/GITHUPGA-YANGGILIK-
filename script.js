// 1. Tugma yaratamiz
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'light';
toggleBtn.id = 'theme-toggle';
document.querySelector('.nav_box').appendChild(toggleBtn);

// 2. Bosganда almashadi
let isDark = false;

toggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('dark-mode', isDark);
  toggleBtn.textContent = isDark ? 'light' : 'dark';
});