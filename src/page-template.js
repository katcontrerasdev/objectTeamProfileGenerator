const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager")

const generateTeamPage = function addHtml(newMember) {   
  
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" type='text/css' href="styleTW.css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-sky-50">
    <header class="relative h-32 bg-sky-500">
      <div class="absolute inset-0 flex items-center justify-center">
         <h1 class="text-3xl text-center font-roboto">My Team</h1>
      </div> 
   </header>

     <main class="container mx-auto mt-5 border-0">     
    
        <div class="flex-column grid sm:grid-cols-2 md:grid-cols-3 gap-4" >
        <div class="max-w-md rounded shadow-md shadow-indigo">       
        <div class="p-4 bg-sky-100">
          <h1 class="text-gray-dark text-xl md:text-3xl font-roboto mt-5 mb-5">${Employee.name} </h1>
              <p class="mt-2 text-indigo-500 sm:text-l">${Employee.title}</p>
              <p class="mt-2 sm:text-l"><strong>ID:</strong> ${Employee.id} </p>
              <p class="mt-2 sm:text-l"><strong>E-mail:</strong> ${Employee.email} </p>
              <p class="mt-2 sm:text-l"><strong>Office Number:</strong> ${Employee.roleInfo}</p>
        </div>  
      </div>
        </div>
    </main>
</body>
</html>
    `;
  };

  module.exports = generateTeamPage;