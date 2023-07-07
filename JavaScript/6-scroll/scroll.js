// 화면(viewport)가 스크롤 될때마다 투명도, 크기 조절
$(window).scroll(function () {
  var height = $(window).scrollTop();
  console.log(height); // console창으로 스크롤 높이 구하기
  var y1 = (-1 / 300) * height + 105 / 30; //스크롤바 높이가 750~1050이 될 때 1~0이 되는 가변적인 값
  $(".card-box").eq(0).css("opacity", y1);
  var y2 = (-1 / 300) * height + 5; //스크롤바 높이가 1200~1500이 될 때 1~0이 되는 가변적인 값
  $(".card-box").eq(1).css("opacity", y2);
  var y3 = (-1 / 3000) * height + 375 / 300; //스크롤바 높이가 750~1050이 될 때 1~0.9이 되는 가변적인 값
  $(".card-box").eq(0).css("transform", `scale(${y3})`);
  var y4 = (-1 / 3000) * height + 42 / 30; //스크롤바 높이가 1200~1500이 될 때 1~0.9이 되는 가변적인 값
  $(".card-box").eq(1).css("transform", `scale(${y4})`);
});
