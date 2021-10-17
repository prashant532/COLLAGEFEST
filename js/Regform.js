function REGISTRATION() {
    var name =
        document.forms["RegForm"]["Name"];
    var email =
        document.forms["RegForm"]["EMail"];
    var phone =
        document.forms["RegForm"]["Mobile no."];

    var College =
        document.forms["RegForm"]["College"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (DOB.value == "") {
        window.alert("Please enter your Date Of Birth.");
        address.focus();
        return false;
    }
    if (College.value == "") {
        window.alert("Please enter your College name.");
        address.focus();
        return false;
    }
    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert("Please enter your mobile number.");
        phone.focus();
        return false;
    }

    if (what.selectedIndex < 1) {
        alert("Please enter your course.");
        what.focus();
        return false;
    }

    return true;
}