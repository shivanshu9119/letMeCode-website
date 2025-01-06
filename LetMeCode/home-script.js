const moveBtn = document.querySelectorAll("rotate-btn");
const startLearning = document.querySelectorAll(".js-not-move")

moveBtn.addEventListener('mousemove', (event) => {
const rect = moveBtn.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;

const rotateX = (x / rect.height - 0.8) * 10;
const rotateY = (y / rect.width - 0.2) * -10;
console.log(rotateX);
console.log(rotateY);
moveBtn.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

moveBtn.addEventListener('mouseleave', () => {
  moveBtn.style.transform = 'rotateX(0deg) rotateY(0deg)'
})
