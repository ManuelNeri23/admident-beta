$(document).ready(function(){
  $("#my-calendar").zabuto_calendar({
    language: "es",
    today: true,
     weekstartson: 0,
  });
  $("#side-calendar").zabuto_calendar({
    language: "es",
    today: true,
     weekstartson: 0,
  });
  showDate();
  sideBar();
  setActiveIcon();
  //slideDownButton();
});
