const questions = document.querySelectorAll(".question");

questions.forEach(questions => {
    questions.addEventListener("click", event => {
        questions.classList.toggle("active");
        
        const answers = questions.nextElementSibling;
        if(questions.classList.contains("active")) {
            answers.style.maxHeight = answers. scrollHeight + "px";
        } 
        else {
            answers.style.maxHeight = 0;
        }
    });
});

const toggleBtn = document.querySelector('.toggle_btn');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        const dropDownMune = document.querySelector('.dropdown_menu');

        toggleBtn.onclick = function () {
            dropDownMune.classList.toggle('open')
            const isOpen = dropDownMune.classList.contains('open')
        }

window.addEventListener("scroll", function() {
    var header = document.querySelector(".Chains");
    header.classList.toggle("sticky", window.scrollY > 0);
})