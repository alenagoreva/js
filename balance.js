/**
 * Created by Administrator on 15.04.2016.
 */
var balance = 7000;
var cameraOn = true;
var sum =0;
 function k(amount){
for (var i=0;amount<balance;i++){
         balance=balance-amount;
         sum = sum + amount;
 }
return balance;}
k(2000);
alert(sum);
alert(balance)

