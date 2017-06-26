$('#file').change(function (e) {
	$("form").data({files: e.target.files});
});

$("form").submit(function (e) {
	var files = $("form").data().files;

	var data = new FormData();
	$.each(files, function (key, value) {
		data.append(key, value);
	});

	$.ajax({
		url: '/upload/',
		type: 'POST',
		data: data,
		cache: false,
		processData: false, //this is important
		contentType: false, 
		// set the above three option to false is the default setting for 
		// file upload, you can find a more indepth explanation here
		// http://www.jianshu.com/p/46e6e03a0d53
		// 
		error: function (jXhr, status) {
			alert('error: ' + status);
		},
		success: function (data) {
			console.log(data);
			alert('file size: ' + data.size + 'byte');
		}
	});

	e.preventDefault();
	return false;
});