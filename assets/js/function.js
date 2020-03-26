$(async function () {
    var cityOptions;
    var districtsOptions;
    var wardsOptions;
    var so1;
    var dataJson = await $.getJSON('assets/js/local.json');
    // Hàm để load dữ liệu city từ file json
    $.each(dataJson, function (i,city) {
        cityOptions += '<option value="'+i+'">'+city.name+'</option>';
    });
    $('#city').html(cityOptions);
    // Gọi hàm xử lý load districts,wards
    DistrictsLoading(0);
    WardsLoading(0, 0);

    $('#city').change(function () {
        var i = $(this).val();
        DistrictsLoading(i);
        WardsLoading(i,0);
    });
    $('#districts').change(function () {
        var i = $(this).val();
        WardsLoading(so1, i);

    });
    function DistrictsLoading(number){
        so1 = number;
        districtsOptions = null;
        var districts = dataJson[number].districts;
        $.each(districts,function (i,dt){
            // districtsOptions = districtsOptions + '<option value="'+i+'">'+dt.name+'</option>';
            districtsOptions += '<option value="'+i+'">'+dt.name+'</option>';
        })
        $('#districts').html(districtsOptions);
    };

    function WardsLoading(number1, number2){
        // number1 là city,number2 là districts
        wardsOptions = null;
        var wards = dataJson[number1].districts[number2].wards;
        $.each(wards,function (i,wd){

            wardsOptions += '<option value="'+i+'">'+wd.name+'</option>';
        })

        $('#wards').html(wardsOptions);
    };
});
//  hàm districtsloading khai báo biến districts = city[i].districts là để load dữ liệu các quận trong thành phố đó
// sau đó thực hiện vòng lặp for để in dữ liệu ra màn hình
// khi thực hiện city.change thì chạy vào hàm districtsloading lúc này districtsOption = null, rồi thực hiện mấy dòng lệnh ở dưới
// khi in xong muốn thay đổi dữ liệu thì lại gán districtsOption = null rồi thực hiện lệnh ở dưới.
