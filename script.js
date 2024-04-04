let btn = document.querySelectorAll('#button');

var string = "";

let screen = document.querySelector('.screen');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            screen.value = string;

        }
        else if(e.target.innerHTML == 'D') {
            string = string.substring(0, string.length-1);
            screen.value = string;
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            screen.value = string;
        }
        
        else {
            string += e.target.innerHTML;
            screen.value = string;
        }
    });
}
