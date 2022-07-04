
function orderPizza(orderDetails,message){
    orderDetails();
    console.log(message);
}

function pizzaType(name){
    console.log(`I would like to order :${name}`);
}
function confirmOrder(){
    console.log(`Your order is confirmed`);

}
function checkOut(){
    console.log(`Pay amount at delivery`);
}
orderPizza(()=>pizzaType("Extra"),"cheese pizza")
// orderPizza(pizzaType("Extra"),"Cheese Pizza");
orderPizza(confirmOrder,"Thanks for ordering !");
orderPizza(checkOut,"Its free from us, no need to pay");
