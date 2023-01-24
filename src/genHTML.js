function genIntern(data) {
    const allHtml =[]
for (let i = 0; i < data.length; i++) {
    const emp = data[i];
    
    const html = `<div class="card" style="width: 18rem;">
    <div class="card-header">
      Intern:${emp.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${emp.id}</li>
      <li id="contact" class="list-group-item"><a href="mailto:ryanbairdchilders@gmail.com">Email:${emp.email}</a></li>
      <li class="list-group-item">School:${emp.school}</li>
    </ul>
  </div>`
  allHtml.push(html)
}
return allHtml.join("")
}
function genEngineer(data) {
    const allHtml =[]
for (let i = 0; i < data.length; i++) {
    const emp = data[i];
    
    const html = `<div class="card" style="width: 18rem;">
    <div class="card-header">
      Engineer:${emp.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${emp.id}</li>
      <li id="contact" class="list-group-item"><a href="mailto:ryanbairdchilders@gmail.com">Email:${emp.email}</a></li>
      <li class="list-group-item">Github Username:${emp.github}</li>
    </ul>
  </div>`
  allHtml.push(html)
}
return allHtml.join("")

}
function genHtml(team) {
return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <title>Team profile</title>


</head>

<body>


    <div class="top-container">
      <h1>My Team</h1>
    </div>
  

  <main class="team-cards">
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        Manager:${team[0].name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${team[0].id}</li>
        <li id="contact" class="list-group-item"><a href="mailto:ryanbairdchilders@gmail.com">${team[0].email}</a></li>
        <li class="list-group-item">Office:${team[0].office}</li>
      </ul>
    </div>
    ${genIntern(team.filter(member => member.getRole() === "intern"))}
    ${genEngineer(team.filter(member => member.getRole() === "engineer"))}
</main>
</body>`
}

module.exports = genHtml