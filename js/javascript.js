const dropdowns = document.querySelectorAll('.card__question');

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (e) => {
    const ans = e.target.parentElement.parentElement.lastElementChild;

    e.target.nextElementSibling.classList.toggle('rotate');

    e.target.classList.toggle('active_ans');

    if (ans.style.maxHeight) {
      ans.style.maxHeight = null;
    } else {
      ans.style.maxHeight = '2rem';
    }
  });
});
