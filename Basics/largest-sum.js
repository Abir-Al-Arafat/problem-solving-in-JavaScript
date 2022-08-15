// write a program which takes 3 numbers as input and prints the largest among them

num1 = prompt("Enter 1st number: ");
num2 = prompt("Enter 2nd number: ");
num3 = prompt("Enter 3rd number: ");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if (num1>num2 && num1>num3){
    document.write("larges number is: "+ num1);
}else if (num2>num1 && num2>num3){
    document.write("largest number is: ", num2);
}else{
    document.write("largest number is: ", num3);
}

