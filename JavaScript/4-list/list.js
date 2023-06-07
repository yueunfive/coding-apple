// array & object 데이터 바인딩
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

for (i = 0; i < $(".card").length; i++) {
  $(".card-body h5").eq(i).html(products[i].title);
  $(".card-body span").eq(i).html(products[i].price);
}
