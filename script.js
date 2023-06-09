<!DOCTYPE html>
<html>
<head>
  <title>Contact Form</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
 <center> <h1>Contact Form</h1>
    
  <form id="contactForm" onsubmit="return validateForm()">

    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required>
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <div>
      <label>Preferred Contact Method:</label>
      <input type="radio" id="contactEmail" name="contactMethod" value="email" checked>
      <label for="contactEmail">Email</label>
      <input type="radio" id="contactPhone" name="contactMethod" value="phone">
      <label for="contactPhone">Phone</label>
    </div>
    <div>
      <label for="newsletter">Subscribe to Newsletter:</label>
      <input type="checkbox" id="newsletter" name="newsletter">
    </div>
    <div>
      <input type="button" value="Submit" onclick="submitForm()">
    </div>
  </form>
  <script src="script.js"></script></center>
</body>
</html>