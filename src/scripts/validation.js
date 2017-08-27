

jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});
$(document).ready(function () {

    $( "#validationForm" ).validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            password:{
                required: true,
                minlength: 8
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});


$(document).ready(function () {

   $("#formRegistration").validate({
       rules: {
           name:{
               required: true,
               minlength: 4
           },
           password:{
               required: true,
               password: true,
               minlength: 8
           },

           email:{
               required: true,
               email: true,
               minlength: 5
           }

       },
       massages: {
           name: {
               required: "Please, enter the name.",
               minlength: jQuery.format("Length must be longer than {0}-x characters!")
           },

           password: {
               required: "Please, enter password.",
               minlength: jQuery.format("Length must be longer than {0}-x characters!")
           },
           email: {
               required: "Please, enter the email.",
               minlength: jQuery.format("Length must be longer than {0}-x characters!")
           }
       },
       submitHandler: function(form) {
           form.submit();
       }
   });
});
