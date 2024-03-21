import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter Obtained Marks",
        type: "number",
        name: "obtainedMarks",
    },
    { message: "Enter Total Marks", type: "number", name: "totalMarks" },
]);
//                    then calculate
console.log(answer.obtainedMarks / answer.totalMarks * 100);
