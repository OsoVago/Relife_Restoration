document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.imgs img');
  let current = 0;

  // Створюємо контейнер для стрілок
  const imgsDiv = document.querySelector('.imgs');
  const leftArrow = document.createElement('button');
  const rightArrow = document.createElement('button');

  leftArrow.innerHTML = '&#8592;'; // ←
  rightArrow.innerHTML = '&#8594;'; // →

  leftArrow.style.position = rightArrow.style.position = 'absolute';
  leftArrow.style.top = rightArrow.style.top = '50%';
  leftArrow.style.transform = rightArrow.style.transform = 'translateY(-50%)';
  leftArrow.style.left = '10px';
  rightArrow.style.right = '10px';
  // Видаляємо задній фон стрілок
  leftArrow.style.background = rightArrow.style.background = 'transparent';
  leftArrow.style.color = rightArrow.style.color = '#00000';
  leftArrow.style.border = rightArrow.style.border = 'none';
  leftArrow.style.fontSize = rightArrow.style.fontSize = '2rem';
  leftArrow.style.cursor = rightArrow.style.cursor = 'pointer';
  leftArrow.style.zIndex = rightArrow.style.zIndex = '10';
  // Видаляємо круглі кнопки, робимо їх прямокутними
  leftArrow.style.borderRadius = rightArrow.style.borderRadius = '0';
  leftArrow.style.width = rightArrow.style.width = '48px';
  leftArrow.style.height = rightArrow.style.height = '48px';

  // Додаємо стрілки в imgs
  imgsDiv.style.position = 'relative';
  imgsDiv.appendChild(leftArrow);
  imgsDiv.appendChild(rightArrow);

  // Функція для показу фото
  function showImage(idx) {
    images.forEach((img, i) => {
      img.style.display = i === idx ? 'block' : 'none';
    });
  }

  // Спочатку показуємо тільки перше фото
  showImage(current);

  // Автоматичне перемикання
  let interval = setInterval(nextImage, 5000);

  function nextImage() {
    images[current].style.display = 'none';
    current = (current + 1) % images.length;
    images[current].style.display = 'block';
  }

  function prevImage() {
    images[current].style.display = 'none';
    current = (current - 1 + images.length) % images.length;
    images[current].style.display = 'block';
  }

  rightArrow.addEventListener('click', function() {
    clearInterval(interval);
    nextImage();
    interval = setInterval(nextImage, 5000);
  });

  leftArrow.addEventListener('click', function() {
    clearInterval(interval);
    prevImage();
    interval = setInterval(nextImage, 5000);
  });
});
