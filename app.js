/* ==========================================================================
   AETHERIA E-Commerce JavaScript logic 
   ========================================================================== */

// 1. Product Data Catalog (Level 3 Tasks )
const PRODUCTS = [
  {
    id: 1,
    name: "Aether Key X",
    category: "electronics",
    price: 189.00,
    rating: 4.9,
    image: "assets/keyboard.png",
    description: "Futuristic hot-swappable mechanical keyboard featuring customized RGB lighting, glowing keycaps, and linear pre-lubed switches.",
    details: `
      <ul>
        <li><strong>Form Factor:</strong> 75% Compact layout</li>
        <li><strong>Switches:</strong> Gateron Oil King linear switches (pre-lubed)</li>
        <li><strong>Keycaps:</strong> Double-shot PBT with translucent futuristic glyphs</li>
        <li><strong>Connectivity:</strong> Detachable USB Type-C, Bluetooth 5.1, 2.4GHz Wireless</li>
        <li><strong>Body Material:</strong> CNC-milled anodized aluminum</li>
        <li><strong>Battery Life:</strong> Up to 150 hours (RGB off)</li>
        <li><strong>Weight:</strong> 1.45 kg (3.2 lbs)</li>
      </ul>
    `
  },
  {
    id: 2,
    name: "Sonic Arc",
    category: "electronics",
    price: 299.00,
    rating: 4.8,
    image: "assets/headphones.png",
    description: "Sleek minimalist noise-canceling headphones with spatial audio tracking, custom composite drivers, and memory foam padding.",
    details: `
      <ul>
        <li><strong>Drivers:</strong> 40mm Custom composite dynamic drivers</li>
        <li><strong>ANC:</strong> Hybrid Active Noise Canceling (up to 42dB reduction)</li>
        <li><strong>Bluetooth:</strong> Bluetooth 5.2 with LDAC, AAC, and SBC codec support</li>
        <li><strong>Frequency Range:</strong> 4Hz - 40,000Hz</li>
        <li><strong>Battery:</strong> Up to 40 hours with ANC active, 50 hours ANC off</li>
        <li><strong>Quick Charge:</strong> 10 min charge yields 5 hours playback</li>
        <li><strong>Microphones:</strong> 6 beamforming microphones for crystal-clear calls</li>
      </ul>
    `
  },
  {
    id: 3,
    name: "Volt Shell Hoodie",
    category: "clothing",
    price: 120.00,
    rating: 4.7,
    image: "assets/hoodie.png",
    description: "Techwear-inspired black hoodie constructed from water-repellent double-weave technical fabric and fitted with dynamic magnetic buckles.",
    details: `
      <ul>
        <li><strong>Material:</strong> 85% Technical Nylon, 15% Spandex double-weave blend</li>
        <li><strong>Finish:</strong> DWR (Durable Water Repellent) hydrophobic coating</li>
        <li><strong>Buckles:</strong> Fidlock® V-Buckle magnetic fasteners</li>
        <li><strong>Pockets:</strong> 2 hidden zippered pockets, 1 modular chest pocket</li>
        <li><strong>Fit:</strong> Articulated elbows, oversized drape fit</li>
        <li><strong>Care:</strong> Machine wash cold, hang dry only</li>
      </ul>
    `
  },
  {
    id: 4,
    name: "Aero Graphic Tee",
    category: "clothing",
    price: 45.00,
    rating: 4.6,
    image: "assets/tee.png",
    description: "Oversized graphic streetwear t-shirt crafted from heavy 280GSM organic cotton with high-fidelity technical prints.",
    details: `
      <ul>
        <li><strong>Material:</strong> 100% Organic long-staple cotton</li>
        <li><strong>Weight:</strong> 280 GSM Heavyweight knit</li>
        <li><strong>Print Type:</strong> High-density screenprint (non-fade, cracked-resistant)</li>
        <li><strong>Fit:</strong> Drop-shoulder boxy silhouette</li>
        <li><strong>Pre-shrunk:</strong> Yes, industrial enzyme pre-washed</li>
      </ul>
    `
  },
  {
    id: 5,
    name: "Forge Carbon Wallet",
    category: "accessories",
    price: 75.00,
    rating: 4.9,
    image: "assets/wallet.png",
    description: "Minimalist RFID-blocking cardholder made from aviation-grade 3K carbon fiber panels and elastic tension bands.",
    details: `
      <ul>
        <li><strong>Material:</strong> Real 3K Matte Carbon Fiber panels</li>
        <li><strong>Card Capacity:</strong> Holds 1 to 12 cards securely</li>
        <li><strong>RFID Protection:</strong> Built-in blocking sheets to prevent digital theft</li>
        <li><strong>Money Clip:</strong> Spring steel money clip on reverse side</li>
        <li><strong>Thickness:</strong> Only 6.2 mm when empty</li>
        <li><strong>Weight:</strong> 55 grams</li>
      </ul>
    `
  },
  {
    id: 6,
    name: "Zenith Sling Bag",
    category: "accessories",
    price: 95.00,
    rating: 4.8,
    image: "assets/sling.png",
    description: "Weatherproof modular EDC sling bag featuring X-Pac technical sailcloth, waterproof YKK zippers, and quick-adjust strap.",
    details: `
      <ul>
        <li><strong>Fabric:</strong> Dimension-Polyant® X-Pac VX21 technical laminate</li>
        <li><strong>Zippers:</strong> YKK® AquaGuard® weatherproof coil zippers</li>
        <li><strong>Volume:</strong> 4.5 Liters</li>
        <li><strong>Compartments:</strong> Soft-touch tablet sleeve, key tether, dual organizing mesh pockets</li>
        <li><strong>Strap:</strong> Quick-adjust nylon webbing with magnetic slider</li>
        <li><strong>Dimensions:</strong> 31cm x 19cm x 9cm</li>
      </ul>
    `
  }
];


