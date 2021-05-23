$(document).ready(function () {
	try {
		initEvents();
	} catch (e) {
		alert('ready: ' + e.message);
	}
});

function initEvents(){
	/*$('#').on('click', function(){
        $('#form-order').submit(function(ev){
            ev.preventDefault();
            try {
                $.ajax({
                    type:'post',
                    url : '/master/z003/create',
                    dataType: 'json',
                    loading: true,
                    data: $('#form-order').serialize(),
                    success: function(res){
                        console.log(res)
                        console.log(res.status=="200");
                        if(res.status=="200"){
                            window.location.reload();
                        }               
                    }
                })
            } catch (e) {
                alert('' + e.message);
            }
        })
                        
    })*/
    var getAll = function getListContent() {
        try {
            var data = {};
            $.ajax({
                type: 'POST',
                url: '',
                dataType: 'html',
                loading: true,
                data: data,
                success: function (res) {
                    $("#orders").empty();
                    $("#orders").append(res);
                },
                // Ajax error
                error: function (res) {
                }
            });
        } catch (e) {
            alert('' + e.message);
        }
    }    
   	
    var createOrder = function(){
		try {
            $.ajax({
                type:'post',
                url : '',
                dataType: 'json',
                loading: true,
                data: $('#form-order').serialize(),
                success: function(res){
                    console.log(res)
                    console.log(res.status=="200");
                    if(res.status=="200"){
                        window.location.reload();
                    }               
                }
            })
        } catch (e) {
            alert('' + e.message);
        }
	}
	$("#testform").on('click',function(){
		var data ={};
		data.name = $('#name-order').val();
		data.phone = $('#phone-order').val();
		data.address = $('#address-order').val();
		data.email = $('#email-order').val();
		data.date = $('#date-order').val();
		data.quantity = parseInt($('#quantity-order').val());
		data.total = $('#total-order').val()+"";
		data.note = "COD "+$('#note-order').val();
		fetch('http://localhost:8008/master/api/v1/createOrder', {
		  method: 'POST', // or 'PUT'
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		})
		.then(function(response){ console.log(response) })
		.then(data => {
			var timer = setTimeout(function() {
	            window.location='http://localhost:9091//order-success';
	         }, 2000);
		  console.log('Success:', data);
		})
		.catch((error) => {
		  console.error('Error:', error);
		});
	});
}