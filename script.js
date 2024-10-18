let stay = document.getElementById("yes");
let person = document.getElementById("persons")
let noofdays = document.getElementById("days");
let pilg = document.getElementById("pilgrimage")
let herit =document.getElementById("heritage");
let hill =document.getElementById("hills");
let fall =document.getElementById("falls");
let beach =document.getElementById("beach");
let adv =document.getElementById("adventure");


function totalservice(){
    let count =0;
    if(pilg.checked){
        count ++;
    }
    if(herit.checked){
        count ++;
    }
    if(hill.checked){
        count ++;
    }
    if(fall.checked){
        count ++;
    }
    if(beach.checked){
        count ++;
    }
    if(adv.checked){
        count ++;
    }
    return count;
}

function sum(){
    let sum = 0;
    if(pilg.checked){
        sum = sum + parseInt(pilg.value);
    }
    if(herit.checked){
        sum = sum + parseInt(herit.value);
    }
    if(hill.checked){
        sum = sum + parseInt(hill.value);
    }
    if(fall.checked){
        sum = sum + parseInt(fall.value);
    }
    if(beach.checked){
        sum = sum + parseInt(beach.value);
    }
    if(adv.checked){
        sum = sum + parseInt(adv.value);
    }
    return sum;
}

function dis(sum){
    let discount = sum*parseInt(person.value);
    return discount;    
}
function disable(){
    document.getElementById("days").disabled = true;
}

function undisable(){
    document.getElementById("days").disabled = false;
}


function final(){
    event.preventDefault();
    let service= totalservice();
    let bill = sum();
    let cost = dis(bill);
    let staycost = cost + (parseInt(noofdays.value)*parseInt(person.value)*150);
    
   
    if(service<=3){
        if(stay.checked){
            bill = staycost;
            result.innerHTML = `Your preferred package cost ${bill}$`
        }
        else{
            result.innerHTML = `Your preferred package cost ${cost}$`
        }
    }

    if(service>3){
        offer = cost - (cost*(15/100));
        if(stay.checked){
        offer = staycost;
        result.innerHTML = `Your preferred package cost Rs.${offer}$`
        }
        else{
            result.innerHTML = `Your preferred package cost Rs.${offer}$`
        }
    }
}