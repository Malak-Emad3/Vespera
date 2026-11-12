 // Global Products Database for Vespera Store (Search & Details Modal)
const allVesperaProducts = [
    {
        id: "cleanser-oily",
        name: "Starville Cleanser",
        price: 12.00,
        image: "images/starville Cleanser.png",
        category: "Cleanser",
        suitableFor: "Oily & Acne-Prone Skin",
        ingredients: "Salicylic Acid, Tea Tree Extract, Panthenol, Glycerin",
        sideEffects: "May cause mild dryness or peeling if overused twice daily on non-oily areas.",
        allergyInfo: "Contains Tea Tree Oil; patch test recommended for sensitive skin."
    },
    {
        id: "cleanser-dry",
        name: "Medicube Cleanser",
        price: 16.00,
        image: "images/medicube Cleanser.png",
        category: "Cleanser",
        suitableFor: "Dry & Sensitive Skin",
        ingredients: "Centella Asiatica, Ceramides, Hyaluronic Acid",
        sideEffects: "Very rare; gentle and non-stripping formula.",
        allergyInfo: "Hypoallergenic and fragrance-free."
    },
    {
        id: "cleanser-sensitive",
        name: "Shaan Lotion Cleanser",
        price: 14.00,
        image: "images/shaan lotion.jpg",
        category: "Cleanser",
        suitableFor: "Sensitive & Irritated Skin",
        ingredients: "Vitamin E, Chamomile Extract, Panthenol",
        sideEffects: "None reported for normal daily use.",
        allergyInfo: "Soap-free and safe for reactive skin."
    },
    {
        id: "serum-acne",
        name: "The Ordinary Niacinamide Serum",
        price: 26.00,
        image: "images/ordinary serum.jpg",
        category: "Serum",
        suitableFor: "Oily, Combination & Blemish-Prone Skin",
        ingredients: "10% Niacinamide (Vitamin B3), 1% Zinc PCA",
        sideEffects: "High concentration may cause mild tingling initially.",
        allergyInfo: "Free from alcohol, oil, and silicone."
    },
    {
        id: "serum-glow",
        name: "Radiance Glow Vitamin C Serum",
        price: 28.00,
        image: "images/ordinary serum.jpg",
        category: "Serum",
        suitableFor: "All Skin Types / Dull Skin",
        ingredients: "15% Pure Vitamin C, Alpha Arbutin, Ferulic Acid",
        sideEffects: "May cause slight irritation if skin barrier is compromised.",
        allergyInfo: "Patch test recommended for sensitive skin types."
    },
    {
        id: "moisturizer-oily",
        name: "Oil-Free Gel Moisturizer",
        price: 22.00,
        image: "images/mostrizer1.jpg",
        category: "Moisturizer",
        suitableFor: "Oily & Combination Skin",
        ingredients: "Green Tea Extract, Hyaluronic Acid, Squalane",
        sideEffects: "None; provides lightweight oil-free hydration.",
        allergyInfo: "Non-comedogenic, won't clog pores."
    },
    {
        id: "moisturizer-dry",
        name: "Rich Barrier Repair Cream",
        price: 25.00,
        image: "images/mostrizer2.jpg",
        category: "Moisturizer",
        suitableFor: "Very Dry & Damaged Skin",
        ingredients: "Shea Butter, Ceramides, Natural Lipids",
        sideEffects: "Too heavy for oily skin types.",
        allergyInfo: "Contains nut-derived Shea Butter."
    },
    {
        id: "moisturizer-sensitive",
        name: "Moist-1 Soothing Cream",
        price: 20.00,
        image: "images/moist-1 Cream.jpg",
        category: "Moisturizer",
        suitableFor: "Sensitive & Irritated Skin",
        ingredients: "Panthenol (5%), Allantoin, Glycerin",
        sideEffects: "Safe for daily intensive repair.",
        allergyInfo: "Dermatologically tested for hypersensitivity."
    },
    {
        id: "sunscreen-sensitive",
        name: "Mineral Sensitive Sunscreen SPF 50+",
        price: 24.00,
        image: "images/sunscreen3.png",
        category: "Sunscreen",
        suitableFor: "Sensitive Skin",
        ingredients: "Zinc Oxide, Titanium Dioxide, Centella Asiatica",
        sideEffects: "Minimal white cast characteristic of mineral filters.",
        allergyInfo: "Chemical-free mineral filters reduce allergy risks."
    },
    {
        id: "sunscreen-daily",
        name: "Melatime Daily Sunscreen SPF 50+",
        price: 22.00,
        image: "images/melatime sunscrean.png",
        category: "Sunscreen",
        suitableFor: "Normal, Oily & Combination Skin",
        ingredients: "Broad-Spectrum UV Filters, Niacinamide, Vitamin E",
        sideEffects: "Must be reapplied every 2 hours under direct sunlight.",
        allergyInfo: "Light formula; patch test if fragrance-sensitive."
    },
    {
        id: "purifying-gel-cleanser",
        name: "Purifying Gel Cleanser",
        price: 15.00,
        image: "images/pic1.png",
        category: "Cleanser",
        suitableFor: "Oily & Combination Skin",
        ingredients: "Salicylic Acid, Aloe Vera",
        sideEffects: "May dry skin if overused.",
        allergyInfo: "Low allergy risk."
    },
    {
        id: "clarifying-blemish-serum",
        name: "Clarifying Blemish Serum",
        price: 24.00,
        image: "images/ordinary serum.jpg",
        category: "Serum",
        suitableFor: "Acne-Prone Skin",
        ingredients: "Zinc, Niacinamide",
        sideEffects: "Mild tingling on active blemishes.",
        allergyInfo: "Fragrance-free."
    },
    {
        id: "daily-hydrating-cream",
        name: "Daily Hydrating Cream",
        price: 19.00,
        image: "images/mostrizer1.jpg",
        category: "Moisturizer",
        suitableFor: "Normal & Dry Skin",
        ingredients: "Hyaluronic Acid, Glycerin",
        sideEffects: "None.",
        allergyInfo: "Safe for daily use."
    },
    {
        id: "soothing-derma-lotion",
        name: "Soothing Derma Repair Lotion",
        price: 21.00,
        image: "images/shaan lotion.jpg",
        category: "Moisturizer",
        suitableFor: "Sensitive Skin",
        ingredients: "Panthenol, Shea Butter",
        sideEffects: "None.",
        allergyInfo: "Hypoallergenic."
    },
    {
        id: "advanced-sunscreen",
        name: "Advanced Sunscreen SPF 50+",
        price: 23.00,
        image: "images/melatime sunscrean.png",
        category: "Sunscreen",
        suitableFor: "All Skin Types",
        ingredients: "UV Filters, Vitamin E",
        sideEffects: "None.",
        allergyInfo: "Dermatologist tested."
    },
    {
        id: "exfoliating-face-scrub",
        name: "Exfoliating Face Scrub",
        price: 16.00,
        image: "images/pic1.png",
        category: "Scrub",
        suitableFor: "Non-Sensitive Skin",
        ingredients: "Walnut Shell Powder, Glycolic Acid",
        sideEffects: "May cause redness if rubbed too harshly.",
        allergyInfo: "Avoid on active cystic acne."
    }
];

