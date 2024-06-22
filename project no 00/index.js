//#/user/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        type: "number",
        name: "first_number",
        message: "Enter your first number:"
    },
    {
        type: "number",
        name: "second_number",
        message: "Enter your second number"
    },
    {
        type: "list",
        name: "operator",
        message: "please slect your operation type",
        choices: ["Addition", "Substraction", "multiplication", "Division"]
    }]);
if (ans.operator === "Addition") {
    console.log(ans.first_number + ans.second_number);
}
else if (ans.operator === "Substraction") {
    console.log(ans.first_number - ans.second_number);
}
else if (ans.operator === "Multiplication") {
    console.log(ans.first_number * ans.second_number);
}
else {
    console.log(ans.first_number / ans.second_number);
}
