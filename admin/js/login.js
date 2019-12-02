$(function () {
    /* 登录功能思路
          1.给登录按钮注册点击事件
          2.阻止默认跳转事件（表单submit会自动跳转页面）
          3.获取用户名和密码
          4.非空判断
          5.ajax发送请求
          6.处理响应结果   a.成功：跳转管理系统首页    b.失败：提示用户
          */

    // 1.给登录按钮注册点击事件 input_sub
    $('.input_sub').on('click', function (e) {
        // 2.阻止默认跳转事件（表单submit会自动跳转页面）
        e.preventDefault();
        // 3.获取用户名和密码 input_txt input_pass
        var username = $('.input_txt').val().trim();
        var password = $('.input_pass').val().trim();
        // 4.非空判断
        if (username.length == 0 || password.length == 0) {
            alert('不能为空！');
            return
        }
        // 5.ajax发送请求
        $.ajax({
            url: 'http://localhost:8080/api/v1/admin/user/login',
            type: 'post',
            dataType: 'json',
            data: {
                username: username,
                password: password
            },
            success: function (backData) {
                // 6.处理响应结果       
                if (backData.code == 400) {
                    //b.失败：提示用户
                    alert(backData.msg);
                } else {
                    //a.成功：跳转管理系统首页
                    alert('登录成功！');
                    localStorage.setItem('token',backData.token);
                    window.location.href = "./index.html";
                }
            }
        });

    })
})