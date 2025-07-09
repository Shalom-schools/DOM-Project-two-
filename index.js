// Theme Switcher
const savedTheme = localStorage.getItem("theme") || "light";
document.body.className = savedTheme;

function toggleTheme() {
  const current = document.body.className;
  const newTheme = current === "light" ? "dark" : "light";
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
}

// Dynamic List Manager
function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${value}</span>
    <button onclick="editItem(this)">Edit</button>
    <button onclick="removeItem(this)">Delete</button>
  `;
  document.getElementById("itemList").appendChild(li);
  input.value = "";
}

function editItem(button) {
  const li = button.parentElement;
  const text = li.querySelector("span").innerText;
  const newValue = prompt("Edit item:", text);
  if (newValue) li.querySelector("span").innerText = newValue;
}

function removeItem(button) {
  button.parentElement.remove();
}

// Filter Table Rows
document.getElementById("searchInput").addEventListener("input", function () {
  const input = this.value.toLowerCase();
  const rows = document.querySelectorAll("#dataTable tr:not(:first-child)");
  rows.forEach(row => {
    const name = row.textContent.toLowerCase();
    row.style.display = name.includes(input) ? "" : "none";
  });
});

// Image Carousel
const images = [
  "https://via.placeholder.com/300?text=Image+1",
  "https://via.placeholder.com/300?text=Image+2",
  "https://via.placeholder.com/300?text=Image+3"
];
let index = 0;

function showImage() {
  document.getElementById("carousel").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}
