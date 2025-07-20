document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            document.getElementById(targetSection).scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
});