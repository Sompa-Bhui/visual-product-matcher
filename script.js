const uploadInput = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const matchBtn = document.getElementById("matchBtn");
const results = document.getElementById("results");
const grid = document.getElementById("product-grid");

// Dummy product data (you can replace with real images)
const products = [
  { name: "Blue Sneakers", img: "https://picsum.photos/200?1" },
  { name: "Casual Shoes", img: "https://picsum.photos/200?2" },
  { name: "White Shirt", img: "https://picsum.photos/200?3" },
  { name: "Leather Bag", img: "https://picsum.photos/200?4" },
  { name: "Sunglasses", img: "https://picsum.photos/200?5" },
  { name: "Analog Watch", img: "https://picsum.photos/200?6" }
];

uploadInput.addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    preview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
  };
  reader.readAsDataURL(file);
});

matchBtn.addEventListener("click", () => {
  if (!uploadInput.files.length) {
    alert("Please upload an image first!");
    return;
  }

  results.classList.remove("hidden");
  grid.innerHTML = "";

  // Simulate loading delay
  setTimeout(() => {
    products.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
      `;
      grid.appendChild(card);
    });
  }, 1000);
});
