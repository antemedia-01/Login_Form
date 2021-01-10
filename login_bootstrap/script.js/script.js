$('.input2-content').keyup(function () {
    validatePassword();

});
$('.input1-content').keyup(function () {
    validateUsernaem();
});
$('.input3-Login').on('click', function () {
    // console.log(1);
    validateUsernaem();
    validatePassword();
});


function validateUsernaem() {
    console.log(4);
    let val1 = $('.input1-content');
    let value = $('.input1-content').val();
    if (value == "") {
        val1.addClass('error_input');
    }
    else {
        val1.addClass('sucess_input');
    }
}

function validatePassword() {
    let value2 = $('.input2-content').val();
    if (value2 == "" || value2.length < 8) {
        $('.input2-content').addClass('error_input');
    }
    else {
        $('.input2-content').addClass('sucess_input');
    }
}

// val2.match(/^(0?[1-9]|1[0-2])\/((?:19|20)\d\d)$/)

$('.reset-button').click(function () {
    console.log(10);
    let arr = $('.input1-content').val();
    let arr1 = $('.input2-content').val();
    if (arr == "") {

    } else {
        $('.input1-content').val("");
    }

    if (arr1 == "") {

    } else {
        $('.input2-content').val("");
    }
});
