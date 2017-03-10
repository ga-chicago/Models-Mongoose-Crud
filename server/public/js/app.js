console.log("responding");

$('.deleteTaco').on('click', function(e){
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');
	$.ajax({
		url: '/taco/' + id ,
		type: 'DELETE',
		success: function(result){
			console.log(result);
			window.location.reload();
		},
		error: function(err){
			console.log(err);
		}
	});
});

$('.deleteRito').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');
	$.ajax({
		url: '/burrito/' + id,
		type: 'DELETE',
		success: function(response){
			console.log(response);
			window.location.reload();
		}
	})
})

$('.editTaco').on('click', function(e){
	var $row = $(e.target).parent().parent();
	var id = $row.data('id');

	var protien = $row.find('.protien').val(),
	    shell = $row.find('.shell').val(),
	    inches = $row.find('.inches').val(),
	    salsa = $row.find('.salsa').val(),
	    rice = $row.find('.rice').val(),
	    beans = $row.find('.beans').val(),
	    fajitaVeg = $row.find('.fajitaVeg').val(),
	    cheese = $row.find('.cheese').val(),
	    cheeseType = $row.find('.cheeseType').val(),
	    comment = $row.find('.comment').val();
	

	var updatedTaco = {
		protien: protien,
		shell: shell,
		inches: inches,
		salsa: salsa,
		rice: rice,
		beans: beans,
		fajitaVeg: beans,
		cheese: cheese,
		cheeseType: cheeseType,
		comment: comment
	};
	$.ajax({
		url: '/taco/' + id,
		type: 'PATCH',
		data: updatedTaco,
		success: function(result){
			console.log(result);
		},
		error: function(err){
			console.log(err);
		}
	})
});

$('.editRito').on('click', function(e){
	var row = $(e.target).parent().parent();
	var id = row.data('id');

	var protien = $row.find('.protien').val(),
	    shell = $row.find('.shell').val(),
	    inches = $row.find('.inches').val(),
	    salsa = $row.find('.salsa').val(),
	    rice = $row.find('.rice').val(),
	    beans = $row.find('.beans').val(),
	    fajitaVeg = $row.find('.fajitaVeg').val(),
	    cheese = $row.find('.cheese').val(),
	    cheeseType = $row.find('.cheeseType').val(),
	    comment = $row.find('.comment').val();


	var updatedRito = {
		protien: protien,
		shell: shell,
		inches: inches,
		salsa: salsa,
		rice: rice,
		beans: beans,
		fajitaVeg: beans,
		cheese: cheese,
		cheeseType: cheeseType,
		comment: comment
	}

	$.ajax({
		url: '/burrito/' + id,
		type: 'PATCH',
		data: updatedRito,
		success: function(response){
			console.log(response);
		},
		error: function(error){
			console.log(error);
		}
	});
});
