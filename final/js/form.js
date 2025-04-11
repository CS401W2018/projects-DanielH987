document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("adviceForm");
    const message = document.getElementById("confirmationMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = {
        name: form.elements["name"].value.trim(),
        year: form.elements["year"].value,
        hardestClass: form.elements["hardestClass"].value.trim(),
        tip: form.elements["tip"].value.trim(),
      };
  
      console.log("Form Data:", formData);
  
      if (!formData.hardestClass || !formData.tip) {
        alert("Please fill out the required fields: Hardest Class and Survival Tip.");
        return;
      }
  
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "js/mock-response.json", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          message.innerText = response.message;
  
          form.reset();
          [...form.elements].forEach(el => el.disabled = true);
        }
      };
      xhr.send();
    });
  });
  