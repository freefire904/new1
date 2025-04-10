# new1

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Fully Responsive Center Container</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      background: linear-gradient(to right, #ece9e6, #ffffff);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .center-wrapper {
      background: #ffffff;
      border-radius: 20px;
      padding: 2.5vw;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2.5vw;
      max-width: 1400px;
      width: 90%;
      transition: all 0.3s ease-in-out;
    }

    .card {
      flex: 1 1 250px;
      max-width: 320px;
      height: 240px;
      background: #f9f9f9;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      transition: transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
      cursor: pointer;
      padding: 20px;
      text-align: center;
    }

    .card:hover {
      transform: translateY(-10px) scale(1.03);
      background: linear-gradient(135deg, #00c6ff, #0072ff);
      color: white;
      box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 1.4rem;
    }

    .card p {
      font-size: 1rem;
    }

    .card:hover h3,
    .card:hover p {
      color: white;
    }

    /* 📱 Small phones */
    @media (max-width: 480px) {
      .center-wrapper {
        padding: 5vw;
        gap: 20px;
      }

      .card {
        width: 100%;
        max-width: 100%;
        height: auto;
        padding: 15px;
      }

      .card h3 {
        font-size: 1.2rem;
      }

      .card p {
        font-size: 0.95rem;
      }
    }

    /* 📱 Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
      .card {
        max-width: 90%;
        height: auto;
      }

      .card h3 {
        font-size: 1.3rem;
      }

      .card p {
        font-size: 0.95rem;
      }
    }

    /* 💻 Small Laptops */
    @media (min-width: 769px) and (max-width: 1024px) {
      .center-wrapper {
        gap: 30px;
      }

      .card {
        max-width: 45%;
        height: 230px;
      }
    }

    /* 💻 Standard Laptops & Desktops */
    @media (min-width: 1025px) and (max-width: 1920px) {
      .card {
        height: 260px;
      }
    }

    /* 🖥️ 2K & 4K Screens */
    @media (min-width: 1921px) {
      .center-wrapper {
        padding: 3vw;
        max-width: 1800px;
        gap: 3vw;
      }

      .card {
        height: 320px;
        max-width: 400px;
      }

      .card h3 {
        font-size: 2rem;
      }

      .card p {
        font-size: 1.1rem;
      }
    }

  </style>
</head>
<body>

  <div class="center-wrapper">
    <div class="card">
      <h3>Design</h3>
      <p>Modern, scalable and elegant visual components.</p>
    </div>
    <div class="card">
      <h3>Responsive</h3>
      <p>Seamless across all devices: phones, tablets, desktops.</p>
    </div>
    <div class="card">
      <h3>Performance</h3>
      <p>Optimized for speed and smooth user experience.</p>
    </div>
  </div>

</body>
</html>
**<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Fully Responsive Center Container</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      background: linear-gradient(to right, #ece9e6, #ffffff);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .center-wrapper {
      background: #ffffff;
      border-radius: 20px;
      padding: 2.5vw;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2.5vw;
      max-width: 1400px;
      width: 90%;
      transition: all 0.3s ease-in-out;
    }

    .card {
      flex: 1 1 250px;
      max-width: 320px;
      height: 240px;
      background: #f9f9f9;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
      transition: transform 0.4s ease, background 0.4s ease, box-shadow 0.4s ease;
      cursor: pointer;
      padding: 20px;
      text-align: center;
    }

    .card:hover {
      transform: translateY(-10px) scale(1.03);
      background: linear-gradient(135deg, #00c6ff, #0072ff);
      color: white;
      box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 1.4rem;
    }

    .card p {
      font-size: 1rem;
    }

    .card:hover h3,
    .card:hover p {
      color: white;
    }

    /* 📱 Small phones */
    @media (max-width: 480px) {
      .center-wrapper {
        padding: 5vw;
        gap: 20px;
      }

      .card {
        width: 100%;
        max-width: 100%;
        height: auto;
        padding: 15px;
      }

      .card h3 {
        font-size: 1.2rem;
      }

      .card p {
        font-size: 0.95rem;
      }
    }

    /* 📱 Tablets */
    @media (min-width: 481px) and (max-width: 768px) {
      .card {
        max-width: 90%;
        height: auto;
      }

      .card h3 {
        font-size: 1.3rem;
      }

      .card p {
        font-size: 0.95rem;
      }
    }

    /* 💻 Small Laptops */
    @media (min-width: 769px) and (max-width: 1024px) {
      .center-wrapper {
        gap: 30px;
      }

      .card {
        max-width: 45%;
        height: 230px;
      }
    }

    /* 💻 Standard Laptops & Desktops */
    @media (min-width: 1025px) and (max-width: 1920px) {
      .card {
        height: 260px;
      }
    }

    /* 🖥️ 2K & 4K Screens */
    @media (min-width: 1921px) {
      .center-wrapper {
        padding: 3vw;
        max-width: 1800px;
        gap: 3vw;
      }

      .card {
        height: 320px;
        max-width: 400px;
      }

      .card h3 {
        font-size: 2rem;
      }

      .card p {
        font-size: 1.1rem;
      }
    }

  </style>
</head>
<body>

  <div class="center-wrapper">
    <div class="card">
      <h3>Design</h3>
      <p>Modern, scalable and elegant visual components.</p>
    </div>
    <div class="card">
      <h3>Responsive</h3>
      <p>Seamless across all devices: phones, tablets, desktops.</p>
    </div>
    <div class="card">
      <h3>Performance</h3>
      <p>Optimized for speed and smooth user experience.</p>
    </div>
  </div>

</body>
</html>
**
