function error()
{
if(document.batloi.txtName.value=="")
{
$("#teninput").css('background', 'red');	
$("#teninput").css('color', 'white');
$('.error').html('Vui lòng nhập tên của bạn');
document.batloi.txtName.focus();
error.preventDefault(); 
}
else {
$('.error').html('');
$("#teninput").css('background', '#F0F0F0');
$("#teninput").css('color', 'black');
}

if(document.batloi.txtEmail.value=="")
{
$("#emailinput").css('background', 'red');	
$("#emailinput").css('color', 'white');
$('.error').html('Vui lòng nhập Email');
document.batloi.txtEmail.focus();
error.preventDefault(); 
} else {
$('.error').html('');
$("#emailinput").css('background', '#F0F0F0');
$("#emailinput").css('color', 'black');
}
}