// 2. State Store Variables  

let cart = [];
let activeCategory = "all";

// 3. Select DOM Elements

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

const cartToggleBtn = document.getElementById("cartToggleBtn");
const cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
const cartDrawerCloseBtn = document.getElementById("cartDrawerCloseBtn");
const cartDrawerContent = document.getElementById("cartDrawerContent");
const cartSubtotalValue = document.getElementById("cartSubtotalValue");
const cartCountBadge = document.getElementById("cartCountBadge");
const checkoutBtn = document.getElementById("checkoutBtn");

const themeToggleBtn = document.getElementById("themeToggleBtn");

const menuToggleBtn = document.getElementById("menuToggleBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

const detailsModalOverlay = document.getElementById("detailsModalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBodyGrid = document.getElementById("modalBodyGrid");

const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");

// ==========================================================================
// A. Theme Switcher System (Level 2 & 5 Task Support) 
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Smooth rotating animation transition on button
  themeToggleBtn.style.transform = "rotate(360deg)";
  setTimeout(() => {
    themeToggleBtn.style.transform = "";
  }, 300);

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// ==========================================================================
// B. Product Render & Filtering (Level 1, 2, 3 & 5 Tasks)
// ==========================================================================
function renderProducts() {
  productGrid.innerHTML = "";

  const filtered = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No products found in this category.</p>`;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-category", product.category);
    // Smooth fade-in animation as they render
    card.style.opacity = "0";
    card.style.transform = "translateY(10px)";
    card.style.transition = "all var(--transition-normal)";

    card.innerHTML = `
      <div class="product-image-container">
        <span class="product-category-tag">${product.category}</span>
        <div class="product-rating">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <span>${product.rating}</span>
        </div>
        <img class="product-card-img" src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="quick-view-btn" data-id="${product.id}">
            Quick View
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
      <div class="product-actions">
        <button class="add-to-cart-btn" data-id="${product.id}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span>Add to Cart</span>
        </button>
      </div>
    `;

    productGrid.appendChild(card);

    // Trigger animation frame for clean fade-in entry
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 50);
    });
  });

  bindProductEvents();
}

function bindProductEvents() {
  // Bind Add to Cart buttons
  const addBtnList = productGrid.querySelectorAll(".add-to-cart-btn");
  addBtnList.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(btn.getAttribute("data-id"));
      addToCart(productId);

      // Level 4 Task 1: Change visual appearance of button when clicked
      btn.classList.add("added");
      const textSpan = btn.querySelector("span");
      const originalText = textSpan.textContent;
      textSpan.textContent = "Added!";

      // Play a quick scaling bounce
      btn.style.transform = "scale(0.95)";
      setTimeout(() => { btn.style.transform = "scale(1)"; }, 150);

      // Reset button appearance after delay
      setTimeout(() => {
        btn.classList.remove("added");
        textSpan.textContent = originalText;
      }, 1500);
    });
  });

  // Bind Quick View details modal
  const viewBtnList = productGrid.querySelectorAll(".quick-view-btn");
  viewBtnList.forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("data-id"));
      openDetailsModal(productId);
    });
  });
}

// Category filter handler
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.getAttribute("data-filter");
    renderProducts();
  });
});

// ==========================================================================
// C. Interactive Cart Operations (Level 4 Task 1 & 2, Level 5 Task 4)
// ==========================================================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  const cartItem = cart.find(item => item.product.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateCartUI();
}

function updateCartUI() {
  // Update Item Badge count (Level 4 Task 2)
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountBadge.textContent = totalCount;

  // Animation bounce on badge trigger
  cartCountBadge.style.transform = "scale(1.3)";
  setTimeout(() => {
    cartCountBadge.style.transform = "scale(1)";
  }, 200);

  // Render items inside drawer
  cartDrawerContent.innerHTML = "";

  if (cart.length === 0) {
    cartDrawerContent.innerHTML = `
      <div class="cart-empty">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p>Your cart is empty.</p>
      </div>
    `;
    cartSubtotalValue.textContent = "$0.00";
    return;
  }

  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;

    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `
      <img class="cart-item-img" src="${item.product.image}" alt="${item.product.name}">
      <div class="cart-item-details">
        <span class="cart-item-title">${item.product.name}</span>
        <span class="cart-item-category">${item.product.category}</span>
        <span class="cart-item-price">$${item.product.price.toFixed(2)}</span>
      </div>
      <div class="cart-item-actions">
        <button class="cart-item-remove" data-id="${item.product.id}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          <span>Remove</span>
        </button>
        <div class="cart-qty-ctrl">
          <button class="cart-qty-btn decrease" data-id="${item.product.id}">-</button>
          <span class="cart-qty-val">${item.quantity}</span>
          <button class="cart-qty-btn increase" data-id="${item.product.id}">+</button>
        </div>
      </div>
    `;

    cartDrawerContent.appendChild(cartItemDiv);
  });

  cartSubtotalValue.textContent = `$${subtotal.toFixed(2)}`;

  bindCartActions();
}

function bindCartActions() {
  // Remove button
  const removeBtnList = cartDrawerContent.querySelectorAll(".cart-item-remove");
  removeBtnList.forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("data-id"));
      cart = cart.filter(item => item.product.id !== productId);
      updateCartUI();
    });
  });

  // Quantity controllers (increase / decrease)
  const decreaseBtnList = cartDrawerContent.querySelectorAll(".cart-qty-btn.decrease");
  decreaseBtnList.forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("data-id"));
      const item = cart.find(i => i.product.id === productId);
      if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
          cart = cart.filter(i => i.product.id !== productId);
        }
        updateCartUI();
      }
    });
  });

  const increaseBtnList = cartDrawerContent.querySelectorAll(".cart-qty-btn.increase");
  increaseBtnList.forEach(btn => {
    btn.addEventListener("click", () => {
      const productId = parseInt(btn.getAttribute("data-id"));
      const item = cart.find(i => i.product.id === productId);
      if (item) {
        item.quantity++;
        updateCartUI();
      }
    });
  });
}

// Cart drawer slide toggles
cartToggleBtn.addEventListener("click", () => {
  cartDrawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable page scrolling
});

cartDrawerCloseBtn.addEventListener("click", () => {
  cartDrawerOverlay.classList.remove("active");
  document.body.style.overflow = ""; // Enable page scrolling
});

cartDrawerOverlay.addEventListener("click", (e) => {
  if (e.target === cartDrawerOverlay) {
    cartDrawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your shopping cart is empty!");
    return;
  }
  alert("Order simulation complete! Thank you for reviewing the Sysslan IT Solutions internship template.");
  cart = [];
  updateCartUI();
  cartDrawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
});

// ==========================================================================
// D. Details Dialog Modal (Level 4 Task 4)
// ==========================================================================
function openDetailsModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  modalBodyGrid.innerHTML = `
    <div class="modal-img-section">
      <img class="modal-img" src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal-details-section">
      <span class="modal-category">${product.category}</span>
      <h3 class="modal-title">${product.name}</h3>
      <span class="modal-price">$${product.price.toFixed(2)}</span>
      <p class="modal-desc">${product.description}</p>
      
      <!-- Accordion container (Level 4 Task 4: Show or hide details) -->
      <div class="details-accordion">
        <button id="accordionHeaderBtn" class="accordion-header" aria-expanded="false" aria-controls="accordionContent">
          <span>Technical Specifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div id="accordionContent" class="accordion-content">
          <div class="accordion-content-inner">
            ${product.details}
          </div>
        </div>
      </div>

      <button id="modalAddBtn" class="btn btn-primary" style="width: 100%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span>Add to Cart</span>
      </button>
    </div>
  `;

  detailsModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Bind events within the newly rendered modal content
  const accordionHeaderBtn = document.getElementById("accordionHeaderBtn");
  const accordionContent = document.getElementById("accordionContent");

  accordionHeaderBtn.addEventListener("click", () => {
    const isExpanded = accordionHeaderBtn.getAttribute("aria-expanded") === "true";

    // Toggle active state classes and attributes
    accordionHeaderBtn.classList.toggle("active");
    accordionHeaderBtn.setAttribute("aria-expanded", !isExpanded);

    if (!isExpanded) {
      // Open technical spec accordion (calculates dynamic height)
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      // Close specs accordion
      accordionContent.style.maxHeight = "0px";
    }
  });

  const modalAddBtn = document.getElementById("modalAddBtn");
  modalAddBtn.addEventListener("click", () => {
    addToCart(product.id);

    modalAddBtn.style.backgroundColor = "var(--success)";
    modalAddBtn.style.borderColor = "var(--success)";
    const textSpan = modalAddBtn.querySelector("span");
    textSpan.textContent = "Added to Cart!";

    // Visual feedback reset
    setTimeout(() => {
      modalAddBtn.style.backgroundColor = "";
      modalAddBtn.style.borderColor = "";
      textSpan.textContent = "Add to Cart";
    }, 1500);
  });
}

function closeDetailsModal() {
  detailsModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeDetailsModal);
detailsModalOverlay.addEventListener("click", (e) => {
  if (e.target === detailsModalOverlay) {
    closeDetailsModal();
  }
});

// ESC keyboard key closes modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetailsModal();
    cartDrawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// ==========================================================================
// E. Contact Form Live Validation (Level 4 Task 3)
// ==========================================================================
function validateInput(input, group, errorMsgElement, validationFn) {
  const isValid = validationFn(input.value.trim());
  if (isValid) {
    group.classList.remove("error");
    group.classList.add("success");
    return true;
  } else {
    group.classList.remove("success");
    group.classList.add("error");
    return false;
  }
}

// Validation checkers
const isNotEmpty = val => val.length > 0;
const isValidEmail = val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

// Bind live visual focusout handlers
contactName.addEventListener("focusout", () => {
  const nameGroup = document.getElementById("nameGroup");
  validateInput(contactName, nameGroup, null, isNotEmpty);
});

contactEmail.addEventListener("focusout", () => {
  const emailGroup = document.getElementById("emailGroup");
  validateInput(contactEmail, emailGroup, null, isValidEmail);
});

contactMessage.addEventListener("focusout", () => {
  const messageGroup = document.getElementById("messageGroup");
  validateInput(contactMessage, messageGroup, null, isNotEmpty);
});

// Clear input validation classes on keypress typing
[contactName, contactEmail, contactMessage].forEach(input => {
  input.addEventListener("input", () => {
    const group = input.parentElement;
    group.classList.remove("error");
    group.classList.remove("success");
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameGroup = document.getElementById("nameGroup");
  const emailGroup = document.getElementById("emailGroup");
  const messageGroup = document.getElementById("messageGroup");

  const isNameValid = validateInput(contactName, nameGroup, null, isNotEmpty);
  const isEmailValid = validateInput(contactEmail, emailGroup, null, isValidEmail);
  const isMsgValid = validateInput(contactMessage, messageGroup, null, isNotEmpty);

  if (isNameValid && isEmailValid && isMsgValid) {
    const submitBtn = document.getElementById("formSubmitBtn");
    submitBtn.classList.add("success");
    const textSpan = submitBtn.querySelector("span");
    const originalBtnHTML = submitBtn.innerHTML;

    textSpan.textContent = "Message Sent!";
    submitBtn.querySelector("svg").innerHTML = `<polyline points="20 6 9 17 4 12"></polyline>`;

    // Simulation details completion
    alert(`Thank you, ${contactName.value}! Your message has been received simulated.`);

    // Clear validation borders and inputs
    contactForm.reset();
    setTimeout(() => {
      [nameGroup, emailGroup, messageGroup].forEach(g => {
        g.classList.remove("success");
      });
      submitBtn.classList.remove("success");
      submitBtn.innerHTML = originalBtnHTML;
    }, 2000);
  }
});

// ==========================================================================
// F. Mobile Responsive Navigation
// ==========================================================================
menuToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Transform hamburg lines to 'X' inside svg
  const svg = menuToggleBtn.querySelector("svg");
  if (navMenu.classList.contains("active")) {
    svg.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
  } else {
    svg.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
  }
});

// Close mobile menu when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Reset mobile button SVG lines
    menuToggleBtn.querySelector("svg").innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
  });
});

// Active scroll observer for navigation highlight
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(l => {
        l.classList.remove("active");
        if (l.getAttribute("href") === `#${sectionId}`) {
          l.classList.add("active");
        }
      });
    }
  });
});

// Initialize app on loading complete
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProducts();
});
