document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        age: parseInt(document.getElementById('age').value),
        message: document.getElementById('message').value.trim(),
      };
  
      console.log("Form Data:", formData);
  
      if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill out Name, Email, and Message fields.");
        return;
      }
  
      if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
        alert("Age must be a number between 18 and 100.");
        return;
      }
  
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "response.json", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          document.getElementById("responseMessage").innerText = response.message;
  
          form.reset();
          [...form.elements].forEach(el => el.disabled = true);
        }
      };
      xhr.send();
    });
  });
  