const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const content = document.getElementById("content")

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// Loads the specified HTML
async function loadPage(htmlPath, targetDOM) {
  try {
    const response = await fetch(htmlPath);

    if (!response.ok) {
      throw new Error(`Failed to load ${htmlPath}`);
    }

    const html = await response.text();
    targetDOM.innerHTML = html;
  } catch (error) {
    targetDOM.innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
    console.error(error);
  }
}

// init navbar click handlers

const navDashboard = document.getElementById("nav_dashboard");
const navIngredients = document.getElementById("nav_ingredients");
const navStock = document.getElementById("nav_stock");
const navOrders = document.getElementById("nav_orders");

navDashboard.addEventListener("click", () => {
  loadPage("sub/dashboard.html", content);
});

navStock.addEventListener("click", () => {
  loadPage("sub/stock.html", content);
});

navIngredients.addEventListener("click", () => {
  loadPage("sub/ingredients.html", content);
});

navOrders.addEventListener("click", () => {
  loadPage("sub/orders.html", content);
});

// load dashboard on startup
loadPage("sub/dashboard.html", content);