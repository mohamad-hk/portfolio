<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./Css/bootstrap.min.css">
  <link rel="stylesheet" href="./Fonts/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="./Css/index.css">
  <title>Portfolio</title>
</head>

<body>
  <?php
  require_once("./Assist/header.php");
  ?>
  <div class="container-fluid">
    <div class="row"id="slider" >
      <div class="col-12 position-relative" >
        <div class="position-absolute">
          <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, ipsum
          </h2>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, ipsum
          </p>
        </div>
        
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center">
      <h1 class="text-center">Contact us</h1>
      <div class="col-10 col-md-8 col-lg-6  ">
        <form action="" method="post">
          <div class="mb-3">
            <label  class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" >
          </div>
          <div class="mb-3">
            <label  class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button class="btn btn-success">submit</button>
        </form>
      </div>
    </div>
  </div>
</body>
<script src="./Script/bootstrap.bundle.min.js"></script>

</html>