// Highlight active link in navbar
function highlightActiveNavLink() {
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentLocation || (currentLocation === "" && linkPath === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Toggle Search Modal Box
function toggleSearchModal() {
    let modal = document.getElementById('search-modal');
    if (!modal) {
        injectGlobalModals();
        modal = document.getElementById('search-modal');
    }
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
        const input = document.getElementById('search-input');
        if (input) {
            input.value = '';
            input.focus();
            renderSearchResults(allVesperaProducts);
        }
    }
}

// Live Search Handler
function handleLiveSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    if (!query) {
        renderSearchResults(allVesperaProducts);
        return;
    }

    const filtered = allVesperaProducts.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.suitableFor.toLowerCase().includes(query)
    );
    renderSearchResults(filtered);
}

function filterProducts() {
    const input = document.getElementById('search-input');
    if (!input) return;
    const query = input.value.toLowerCase().trim();
    const filtered = allVesperaProducts.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    renderSearchResults(filtered);
}

function renderSearchResults(products) {
    let resultsContainer = document.getElementById("search-results");
    if (!resultsContainer) return;

    if (products.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align:center; color:#6E5243; padding:10px; font-size:13px;">No results found</p>`;
        return;
    }

    resultsContainer.innerHTML = products.map(p => `
        <div onclick="openProductDetailsById('${p.id}')" style="display:flex; align-items:center; gap:12px; padding:10px; margin-bottom:6px; background:#EADCCB; border-radius:8px; cursor:pointer; transition:0.2s;" onmouseover="this.style.background='#dfae8a'" onmouseout="this.style.background='#EADCCB'">
            <img src="${p.image}" alt="${p.name}" style="width:45px; height:45px; object-fit:contain; background:#fff; border-radius:6px; padding:3px;" onerror="this.src='images/logo-ves.png'">
            <div style="flex:1;">
                <h4 style="margin:0; font-size:13px; color:#6E5243; font-weight:600;">${p.name}</h4>
                <span style="font-size:11px; opacity:0.8; color:#6E5243;">${p.category} • $${p.price.toFixed(2)}</span>
            </div>
            <span style="font-size:11px; background:#A8886F; color:#F9F3EC; padding:3px 8px; border-radius:4px;">View</span>
        </div>
    `).join('');
}

