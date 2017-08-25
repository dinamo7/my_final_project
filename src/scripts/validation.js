(function ($) {
   $("#validationForm").validate({
       rules: {
           name:{
               required: true,
               name: true,
               minlength: 4
           },

           password:{
               required: true,
               password: true,
               minlength: 8
           },
           massages: {
               name: {
                   required: "Please, enter the name.",
                   minlength: jQuery.format("Length must be longer than {0}-x characters!")
               },

               password: {
                   required: "Please, enter password.",
                   minlength: jQuery.format("Length must be longer than {0}-x characters!")
               }
           }
       }
   });


    $("#formRegistration").validate({
        rules: {
            name:{
                required: true,
                name: true,
                minlength: 4
            },

            password:{
                required: true,
                password: true,
                minlength: 8
            },

            phone:{
                required: true,
                minlength: 12
            },
            email:{
                required: true,
                email: true,
                minlength: 4
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
                },
                phone: {
                    required: "Please, enter the phone.",
                    minlength: jQuery.format("Length must be longer than {0}-x characters!")
                }

            }
        }
    })
});