const textInput = document.getElementById("textInput");


function text(sum){

    let jiryo=150;
    let total=0;

    switch(true){
        case(sum<40):
            total=jiryo*0.8*sum;
            break;
        case(sum==40):
            total=jiryo*sum;
            break;
    }
    console.log(total);
}

text(30);