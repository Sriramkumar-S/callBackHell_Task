let counter = 10;
const main_div = document.createElement('div');
const h3 = document.createElement('h3');
 main_div.id = 'main_div';
    h3.id = 'header';
    main_div.append(h3);
document.body.append(main_div);
const header = document.getElementById('header')

let setTimer = (counter, callback) => {
    header.innerHTML = counter;
    callback();
}

setTimer(counter, function() {
    counter--;
    setTimeout(() => {
        setTimer(counter, function() {
            counter--;
            setTimeout(() => {
                setTimer(counter, function() {
                    counter--;
                    setTimeout(() => {
                        setTimer(counter, function() {
                            counter--;
                            setTimeout(() => {
                                setTimer(counter, function() {
                                    counter--;
                                    setTimeout(() => {
                                        setTimer(counter, function() {
                                            counter--;
                                            setTimeout(() => {
                                                setTimer(counter, function() {
                                                    counter--;
                                                    setTimeout(() => {
                                                        setTimer(counter, function() {
                                                            counter--;
                                                            setTimeout(() => {
                                                                setTimer(counter, function() {
                                                                    counter--;
                                                                    setTimeout(() => {
                                                                        setTimer(counter, function() {
                                                                            counter--;
                                                                            setTimeout(() => {
                                                                                header.innerHTML = "Happy Independence Day !!"
                                                                            }, 1000);
                                                                            
                                                                        }) 
                                                                    }, 1000);
                                                                }) 
                                                            }, 1000);
                                                        }) 
                                                    }, 1000);
                                                }) 
                                            }, 1000);
                                        }) 
                                    }, 1000);
                                }) 
                            }, 1000);
                        }) 
                    }, 1000);
                }) 
            }, 1000);
        }) 
    }, 1000);
    
})

