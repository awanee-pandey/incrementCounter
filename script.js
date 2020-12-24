const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = 0;
    const updateCounter = () =>{
        /* To convert the string into number we can use
         Number keyword or + sign*/
        const target = Number(counter.getAttribute('data-target'));
        // console.log(typeof target, target);
        const c = Number(counter.innerText);
        const increment = target/200;
        if(c<target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target;
        }
    }

    updateCounter();
});
