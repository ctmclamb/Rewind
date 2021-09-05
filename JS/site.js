//Get the values from the page or string 
//aka controller function
function getValue() {

    doument.getElementById("alert").classlist.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}




//Reverse the string
//aka logic function
function reverseString(userString) {


    let revString =[];
    // bobby 
    //nambe[0]="b";
    //nambe[4]="y";
    // last position in an array name.length -1

    //reverse a string using a for loop

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
        
    }
        return revString

}





//Display the string in reverse 
//view function
function displayString() {

    //wrrite the message to the page
    document.getElementById("msg").innerHTML = `Your String reversed is : ${reverseString}`;
    //turn on the alert box
    document.getElementById("alert").classList.remove('invisble')


}

