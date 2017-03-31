function showDate(){
  var width=$('.schedule>tbody>tr>td:nth-child(2)').css('width');
  console.log(width);
  $('.date').css('width',parseInt(width)-2);
}

function setActiveIcon() {
  var img=$('.sidenav>a.active>img').attr('src');
  var active=img.split('.');
  console.log(active[0]+'-blue.'+active[1]);
  $('.sidenav>a.active>img').attr('src', active[0]+'-blue.'+active[1]);
}
// function slideDownButton(){
//
//   $('#overlay-name').keyup(function(){
//     //console.log('lokote');
//   if($(this).val().length){
//     $('.form-overlay a').show();
//   }
//   else
//     $('.form-overlay a').hide();
// });
// }
