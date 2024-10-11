
  document.addEventListener('DOMContentLoaded', () => {
      const counters = document.querySelectorAll('.count');
      const speed = 700; 

      counters.forEach(counter => {
          const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const count = +counter.innerText;
              const inc = target / speed;
              if (count < target) {
                 
                  counter.innerText = Math.ceil(count + inc);
                 
                  setTimeout(updateCount, 1);
              } else {
                  counter.innerText = target; 
              }
          };

          updateCount();
      });
  });


//  слайдер
  let slideIndex = 0;
       showSlides(slideIndex);

       function plusSlides(n) {
           showSlides(slideIndex += n);
       }

       function showSlides(n) {
           let slides = document.getElementsByClassName("slides")[0];
           let totalSlides = slides.children.length;
           if (n >= totalSlides) { slideIndex = 0 }
           if (n < 0) { slideIndex = totalSlides - 1 }
           slides.style.transform = `translateX(${-slideIndex * 100}%)`;
       }

       function autoSlide() {
           plusSlides(1);
           setTimeout(autoSlide, 5000); 
       }

       autoSlide();

// формы
       function togglePassword() {
           var passwordInput = document.getElementById('password');
           var toggleIcon = document.querySelector('.toggle-password');
           if (passwordInput.type === 'password') {
               passwordInput.type = 'text';
               toggleIcon.classList.remove('fa-eye');
               toggleIcon.classList.add('fa-eye-slash');
           } else {
               passwordInput.type = 'password';
               toggleIcon.classList.remove('fa-eye-slash');
               toggleIcon.classList.add('fa-eye');
           }
       }

 