

const assemble = document.querySelector('.Assemble')
const login = document.getElementById('login')
const loginForm = document.getElementById('login-form')



assemble.addEventListener('click',function(){
    window.location.href =  'SetPage.html'
})



login.addEventListener('click', (e)=>{
    e.preventDefault();
    const username  = loginForm.uname.value
    const password = loginForm.pswd.value

    if (username==='hi' && password==='hi'){
        alert('you logged in ok')
        const createSet = document.createElement('BUTTON')
        createSet.textContent = 'Create Set';
        document.body.appendChild(createSet);

        const editSet = document.createElement('BUTTON')
        editSet.textContent = 'Create Set';
        document.body.appendChild(editSet);

    }

    else{
        alert('login was incorret try again please')
        
    }
})