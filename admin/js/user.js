$(function () {
    //1.页面一加载：ajax请求个人详情信息，渲染页面
    $.ajax({
        url: 'http://localhost:8080/api/v1/admin/user/detail',
        type: 'get',
        dataType: 'json',
        success: function (backData) {
            console.log(backData);

            for (var key in backData.data) {
                $('input.' + key).val(backData.data[key]);
            }
            $('.user_pic').attr('src', backData.data.userPic);
        }
    });
    //2.文件预览
    $('#exampleInputFile').change(function () {
        //1.2 获取用户选择的图片
        var file = this.files[0];
        //1.3 将文件转为src路径
        // console.log(file);
        var url = URL.createObjectURL(file);
        //1.4 将url路径赋值给img标签的src
        $('.user_pic').attr('src', url);
        // console.log(typeof url);
        // console.log(url);

    })
    //3.编辑个人信息(fromdata上传文件)
    $('.btn-edit').on('submit', function (e) {
        //禁用表单默认提交事件
        e.preventDefault();
        //创建FormData对象：参数是表单dom对象
        $.ajax({
            url: BigNew.user_edit,
            type: 'post',
            dataType: 'json',
            data: new FormData(this), //这里不能传图片进去
            // username:$('#inputEmail1').val(),
            // nickname:$('#inputEmail2').val(),
            // email:$('#inputEmail3').val(),
            // // user_pic:$('#user_pic').attr('src'),
            // password:$('#inputEmail4').val(),
            contentType: false,
            processData: false,
            success: function (backData) {
                // 刷新整个页面 
                console.log(backData);
                parent.window.location.reload();

            }
        });
    });
})