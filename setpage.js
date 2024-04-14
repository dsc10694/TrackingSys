const backBtn = document.querySelector('.Back');
    const plasticBtn = document.querySelector('.plastic');

    backBtn.addEventListener('click', function(){
        window.location.href = 'index.html'
    })
    
    plasticBtn.addEventListener('click', function(){
       alert('you pressed plastic')
    } )