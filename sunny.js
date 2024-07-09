// // // this and arrow function
// // const user = {
// //     username:"sanaiyla",
// //     price:'free',
// //     welcoemessage:function(){
// //         // this yani current context
// //         console.log(`${this.username}, welcome to website`);
// //         console.log(this);
// //     }
// // }
// // user.welcoemessage()
// // user.username = "sunny"
// // user.welcoemessage()
// // // console.log(this);
// function one(){
//     let username = "sanaiyla"
//     console.log(this.username);
// }
// let sunny = {
//     username :"sanaiylatrue",
//     id:function(){
//         console.log(`${this.username}`);
//     }

// }
// sunny.id()



// // AP FUNCT K ANDR THIS DOT KAR K VALUE PUT KAR K ACCESS NH KRSKTY BUT OBJECT K ANDR VALUE DECLARE KAR K USY THIS MN USE B KRSKTY



// one()
// let sunny = function(){
//  let   username = "sanaiyla"
// console.log(this.username);
// }



// jesy b declare kro funct ko ap this ko es m access nh krskty
// sunny()
let sunny = () => {
    let   username = "sanaiyla"
   console.log(this.username);
   }
   sunny()

   // es trh sy b funct ko declare kea but phr b ap usy access nh krpaye this. ko
   // yr way hy k ap funct keyword hta do and dono braces k mid main equal and greater than lga do


   const addone = (num1,num2) => {
    return num1 * num2
   }
   console.log(addone(5,5));


// ye hay implicit(no need to use return) return yani ek hi line m sb 

   const addtwo = (num1,num2) => (num1 * num2)
   // 
   // curly braces mn likha to  return likhna paray ga agr simple braces m likha to no need to use return keyword


   console.log(addone(5,5));

   const addtwoo = (num1,num2) => ({username:"sanaiyla"})

   // obj ko return krny k lye usy within simple braces phr within curly braces



console.log( addtwoo(3,3))