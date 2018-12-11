//表单提交
var o_url = window.location.href;
 // 验证手机号
function isPhone(phone){
    if (!phone) {
        return false;
    }
    var m = phone.replace(/ /g, '');
    return /^1[3|4|5|7|8]\d{9}$/.test(m) ? m : false;
}
$(function() {
    $('.submit').on('click', function() {
        if(!isPhone($("input[name='o_tel']").val())){
            alert('请填写正确的手机号码')
            return false;
        }
        $('.submit').attr('disabled',true).text('提交中...'); // 防止重复点击
        $.ajax({
             type: "POST",
             url: "http://acq.itxdl.cn/xxltg",
             dataType: "json",
             data: {
                o_name: $("input[name='o_name']").val(), 
                o_tel: $("input[name='o_tel']").val(), 
                o_source: $("input[name='o_source']").val(),
                o_url: o_url,
                o_qq: '无'
             },
             error: function() {
                        $('.submit').removeAttr('disabled').text('立即提交');
                        $('.form input').val('');
                        alert('提交失败，请联系客服');
                    },
             success: function(data) {
                        $('.submit').removeAttr('disabled').text('立即提交');
                        if (data == 0) {
                            alert('提交成功');
                            return false;
                        }
                        $('.form input').val('');
                        alert(data);
                     }
         });
    });
});
