// <<<<<<< sajid-khatri
// Dark / Light mode toggle
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
// =======
// Dark / Light mode toggle
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}



// ========================================
// CHECKLIST FUNCTIONALITY
// ========================================

const checklistBoxes = document.querySelectorAll(".checklist-box");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const resetChecklist = document.getElementById("resetChecklist");

function updateChecklistProgress() {

  const totalItems = checklistBoxes.length;

  const completedItems =
    document.querySelectorAll(".checklist-box:checked").length;

  let percentage = 0;

  if (totalItems > 0) {
    percentage = Math.round(
      (completedItems / totalItems) * 100
    );
  }

  if (progressText) {
    progressText.textContent =
      percentage + "% Completed";
  }

  if (progressFill) {
    progressFill.style.width =
      percentage + "%";
  }
}


// Checkbox tick / untick
checklistBoxes.forEach(function(box) {

  box.addEventListener("change", function() {

    updateChecklistProgress();

  });

});


// Reset checklist
if (resetChecklist) {

  resetChecklist.addEventListener("click", function() {

    checklistBoxes.forEach(function(box) {

      box.checked = false;

    });

    updateChecklistProgress();

  });

}


// Starting progressss
if (checklistBoxes.length > 0) {
  updateChecklistProgress();
}

// ========================================
// EMERGENCY CONTACT SEARCH
// ========================================

const contactSearch = document.getElementById("contactSearch");

if (contactSearch) {

  contactSearch.addEventListener("input", function () {

    const searchText = this.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".contact-cards .card");

    cards.forEach(function (card) {

      const serviceName = card.querySelector("h3").textContent.toLowerCase();

      if (serviceName.includes(searchText)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });

}


// ========================================
// FIRST AID SHOW / HIDE
// ========================================

const aidButtons = document.querySelectorAll(".aid-toggle");

aidButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const content = button.nextElementSibling;

    content.classList.toggle("show");

    if (content.classList.contains("show")) {
      button.textContent = "Hide Steps";
    } else {
      button.textContent = "Show Steps";
    }

  });

});


// ========================================
// EMERGENCY CATEGORY SELECTOR
// ========================================

const emergencyCategory =
  document.getElementById("emergencyCategory");

const emergencyResult =
  document.getElementById("emergencyResult");


if (emergencyCategory) {

  emergencyCategory.addEventListener("change", function () {

    const category = this.value;


    if (category === "medical") {

      emergencyResult.innerHTML = `
        <h3>🚑 Medical Emergency</h3>

        <ul>
          <li>Stay calm and keep the person safe.</li>
          <li>Call emergency medical services immediately.</li>
          <li>Check if the person is conscious and breathing.</li>
          <li>Follow instructions given by emergency responders.</li>
        </ul>
      `;

    }


    else if (category === "fire") {

      emergencyResult.innerHTML = `
        <h3>🔥 Fire Emergency</h3>

        <ul>
          <li>Leave the building as quickly and safely as possible.</li>
          <li>Do not use elevators during a fire.</li>
          <li>Stay low if there is smoke.</li>
          <li>Call the Fire Brigade from a safe location.</li>
        </ul>
      `;

    }


    else if (category === "accident") {

      emergencyResult.innerHTML = `
        <h3>🚗 Road Accident</h3>

        <ul>
          <li>Move to a safe location if possible.</li>
          <li>Call emergency services.</li>
          <li>Do not unnecessarily move seriously injured people.</li>
          <li>Give responders the exact accident location.</li>
        </ul>
      `;

    }


    else if (category === "bleeding") {

      emergencyResult.innerHTML = `
        <h3>🩸 Severe Bleeding</h3>

        <ul>
          <li>Apply firm direct pressure with a clean cloth or dressing.</li>
          <li>Keep pressure steady.</li>
          <li>Call emergency medical services for severe bleeding.</li>
          <li>Do not delay getting professional medical help.</li>
        </ul>
      `;

    }


    else if (category === "electric") {

      emergencyResult.innerHTML = `
        <h3>⚡ Electric Shock</h3>

        <ul>
          <li>Do not touch the person while they are connected to the electrical source.</li>
          <li>Turn off the electricity if it is safe to do so.</li>
          <li>Call emergency medical services.</li>
          <li>Only provide first aid or CPR if trained and it is safe.</li>
        </ul>
      `;

    }


    else if (category === "gas") {

      emergencyResult.innerHTML = `
        <h3>⛽ Gas Leakage</h3>

        <ul>
          <li>Do not create sparks or use electrical switches.</li>
          <li>Leave the area immediately if there is danger.</li>
          <li>Ventilate the area only if it can be done safely.</li>
          <li>Contact the appropriate gas emergency service from a safe location.</li>
        </ul>
      `;

    }


    else {

      emergencyResult.innerHTML = `
        <h3>Choose a category above</h3>

        <p>
          Emergency information will appear here.
        </p>
      `;

    }

  });

}

// ========================================
// GET HELP NOW EMERGENCY POPUP
// ========================================

const callEmergencyBtn =
  document.getElementById("callEmergencyBtn");

const emergencyPopup =
  document.getElementById("emergencyPopup");

const closeEmergencyPopup =
  document.getElementById("closeEmergencyPopup");


if (callEmergencyBtn && emergencyPopup) {

  callEmergencyBtn.addEventListener("click", function () {

    emergencyPopup.classList.add("show");

  });

}


if (closeEmergencyPopup && emergencyPopup) {

  closeEmergencyPopup.addEventListener("click", function () {

    emergencyPopup.classList.remove("show");

  });

}


// Popup ke bahar click karne par close
if (emergencyPopup) {

  emergencyPopup.addEventListener("click", function (event) {

    if (event.target === emergencyPopup) {

      emergencyPopup.classList.remove("show");

    }

  });

}




// Open popup
if (callEmergencyBtn && emergencyPopup) {

  callEmergencyBtn.addEventListener("click", function () {

    emergencyPopup.classList.add("show");

  });

}


// Close popup
if (closeEmergencyPopup && emergencyPopup) {

  closeEmergencyPopup.addEventListener("click", function () {

    emergencyPopup.classList.remove("show");

  });

}


// Police Demo
const policeDemo = document.getElementById("policeDemo");

if (policeDemo) {

  policeDemo.addEventListener("click", function () {

    alert("👮 Police Demo\n\nNo real call will be made.");

  });

}


// Ambulance Demo
const ambulanceDemo = document.getElementById("ambulanceDemo");

if (ambulanceDemo) {

  ambulanceDemo.addEventListener("click", function () {

    alert("🚑 Ambulance Demo\n\nNo real call will be made.");

  });

}


// Fire Demo
const fireDemo = document.getElementById("fireDemo");

if (fireDemo) {

  fireDemo.addEventListener("click", function () {

    alert("🔥 Fire Brigade Demo\n\nNo real call will be made.");

  });

}

// ========================================
// EMERGENCY FORM SUBMIT
// ========================================

const emergencyForm = document.getElementById("emergencyForm");

if (emergencyForm) {

  emergencyForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("✅ Emergency report submitted successfully!\n\nThis is a demo only. No real report was sent.");

    emergencyForm.reset();

  });

// >>>>>>> main
}