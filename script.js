const form = document.getElementById("leadForm");
const tableBody = document.querySelector("#leadTable tbody");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const source = document.getElementById("source").value;
  const status = document.getElementById("status").value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${source}</td>
    <td class="status-${status}">${status}</td>
  `;

  tableBody.appendChild(row);
  form.reset();
});
