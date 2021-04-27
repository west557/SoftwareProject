
// The form controls accessing the data from the index.html file. 

function validation(){
  //  alert("working");
  var to = document.getElementById("to").value;
  var location = document.getElementById('location').value;
  var account = document.getElementById('account');
  var message = document.getElementById('message');
  var error_message = document.getElementById('error_message');
  var text;

// alert("Transaction for " + to + " has been cleared!");


// If statements which analyse the transaction and show an alert if it is suspicious. 

    if(to === 'Scott West' ||to === 'Alessio Bonti' ||to === 'Michael Jordan' ||to === 'James Bay') {
        error_message.style.padding = "40px";
        text = "Refer to Fraud! Possible Criminal.";
        error_message.innerHTML = text;
        return false; 
    }

    if(location === 'Afghanistan' ||location === 'Iraq' ||location === 'Melbourne') {
        error_message.style.padding = "40px";
        text = "Cancel Immediately! Suspicious location.";
        error_message.innerHTML = text;
        return false; 
    }

    if(message == 'west' ||message == 'bell' ||message == 'the world') {
        error_message.innerHTML = text; 
        text = "investigate further - possible criminal code name!";
        error_message.innerHTML = text;
        return false;
    }

    if(account == '123456' ||message == '12345' ||message == '1234567') {
        error_message.innerHTML = text; 
        text = "This is a criminal account - do not proceed. ";
        error_message.innerHTML = text;
        return false;
    }

    alert("Transaction not suspicious. Please proceed!")
    return true; 
}
