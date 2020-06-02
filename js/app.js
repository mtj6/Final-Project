function renderProjects(project_cards) {
  const container = document.getElementById("columns");
  container.textContent = "";

  PROJECTS.forEach((result) => {
    // Construct card content
    const content = `
  <div class="col-sm-6 col-md-4 d-flex justify-content-around">
  <div
    class="card shadow p-0 mb-5 bg-white rounded"
    style="width: 18rem;"
  >
    <img
      src="${result.img}"
      class="card-img-top"
      alt="${result.alt}"
    />
    <div class="card-body">
      <h5 class="card-title">${result.title}</h5>
      <h6 class="card-subtitle text-secondary font-italic">${result.subtitle}</h6>
      <p class="card-text">
      ${result.text}
      </p>
    </div>
  </div>
</div>

`;
    // Append newly created card element to the container
    container.innerHTML += content;
  });
}

var userInput = document.getElementById("project-filter");

function filterItems(project) {
  var lowerCaseTitle = project.title.toLowerCase();

  var searchInput = userInput.value;

  var lowerCase = searchInput.toLowerCase();

  if (lowerCaseTitle.indexOf(lowerCase) >= 0) {
    return true;
  } else {
    return false;
  }
}

userInput.addEventListener("input", function () {
  var filteredProjects = PROJECTS.filter(filterItems);
  renderProjects(filteredProjects);
});
