let value = prompt("who's there?", '')

if (
    value == 'Admin') {
        let value =prompt('password','')
        if(value == 'TheMaster'){altert("Welcome!")}
        if(value == 'Cancel'){altert("Canceled.")}
        else{alert("Wrong Password")}
} if (value== "Cancel") {
    alert("Canceled.")
} else{alert("I don't know you")}