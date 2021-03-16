//Form Validation
function validation(){
    if (document.user-reg-form.name.value == "") {
        alert("Please fill your name appropriately");
        document.user-reg-form.name.focus();
        return false;
    }
    if (document.user-reg-form.country.value == "") {
        alert("Please fill entry for your country");
        document.user-reg-form.country.focus();
        return false;
    }

    if (document.user-reg-form.payment.value == "") {
        alert("Please fill your Payment Date");
        document.user-reg-form.payment.focus();
        return false;
    }

    if (document.user-reg-form.company.value == "") {
        alert("Please fill your company name");
        document.user-reg-form.company.focus();
        return false;
    }
    if (document.user-reg-form.acompany.value == "") {
        alert("Please fill your company address");
        document.user-reg-form.acompany.focus();
        return false;
    }
    
    if (document.user-reg-form.phone.value == "") {
        alert("Please fill your phone number");
        document.user-reg-form.phone.focus();
        return false;
    }
    if (document.user-reg-form.email.value == "") {
        alert("Please fill your email address");
        document.user-reg-form.email.focus();
        return false;
    }
    return (true);
}

function submitForm() {
    document.getElementById('form1').submit() = "user-list.html";
}