// Open Product Details Modal
function openProductDetailsById(productId) {
    const product = allVesperaProducts.find(p => p.id === productId);
    if (!product) return;

    const searchModal = document.getElementById("search-modal");
    if (searchModal) searchModal.style.display = "none";

    let detailsModal = document.getElementById("product-details-modal");
    if (!detailsModal) {
        injectGlobalModals();
        detailsModal = document.getElementById("product-details-modal");
    }

    document.getElementById("pd-img").src = product.image;
    document.getElementById("pd-category").innerText = product.category;
    document.getElementById("pd-name").innerText = product.name;
    document.getElementById("pd-price").innerText = `$${product.price.toFixed(2)} (${(product.price * 50).toLocaleString()} EGP)`;
    document.getElementById("pd-suitable").innerText = product.suitableFor;
    document.getElementById("pd-ingredients").innerText = product.ingredients;
    document.getElementById("pd-side-effects").innerText = product.sideEffects;
    document.getElementById("pd-allergy").innerText = product.allergyInfo;

    const addBtn = document.getElementById("pd-add-btn");
    addBtn.onclick = function () {
        addProductToCart(product.name, product.price, product.image);
        closeProductDetails();
    };

    detailsModal.style.display = "flex";
}

function closeProductDetails() {
    const detailsModal = document.getElementById("product-details-modal");
    if (detailsModal) detailsModal.style.display = "none";
}

// Shopping Cart Drawer & Management
function toggleCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    
    if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
        renderCartItems();
    }
}

function addProductToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price, image: image, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCountDisplay();
    renderCartItems();
    toggleCartDrawer();
}

function updateCartCountDisplay() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.innerText = cart.length;
    }
}

function renderCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items-container');
    const totalUsdEl = document.getElementById('cart-total-usd');
    const totalEgpEl = document.getElementById('cart-total-egp');
    const EGP_RATE = 50;

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: #777; margin-top: 40px; font-family: 'Poppins', sans-serif;">Your shopping bag is empty.</p>`;
        if (totalUsdEl) totalUsdEl.innerText = "$0.00";
        if (totalEgpEl) totalEgpEl.innerText = "0.00 EGP";
        return;
    }

    let totalUsd = 0;
    container.innerHTML = cart.map((item, index) => {
        totalUsd += item.price;
        let itemEgp = item.price * EGP_RATE;
        return `
            <div class="cart-item-row" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 12px;">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='images/logo-ves.png'" style="width: 60px; height: 60px; object-fit: contain; background: #fff; border-radius: 8px; padding: 4px;">
                <div style="flex: 1;">
                    <h4 style="font-size: 13px; margin: 0 0 4px 0; color: #2c2c2c;">${item.name}</h4>
                    <span style="font-size: 12px; color: #8c6d62; font-weight: 600;">$${item.price.toFixed(2)} (${itemEgp.toLocaleString()} EGP)</span>
                </div>
                <button onclick="removeCartItem(${index})" style="background: none; border: none; color: #ff5252; cursor: pointer; font-size: 14px;"><i class="fas fa-trash"></i></button>
            </div>
        `;
    }).join('');

    if (totalUsdEl) totalUsdEl.innerText = `$${totalUsd.toFixed(2)}`;
    if (totalEgpEl) totalEgpEl.innerText = `${(totalUsd * EGP_RATE).toLocaleString()} EGP`;
}

function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCountDisplay();
    renderCartItems();
}

// Smart Skincare Quiz & Results Logic
document.addEventListener("click", function(event) {
    if (event.target && event.target.id === "submit-quiz-btn") {
        event.preventDefault();
        
        const skinTypeSelect = document.getElementById("skin-type-select") || document.querySelector("select[name='skin-type']");
        const skinConcernSelect = document.getElementById("skin-concern-select") || document.querySelector("select[name='skin-concern']");
        
        let userSkinType = skinTypeSelect ? skinTypeSelect.value : "combination";
        let userConcern = skinConcernSelect ? skinConcernSelect.value : "hydration";

        localStorage.setItem("userSkinType", userSkinType);
        localStorage.setItem("userSkinConcern", userConcern);

        window.location.href = "results.html";
    }
});

// Contact Form Submit Handler
function handleContactSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    const thankBox = document.getElementById("thankyou-msg");
    
    if (form && thankBox) {
        form.style.display = "none";
        thankBox.style.display = "block";
    }
}

