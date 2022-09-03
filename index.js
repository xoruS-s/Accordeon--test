const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach((box) => {
   box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest('.box');
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle('active');

    if (currentBox.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else currentContent.style.maxHeight = 0;
}


document.querySelectorAll('.title').forEach((el) => {
   el.addEventListener('click', () => {
       let content = el.nextElementSibling;

       if (content.style.maxHeight) {
           document.querySelectorAll('.text').forEach((el) => el.style.maxHeight = null);
       } else {
           document.querySelectorAll('.text').forEach((el) => el.style.maxHeight = null);
           content.style.maxHeight = content.scrollHeight + "px";
       }
   });
});