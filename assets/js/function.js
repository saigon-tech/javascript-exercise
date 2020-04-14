$(function () {
    $("#loginForm").validate({
        rules:{
            username:{
                required:true,
                pattern:'^[a-zA-Z]+$'
            },
            password:{
                required:true,
                minlength:8,
                pattern: '^\\S*$'
            },
            fullname:{
                required: true,
                maxlength:50
            },
            birthday:"required",
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            username:{
                required:"Vui lòng nhập username của bạn !",
                pattern: "Username là alphabet không chứa số và khoảng trống !"
            },
            password:{
                required:"Vui lòng nhập password của bạn !",
                minlength: "Password của bạn ít hơn 8 ký tự,mời nhập lại !",
                pattern: "Password không chứa khoảng trống !"
            },
            fullname:{
                required:"Vui lòng nhập name của bạn !",
                maxlength: "Name không được quá 50 ký tự !"
            },
            birthday: "Vui lòng nhâp ngày sinh của bạn !",
            email:{
                required:"Vui lòng nhập email của bạn !",
                email:"Email không đúng format (dvphuc.sgt@gmail.com) !"
            }
        }
    });
    $('#birthday').datepicker();
    $(".logbtn").click(function () {
        if ($("#loginForm").valid()) {
            alert("Successfully");
        }
    });
    // $("#birthday").on("change", function() {
    //     this.setAttribute(
    //         "data-date",
    //         moment(this.value, "YYYY-MM-DD")
    //             .format( this.getAttribute("data-date-format") )
    //     )
    // }).trigger("change")
});
