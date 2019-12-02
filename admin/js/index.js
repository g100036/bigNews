$(function () {
    /*1.查询个人信息
               1.1 页面一加载发送ajax请求
               1.2 响应数据之后渲染到页面  user_info
               */
    //1.1 ajax请求
    $.ajax({
        url: BigNew.user_info,
        type: 'get',
        dataType: 'json',
        success: function (backData) {
            $('.user_info>img').attr('src', backData.data.userPic);
            $('.user_center_link>img').attr('src', backData.data.userPic);
            $('.user_info>span').text("欢迎  " + backData.data.nickname);
        }
    });
    /*2.退出登录
    2.1 删除token
    2.2 跳转登录页
     */
    $('.logout').on('click', function () {
        localStorage.removeItem('token');
        window.location.href = "./login.html";
    })
})