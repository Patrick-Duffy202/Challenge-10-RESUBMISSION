const createManager = function (manager) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
};

const createEngineer = function (engineer) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

const createIntern = function (intern) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

generatePage = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        if (role === 'Manager') {
            const managerCard = createManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            pageArray.push(engineerCard);
        }
 
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            pageArray.push(internCard);
        }
        
    }

     
    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamHtml(employeeCards); 
    return generateTeam;

}

const generateTeamHtml = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Meet My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      
    </head>
    <body>
      <header>
          <nav class="flex-row" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Meet the Team</span>
          </nav>
      </header>
      <main class="container my-5">
            <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
            </div>
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Patrick </h3>
      </footer>
    </body>
    </html>
    `;
  };

  module.exports = generatePage; 