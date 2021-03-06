$(".remove").click(function () {
    var id = $(this).data('id');
    console.log("点击事件");

    $.post('/teachers/remove', { id }, function (data) {
        if (data.code != 200) {
            $('#myModal .modal-body').text(data.message);
            $('#myModal').modal();
            return;
        }
        location.href = '/teachers/list';
    })
})

$("#btnRemove").click(function () {
    var selected = $('.selectSingle:checked');
    if (selected.length <= 0) {
        $('#myModal .modal-body').text("请选择要删除的数据");
        $('#myModal').modal();
        return;
    }
    var ids = '';
    selected.each(function (i, ele) {
        ids += $(ele).data('id') + ',';
    })
    if (ids.length > 0) {
        ids = ids.substring(0, ids.length - 1);
    }

    $.post('/teachers/multiRemove', { ids }, function (data) {
        if (data.code != 200) {
            $('#myModal .modal-body').text(data.message);
            $('#myModal').modal();
            return;
        }
        location.href = '/teachers/list';
    })
})

$(".selectAll").click(function(){
    $('.selectSingle').prop('checked',$(this).prop('checked'));
})

$('.selectSingle').click(function(){
    $(".selectAll").prop('checked',$('.selectSingle:checked').length == $('.selectSingle').length);
})