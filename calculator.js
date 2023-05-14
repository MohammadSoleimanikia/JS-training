

while(true){
    let operator= prompt("please insert one operator and hit enter (*, /, +, -, %, ^) \n insert q for exit:");
    if(operator=='q')
        {
        break;
        }
    let number1 =parseFloat(prompt("please enter first number:"));
    let number2 =parseFloat(prompt("please enter second number:"));

    if(isNaN(number1) ||isNaN(number2))
        {
        alert("please write a valid number");
        continue;
        }

    let result;
    if(operator=='+')
        {
        result=number1+number2;
        }
    else if(operator=='-')
        {
        result=number1-number2;
        }
    else if(operator=='*')
        {
        result=number1*number2;
        }
    else if(operator=='/')
        {
        result=number1/number2;
        }
    else if(operator=='%')
        {
        result=number1%number2;
        }
    else if(operator=='^')
        {
        result=number1**number2;
        }
    else
        {
        alert("please choose a valid operator");
        continue;
        }
    alert(`the result of ${number1}${operator}${number2} is: ${result}`);
}