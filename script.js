function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var dob = document.forms["myForm"]["dob"].value;
    var iter = document.forms["myForm"]["iter"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (dob == "") {
        alert("Date of birth must be filled out");
        return false;
    }
    if (iter == "") {
        alert("Product interest must be filled out");
        return false;
    }
    
}