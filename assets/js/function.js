$(function () {
    $('.logbtn').click(function (e) {
        e.preventDefault();
        var text;
        var lg_id = $('#lg_id').val();
        var password = $('#password').val();
        var name = $('#name');
        var birthday = $('#birthday').val();
        var email = $('#email').val();
        var bien = new RegExp('\s');
        switch (true) {
            case (lg_id == "" || bien.test(lg_id)):
                $('.error_id').html("Login ID can not be empty or do not contain spaces");
                break;
            case (password == "" || password.length <= 8 || bien.test(password)):
                $('.error_pw').html("Password Can not be empty or password at least 8 characters or do not contain spaces");
                break;
            case (name == "" || name.length > 50):
                $('.error_name').html("Name can't exceed 50 characters");
                break;
            case(email == "" || bien.test(email)):
                $('.error_email').html("Email can not be empty or do not contain spaces");
                break;
            default:
                alert("All Pass");
        }
    });
    $("#birthday").on("change", function() {
        this.setAttribute(
            "data-date",
            moment(this.value, "YYYY-MM-DD")
                .format( this.getAttribute("data-date-format") )
        )
    }).trigger("change")
});
