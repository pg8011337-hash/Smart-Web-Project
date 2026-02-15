let products = [
  { name: "iPhone", category: "mobile", price: 800 },
  { name: "Samsung", category: "mobile", price: 600 },
  { name: "Dell Laptop", category: "laptop", price: 900 },
  { name: "HP Laptop", category: "laptop", price: 700 }
];

function displayProducts() {
  let filter = document.getElementById("filter").value;
  let sort = document.getElementById("sort").value;

  let filtered = products.filter(p =>
    filter === "all" || p.category === filter
  );

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  let container = document.getElementById("productList");
  container.innerHTML = "";

  filtered.forEach(p => {
    container.innerHTML += `
      <p>${p.name} - ₹${p.price}</p>
    `;
  });
}

displayProducts();