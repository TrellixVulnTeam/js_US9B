
window.addEventListener('load', (event) => {
    let form = document.forms.main
    let inp1 = form.inp1
    let label = document.querySelector('.label')
    let out = form.out
    let butt = document.querySelector('.button')
    let allert = document.querySelector('.allert')

    console.log(form)

        

    document.addEventListener('input', (event) => {
        out.value = inp1.maxLength - inp1.value.length
    })

    document. addEventListener('click', (event) => {
        if(event.target == butt) {
            let pass = []
            function random() {
                for(let i = 0; i < 10; i++) {
                    let rand = Math.random() * 10 
                    pass.push(Math.floor(rand)) 
                }
            }
            random()
            out.value = pass.join('')
        }
    })
console.log('vasia' == 'vasia')

})




  

