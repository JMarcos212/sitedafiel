document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.2)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    alert ("Seja bem-vindo ao nosso site!")  
});
