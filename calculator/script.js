let btn = document.querySelectorAll('#button');

var string = "";

let screen = document.querySelector('.screen');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            screen.value = string;

        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            screen.value = string;
        }
        
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            screen.value = string;
        }
    });
}