// Inject Global Modals (Search & Product Details) dynamically if not present
function injectGlobalModals() {
    if (!document.getElementById("search-modal")) {
        const searchHTML = `
        <div id="search-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.55); z-index: 9999; justify-content: center; align-items: center;">
            <div style="background: #f0dec9; padding: 30px; border-radius: 18px; width: 90%; max-width: 520px; box-shadow: 0 12px 30px rgba(0,0,0,0.25); position: relative; border: 1px solid #c79572;">
                <span onclick="toggleSearchModal()" style="position: absolute; top: 15px; right: 20px; font-size: 26px; cursor: pointer; color: #6E5243;">&times;</span>
                <h3 style="font-family: 'Playfair Display', serif; margin: 0 0 15px 0; color: #6E5243;">Search Vespera Products 🔍</h3>
                <input type="text" id="search-input" onkeyup="handleLiveSearch(event)" placeholder="Search by product name, category, or skin type..." style="width: 100%; padding: 12px; border: 1px solid #A8886F; border-radius: 8px; background: #fff; color: #2c2c2c; outline: none; font-size: 14px; box-sizing: border-box;">
                <div id="search-results" style="margin-top: 15px; max-height: 280px; overflow-y: auto;"></div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML("beforeend", searchHTML);
    }

    if (!document.getElementById("product-details-modal")) {
        const detailsHTML = `
        <div id="product-details-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 10000; justify-content: center; align-items: center; padding: 15px; box-sizing: border-box;">
            <div style="background: #f0dec9; border-radius: 18px; width: 100%; max-width: 680px; max-height: 90vh; overflow-y: auto; padding: 30px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.3); border: 2px solid #dfae8a; font-family: 'Poppins', sans-serif;">
                <button onclick="closeProductDetails()" style="position: absolute; top: 15px; right: 20px; background: none; border: none; font-size: 28px; cursor: pointer; color: #6E5243;">&times;</button>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 25px; align-items: center;">
                    <div style="background: #fff; border-radius: 14px; padding: 20px; display: flex; justify-content: center; align-items: center; height: 260px; border: 1px solid #dfae8a;">
                        <img id="pd-img" src="" alt="Product" style="max-width: 100%; max-height: 100%; object-fit: contain;" onerror="this.src='images/logo-ves.png'">
                    </div>

                    <div>
                        <span id="pd-category" style="background: #6E5243; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600;"></span>
                        <h2 id="pd-name" style="font-family: 'Playfair Display', serif; color: #2c2c2c; margin: 10px 0 6px 0; font-size: 22px;"></h2>
                        <p id="pd-price" style="color: #6E5243; font-weight: 600; font-size: 16px; margin: 0 0 15px 0;"></p>

                        <div style="background: #dfae8a; padding: 12px; border-radius: 10px; margin-bottom: 10px;">
                            <strong style="color: #1b1412; font-size: 12px; display: block; margin-bottom: 3px;">✨ Suitable Skin Type:</strong>
                            <span id="pd-suitable" style="color: #2c2c2c; font-size: 12px;"></span>
                        </div>

                        <div style="background: rgba(255,255,255,0.55); padding: 12px; border-radius: 10px; margin-bottom: 10px;">
                            <strong style="color: #1b1412; font-size: 12px; display: block; margin-bottom: 3px;">🧪 Key Ingredients:</strong>
                            <span id="pd-ingredients" style="color: #2c2c2c; font-size: 12px;"></span>
                        </div>

                        <div style="background: rgba(255,255,255,0.55); padding: 12px; border-radius: 10px; margin-bottom: 10px;">
                            <strong style="color: #a33b20; font-size: 12px; display: block; margin-bottom: 3px;">⚠️ Potential Side Effects:</strong>
                            <span id="pd-side-effects" style="color: #2c2c2c; font-size: 12px;"></span>
                        </div>

                        <div style="background: rgba(255,255,255,0.55); padding: 12px; border-radius: 10px; margin-bottom: 18px;">
                            <strong style="color: #2e5c31; font-size: 12px; display: block; margin-bottom: 3px;">🌿 Allergy & Sensitivity Check:</strong>
                            <span id="pd-allergy" style="color: #2c2c2c; font-size: 12px;"></span>
                        </div>

                        <button id="pd-add-btn" style="width: 100%; background: #6E5243; color: #fff; border: none; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 14px; transition: 0.3s;">
                            Add to Shopping Bag 🛍️
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML("beforeend", detailsHTML);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    injectGlobalModals();
    updateCartCountDisplay();
    highlightActiveNavLink();
});