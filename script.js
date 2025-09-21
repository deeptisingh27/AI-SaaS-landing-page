const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{ threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));