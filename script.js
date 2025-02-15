function showAlert(){
    alert('hello! This is a JavaScript alert.')
}
function changeText(){
    document.getElementById('text').innerHTML="text changed!";
}
function handleClick(){
    document.getElementById('ClickMessage').innerHTML='Button Clicked!';
}
function validationForm(){
    let name = document.getElementById('name').value;
    if(name==''){
        alert('Please enter our name.');
        return false;
    }
    return true;
}
function checkNumber(){
    let num =parseInt(document.getElememtById('numberInput').value);
    let result =num>10? 'Greater Than 10': '10 or less';
    document.getElementById('numberResult').innerHTML = result;
}
function checkAge(){
    let age = parseInt(document.getElementById('ageInput').value);
    if(age>=18){
        document.getElementById('ageResult').innerHTML = 'you are in adult';
    }
    else{
        document.getElementById('ageResult').innerHTML = 'You are in minor';
    }
}
function displayArrayItem(){
    let items = ['apple','banan','cherry','date','elderberry'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = items[index] || 'Invalid index';
    document.getElementById('arrayResult').innerHTML = result; 
}
