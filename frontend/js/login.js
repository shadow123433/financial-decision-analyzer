const slider = document.getElementById("slider");

document.getElementById("goRegister").onclick = () => {
  slider.style.transform = "translateX(-50%)";
};

document.getElementById("goLogin").onclick = () => {
  slider.style.transform = "translateX(0)";
};

// PARTE DA SENHA SE APARECE OU N COM O ICONE 

const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const inputId = toggle.getAttribute("data-target");
    const input = document.getElementById(inputId);

    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = "🙈";
    } else {
      input.type = "password";
      toggle.textContent = "👁️";
    }
  });
});

