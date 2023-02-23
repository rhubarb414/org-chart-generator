const generateHTML = (data) =>
  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/css/style.css">
        <title>Org Chart Generator</title>
    </head>

    <body>
        <nav class="navbar">
            <div class="container-fluid justify-content-center">
             <span class="navbar-brand mb-0 h1 text-light">Org Chart</span>
            </div>
        </nav>

        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title text-light">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-light">Manager type</h6>
            </div>
            <div class="card-body">
                <li class="list-group-item"><span class="fw-bold">ID:</span>${data.id}</li>
                <li class="list-group-item"><span class="fw-bold">Email:</span>${data.email}</li>
                <li class="list-group-item"><span class="fw-bold">GitHub:</span> <a href="#">more-of-an-ideas-guy</a></li>
            </div>
        </div>

    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
    </script>
    </body>
    </html>
    `;

module.exports = generateHTML;
