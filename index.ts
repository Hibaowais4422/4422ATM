#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance =50000;//dollar
let myPin =4422;

    console.log(`Your current balance is :${myBalance}`);
    console.log(`PIN Code :`);


let  pinNumber= await inquirer.prompt
(
    [
        {
            message: "Enter your pin  number",
            name:"pin",
            type:"number"
        }
    ]
);
if(pinNumber.pin === myPin)
{
    console.log( "Your pin code is correct")
    

   let  operAtionAns = await inquirer.prompt(
         [
      {
        name:"operation",
        message:"plz select the  opition ",
        type:"list",
        choices:[ "WithDraw","checkBalance"]
     }
        ]
                                            );

        if(operAtionAns.operation ==="WithDraw")
     { 
            let amountAns = await inquirer.prompt
        (
            [
                {
                    name:"amount",
                    message :"enter your  amount",
                    type:"list",
                choices:[10000,20000,30000,40000]
                } 
            ]
        );

        myBalance-=amountAns.amount;
        console.log("your  remaining balance is:" +  myBalance);
     }

        // if(myBalance <= amountAns.amount){
        //     console.log( " insufficient ammount !");
        //         }
                    
    
       else if (operAtionAns.operation === "checkBalance") {
    console.log(`your balance is:` + myBalance);
    } else
     {
    console.log("incorrect your pin code");
    }
}
