/**
 * LÓGICA DE LA APLICACIÓN - CATALOGO INTERACTIVO OMBÚ
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- VARIABLES DE ESTADO ---
  let cart = [];
  let currentCategory = 'all';
  let searchQuery = '';
  
  // Estado de selección de producto para el modal de detalle
  let selectedProduct = null;
  let selectedColor = null;
  let selectedSize = null;
  let selectedQuantity = 1;

  // --- ELEMENTOS DEL DOM ---
  const DOM = {
    storeTitle: document.getElementById('store-title'),
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    cartToggle: document.getElementById('cart-toggle'),
    cartCountBadge: document.getElementById('cart-count-badge'),
    categoryTabs: document.getElementById('category-tabs'),
    productGrid: document.getElementById('product-grid'),
    filterResultsBar: document.getElementById('filter-results-bar'),
    filterResultsText: document.getElementById('filter-results-text'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),
    
    // Modal de Detalle
    productDetailModal: document.getElementById('product-detail-modal'),
    closeDetailModal: document.getElementById('close-detail-modal'),
    modalProductIllustration: document.getElementById('modal-product-illustration'),
    modalProductArt: document.getElementById('modal-product-art'),
    modalProductCategory: document.getElementById('modal-product-category'),
    modalProductName: document.getElementById('modal-product-name'),
    modalProductDesc: document.getElementById('modal-product-desc'),
    modalProductFeatures: document.getElementById('modal-product-features'),
    modalColorOptions: document.getElementById('modal-color-options'),
    selectedColorName: document.getElementById('selected-color-name'),
    modalSizeOptions: document.getElementById('modal-size-options'),
    modalSizeGuideTrigger: document.getElementById('modal-size-guide-trigger'),
    qtyMinus: document.getElementById('qty-minus'),
    qtyPlus: document.getElementById('qty-plus'),
    modalQuantity: document.getElementById('modal-quantity'),
    addToCartActionBtn: document.getElementById('add-to-cart-action-btn'),
    
    // Modal de Guía de Talles
    sizeGuideModal: document.getElementById('size-guide-modal'),
    closeSizeModal: document.getElementById('close-size-modal'),
    sizeGuideProductName: document.getElementById('size-guide-product-name'),
    sizeGuideTableContainer: document.getElementById('size-guide-table-container'),
    
    // Drawer del Carrito
    cartDrawer: document.getElementById('cart-drawer'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    closeCartBackdrop: document.getElementById('close-cart-backdrop'),
    cartDrawerCount: document.getElementById('cart-drawer-count'),
    cartItemsList: document.getElementById('cart-items-list'),
    checkoutFormContainer: document.getElementById('checkout-form-container'),
    checkoutForm: document.getElementById('checkout-form'),
    clientName: document.getElementById('client-name'),
    clientAddress: document.getElementById('client-address'),
    clientNotes: document.getElementById('client-notes'),
    cartTotalQty: document.getElementById('cart-total-qty'),
    sendWhatsappBtn: document.getElementById('send-whatsapp-btn'),
    
    // Notificación Toast
    toast: document.getElementById('toast-notification')
  };

  // --- INICIALIZACIÓN ---
  function init() {
    // Configurar información de la tienda desde config.js
    if (window.STORE_CONFIG) {
      DOM.storeTitle.textContent = window.STORE_CONFIG.storeName;
    }
    
    // Recuperar carrito de LocalStorage
    const savedCart = localStorage.getItem('ombu_cart');
    if (savedCart) {
      try {
        cart = JSON.parse(savedCart);
      } catch (e) {
        cart = [];
      }
    }
    
    updateCartUI();
    renderCatalog();
    setupEventListeners();
  }

  // --- ILUSTRACIONES VECTORIALES DINÁMICAS (SVG) ---
  // Dibuja un SVG interactivo que puede cambiar de color de acuerdo a la variante
  function getProductSVG(product, hexColor = '#005c30') {
    const name = product.name.toLowerCase();
    const isPants = name.includes('pantalon') || name.includes('bombacha') || name.includes('jean') || name.includes('bermuda') || name.includes('mameluco');
    const isFootwear = name.includes('botin') || name.includes('zapato') || name.includes('bota') || name.includes('zapatilla');
    const isAccessory = name.includes('faja') || name.includes('media') || name.includes('plantilla') || name.includes('guante');

    let strokeColor = '#1e293b';
    let fillSecondary = '#e2e8f0';

    if (hexColor.toLowerCase() === '#ffffff') {
      strokeColor = '#475569';
      fillSecondary = '#cbd5e1';
    }

    if (isPants) {
      // Dibujo vectorial de Pantalón
      return `
        <svg class="ill-pants" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Cintura -->
          <path d="M30,20 L70,20 L68,26 L32,26 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
          <rect x="42" y="20" width="16" height="6" fill="${fillSecondary}" stroke="${strokeColor}" stroke-width="1.5"/>
          <!-- Piernas -->
          <path d="M32,26 L48,26 L48,50 L30,90 L18,90 L30,26 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
          <path d="M68,26 L52,26 L52,50 L70,90 L82,90 L68,26 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
          <!-- Bolsillos Delanteros -->
          <path d="M22,32 Q32,32 32,26" fill="none" stroke="${strokeColor}" stroke-width="2"/>
          <path d="M78,32 Q68,32 68,26" fill="none" stroke="${strokeColor}" stroke-width="2"/>
          <!-- Reflectivos en botamangas (si tiene reflectivos) -->
          ${product.name.includes('Reflect') || product.id === '55031' ? `
            <rect x="23" y="78" width="10" height="4" fill="#cbd5e1" stroke="${strokeColor}" stroke-width="1"/>
            <rect x="67" y="78" width="10" height="4" fill="#cbd5e1" stroke="${strokeColor}" stroke-width="1"/>
          ` : ''}
        </svg>
      `;
    } else if (isFootwear) {
      // Dibujo vectorial de Botín / Calzado de seguridad
      return `
        <svg class="ill-shoes" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Tobillera / Caña -->
          <path d="M35,30 L55,30 L60,45 L30,45 Z" fill="#2d3748" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
          <!-- Capellada del botín -->
          <path d="M30,45 L60,45 L85,65 L85,78 L20,78 L20,60 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
          <!-- Puntera (Acero o Composite) -->
          <path d="M70,55 C78,55 85,63 85,70 L85,78 L65,78 Z" fill="${fillSecondary}" stroke="${strokeColor}" stroke-width="1.5" opacity="0.6"/>
          <!-- Suela bidensidad robusta -->
          <path d="M16,78 L88,78 C88,78 90,83 85,85 L20,85 C15,83 16,78 16,78 Z" fill="#1a202c" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
          <!-- Cordones -->
          <line x1="45" y1="35" x2="52" y2="48" stroke="${fillSecondary}" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="50" y1="35" x2="42" y2="48" stroke="${fillSecondary}" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Refuerzo / Detalle Fluorescente (si el botín es flúor) -->
          ${product.id === '58002' ? `
            <path d="M30,55 L45,52 L50,65 L32,67 Z" fill="#39ff14" opacity="0.9"/>
          ` : ''}
        </svg>
      `;
    } else if (isAccessory) {
      // Guantes, Medias o Plantilla
      if (name.includes('guante')) {
        return `
          <svg class="ill-accessory" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,50 C25,35 30,30 35,30 C38,30 40,35 40,40 L40,20 C40,15 45,15 45,20 L45,15 C45,10 50,10 50,15 L50,18 C50,12 55,12 55,18 L55,22 C55,17 60,17 60,22 L60,50 L65,52 L62,75 L30,75 L28,58 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
            <!-- Moteado de PVC en palma (si es el guante moteado) -->
            ${product.id === '88105' ? `
              <circle cx="38" cy="50" r="2" fill="#1a2c4e"/><circle cx="44" cy="48" r="2" fill="#1a2c4e"/><circle cx="50" cy="48" r="2" fill="#1a2c4e"/><circle cx="56" cy="52" r="2" fill="#1a2c4e"/>
              <circle cx="40" cy="56" r="2" fill="#1a2c4e"/><circle cx="46" cy="54" r="2" fill="#1a2c4e"/><circle cx="52" cy="54" r="2" fill="#1a2c4e"/><circle cx="48" cy="62" r="2" fill="#1a2c4e"/>
            ` : ''}
          </svg>
        `;
      }
      // Medias o Plantilla
      return `
        <svg class="ill-accessory" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M30,20 L50,20 L52,50 L75,70 C80,75 75,85 65,85 L50,85 L35,55 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
        </svg>
      `;
    } else {
      // Dibujo vectorial de Camisa / Chomba / Buzo / Campera
      return `
        <svg class="ill-shirt" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Cuerpo de la Camisa -->
          <path d="M30,22 L42,16 L58,16 L70,22 L76,45 L65,48 L62,32 L62,88 L38,88 L38,32 L35,48 L24,45 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="round"/>
          <!-- Cuello -->
          <path d="M42,16 L50,26 L58,16 Z" fill="${fillSecondary}" stroke="${strokeColor}" stroke-width="2"/>
          <path d="M37,16 L44,28 L50,26 L42,16 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="1.5"/>
          <path d="M63,16 L56,28 L50,26 L58,16 Z" fill="${hexColor}" stroke="${strokeColor}" stroke-width="1.5"/>
          <!-- Bolsillos del pecho (si tiene bolsillos) -->
          ${name.includes('camisa') || name.includes('campera') || name.includes('cargo') ? `
            <rect x="33" y="36" width="10" height="12" fill="${hexColor}" stroke="${strokeColor}" stroke-width="1.5"/>
            <rect x="57" y="36" width="10" height="12" fill="${hexColor}" stroke="${strokeColor}" stroke-width="1.5"/>
          ` : ''}
          <!-- Tiras reflectivas de seguridad (si corresponde) -->
          ${product.name.includes('Reflect') ? `
            <rect x="27" y="52" width="46" height="4" fill="#cbd5e1" stroke="${strokeColor}" stroke-width="1"/>
            <rect x="38" y="30" width="4" height="22" fill="#cbd5e1" stroke="${strokeColor}" stroke-width="1"/>
            <rect x="58" y="30" width="4" height="22" fill="#cbd5e1" stroke="${strokeColor}" stroke-width="1"/>
          ` : ''}
        </svg>
      `;
    }
  }

  // --- RENDERIZADO DEL CATÁLOGO ---
  function renderCatalog() {
    DOM.productGrid.innerHTML = '';
    
    // Filtrar productos del catálogo global
    const filteredProducts = window.PRODUCT_CATALOG.filter(product => {
      // Filtro por categoría
      const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
      
      // Filtro por buscador (nombre, art. ID o descripción)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = query === '' || 
                            product.name.toLowerCase().includes(query) ||
                            product.id.includes(query) ||
                            product.category.toLowerCase().includes(query) ||
                            product.description.toLowerCase().includes(query);
                            
      return matchesCategory && matchesSearch;
    });

    // Mostrar/ocultar barra de estado de filtros
    if (searchQuery !== '' || currentCategory !== 'all') {
      DOM.filterResultsBar.style.display = 'flex';
      let resultsText = `Encontrados ${filteredProducts.length} productos`;
      if (searchQuery !== '') resultsText += ` para "${searchQuery}"`;
      if (currentCategory !== 'all') resultsText += ` en ${currentCategory}`;
      DOM.filterResultsText.textContent = resultsText;
    } else {
      DOM.filterResultsBar.style.display = 'none';
    }

    if (filteredProducts.length === 0) {
      DOM.productGrid.innerHTML = `
        <div class="loading-spinner">
          <p>⚠️ No se encontraron productos que coincidan con tu búsqueda.</p>
          <button id="search-reset-empty" class="btn btn-secondary" style="margin-top: 1rem;">Ver todos los productos</button>
        </div>
      `;
      document.getElementById('search-reset-empty')?.addEventListener('click', resetFilters);
      return;
    }

    // Crear tarjetas de producto
    filteredProducts.forEach(product => {
      const card = document.createElement('article');
      card.className = 'product-card';
      
      const badgeClass = product.category.toLowerCase().includes('snipe') ? 'snipe' : '';
      const badgeText = product.category;
      
      // Tomar el primer color por defecto
      const defaultColor = product.colores && product.colores.length > 0 ? product.colores[0].code : '#005c30';
      
      // Renderizar colores disponibles
      let colorsHTML = '';
      if (product.colores && product.colores.length > 0) {
        colorsHTML = '<div class="product-colors-preview">';
        product.colores.forEach(c => {
          colorsHTML += `<span class="color-dot-preview" style="background-color: ${c.code};" title="${c.name}"></span>`;
        });
        if (product.colores.length > 4) {
          colorsHTML += `<span class="color-count-text">+${product.colores.length - 4}</span>`;
        }
        colorsHTML += '</div>';
      }

      // Renderizar talles disponibles resumidos
      let sizesHTML = '';
      if (product.talles && product.talles.length > 0) {
        const firstSize = product.talles[0];
        const lastSize = product.talles[product.talles.length - 1];
        const sizeText = product.talles.length === 1 ? firstSize : `Talles: ${firstSize} al ${lastSize}`;
        sizesHTML = `<span class="product-sizes-preview">${sizeText}</span>`;
      }

      const imageHTML = product.image
        ? `<img src="${product.image}" alt="${product.name}" class="product-image-img">`
        : getProductSVG(product, defaultColor);

      card.innerHTML = `
        <span class="product-card-badge ${badgeClass}">${badgeText}</span>
        <div class="product-image-container">
          ${imageHTML}
        </div>
        <div class="product-info">
          <span class="product-art">ART. ${product.id}</span>
          <h3 class="product-title">${product.name}</h3>
          ${colorsHTML}
          ${sizesHTML}
          <div class="product-action-row">
            <button class="btn btn-secondary btn-block view-details-btn" data-id="${product.id}">Ver Detalles</button>
          </div>
        </div>
      `;

      // Evento para abrir modal de detalles
      card.querySelector('.view-details-btn').addEventListener('click', () => {
        openProductDetail(product);
      });

      DOM.productGrid.appendChild(card);
    });
  }

  // --- DETALLES DE PRODUCTO EN MODAL ---
  function openProductDetail(product) {
    selectedProduct = product;
    selectedColor = product.colores && product.colores.length > 0 ? product.colores[0] : null;
    selectedSize = null;
    selectedQuantity = 1;
    
    // Actualizar contenido del modal
    DOM.modalProductArt.textContent = `ART. ${product.id}`;
    DOM.modalProductCategory.textContent = product.category;
    DOM.modalProductName.textContent = product.name;
    DOM.modalProductDesc.textContent = product.description;
    DOM.modalQuantity.value = selectedQuantity;
    
    // Características
    DOM.modalProductFeatures.innerHTML = '';
    product.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      DOM.modalProductFeatures.appendChild(li);
    });

    // Ilustración dinámica en el modal
    updateModalIllustration();

    // Renderizar Selector de Colores
    DOM.modalColorOptions.innerHTML = '';
    const colorWrapper = document.getElementById('color-selector-wrapper');
    
    if (product.colores && product.colores.length > 0) {
      colorWrapper.style.display = 'flex';
      DOM.selectedColorName.textContent = selectedColor ? selectedColor.name : '';
      
      product.colores.forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'color-option-btn';
        if (selectedColor && selectedColor.name === color.name) {
          btn.classList.add('selected');
        }
        btn.style.backgroundColor = color.code;
        btn.title = color.name;
        
        btn.addEventListener('click', () => {
          DOM.modalColorOptions.querySelectorAll('.color-option-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          selectedColor = color;
          DOM.selectedColorName.textContent = color.name;
          updateModalIllustration();
        });
        
        DOM.modalColorOptions.appendChild(btn);
      });
    } else {
      colorWrapper.style.display = 'none';
      selectedColor = null;
    }

    // Renderizar Selector de Talles
    DOM.modalSizeOptions.innerHTML = '';
    product.talles.forEach(talle => {
      const btn = document.createElement('button');
      btn.className = 'size-option-btn';
      btn.textContent = talle;
      
      btn.addEventListener('click', () => {
        DOM.modalSizeOptions.querySelectorAll('.size-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = talle;
      });
      
      DOM.modalSizeOptions.appendChild(btn);
    });

    // Ocultar botón de guía de talles si no tiene cargada una guía
    if (product.sizeGuide) {
      DOM.modalSizeGuideTrigger.style.display = 'inline-flex';
    } else {
      DOM.modalSizeGuideTrigger.style.display = 'none';
    }

    // Mostrar modal
    DOM.productDetailModal.classList.add('active');
    DOM.productDetailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
  }

  function closeProductDetail() {
    DOM.productDetailModal.classList.remove('active');
    DOM.productDetailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    selectedProduct = null;
  }

  function updateModalIllustration() {
    if (selectedProduct) {
      const colorCode = selectedColor ? selectedColor.code : '#005c30';
      DOM.modalProductIllustration.innerHTML = selectedProduct.image
        ? `<img src="${selectedProduct.image}" alt="${selectedProduct.name}" class="product-image-img">`
        : getProductSVG(selectedProduct, colorCode);
    }
  }

  // --- MODAL DE GUÍA DE TALLES ---
  function openSizeGuide() {
    if (!selectedProduct || !selectedProduct.sizeGuide) return;
    
    DOM.sizeGuideProductName.textContent = `${selectedProduct.name} (ART. ${selectedProduct.id})`;
    DOM.sizeGuideTableContainer.innerHTML = '';
    
    const guide = selectedProduct.sizeGuide;
    const table = document.createElement('table');
    table.className = 'size-table';
    
    // Cabeceras
    let theadHTML = '<thead><tr>';
    guide.headers.forEach(h => {
      theadHTML += `<th>${h}</th>`;
    });
    theadHTML += '</tr></thead>';
    
    // Filas
    let tbodyHTML = '<tbody>';
    guide.rows.forEach(row => {
      // Verificar si coincide con el talle seleccionado en el modal para resaltarlo
      const isSelectedRow = selectedSize && (row[0] === selectedSize || (row[1] && row[1] === selectedSize));
      const rowClass = isSelectedRow ? 'class="highlight-row"' : '';
      
      tbodyHTML += `<tr ${rowClass}>`;
      row.forEach(val => {
        tbodyHTML += `<td>${val}</td>`;
      });
      tbodyHTML += '</tr>';
    });
    tbodyHTML += '</tbody>';
    
    table.innerHTML = theadHTML + tbodyHTML;
    DOM.sizeGuideTableContainer.appendChild(table);
    
    DOM.sizeGuideModal.classList.add('active');
    DOM.sizeGuideModal.setAttribute('aria-hidden', 'false');
  }

  function closeSizeGuide() {
    DOM.sizeGuideModal.classList.remove('active');
    DOM.sizeGuideModal.setAttribute('aria-hidden', 'true');
  }

  // --- GESTIÓN DEL CARRITO DE COMPRAS ---
  function addToCart() {
    if (!selectedProduct) return;
    
    // Validar color si tiene variantes
    if (selectedProduct.colores && selectedProduct.colores.length > 0 && !selectedColor) {
      showToast('⚠️ Por favor, selecciona un color.');
      return;
    }
    
    // Validar talle
    if (!selectedSize) {
      showToast('⚠️ Por favor, selecciona un talle.');
      return;
    }

    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      category: selectedProduct.category,
      color: selectedColor ? selectedColor.name : null,
      colorCode: selectedColor ? selectedColor.code : null,
      size: selectedSize,
      quantity: selectedQuantity,
      productRef: selectedProduct // Guardamos referencia por si se necesita
    };

    // Verificar si ya existe un item idéntico (mismo ID, talle y color)
    const existingIndex = cart.findIndex(item => 
      item.id === cartItem.id && 
      item.size === cartItem.size && 
      item.color === cartItem.color
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += selectedQuantity;
    } else {
      cart.push(cartItem);
    }

    saveCart();
    updateCartUI();
    closeProductDetail();
    showToast(`🛒 Agregado: ${cartItem.name} (Talle ${cartItem.size})`);
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }

  function updateItemQuantity(index, newQty) {
    if (newQty < 1) return;
    cart[index].quantity = newQty;
    saveCart();
    updateCartUI();
  }

  function saveCart() {
    localStorage.setItem('ombu_cart', JSON.stringify(cart));
  }

  function updateCartUI() {
    // Calcular cantidad total de prendas en el carrito
    const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Actualizar badges
    DOM.cartCountBadge.textContent = totalItemsCount;
    DOM.cartDrawerCount.textContent = totalItemsCount;
    DOM.cartTotalQty.textContent = totalItemsCount;
    
    // Renderizar listado de items
    DOM.cartItemsList.innerHTML = '';
    
    if (cart.length === 0) {
      DOM.cartItemsList.innerHTML = `
        <div class="cart-empty-message">
          <svg class="icon"><use href="#icon-cart"></use></svg>
          <p>Tu carrito de pedido está vacío.</p>
          <p style="font-size:0.8rem; margin-top:0.5rem;">Navegá por nuestro catálogo y agregá las prendas que necesites.</p>
        </div>
      `;
      DOM.checkoutFormContainer.style.display = 'none';
      DOM.sendWhatsappBtn.disabled = true;
    } else {
      DOM.checkoutFormContainer.style.display = 'block';
      validateCheckoutForm(); // Habilitar/deshabilitar botón según formulario
      
      cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        
        const colorText = item.color ? `, Color: ${item.color}` : '';
        const colorDot = item.colorCode ? `<span class="color-dot-preview" style="background-color: ${item.colorCode}; display:inline-block; vertical-align:middle; margin-left:4px; width:10px; height:10px;"></span>` : '';
        
        itemElement.innerHTML = `
          <div class="cart-item-visual">
            ${getProductSVG(item.productRef || {name: item.name}, item.colorCode || '#005c30')}
          </div>
          <div class="cart-item-details">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-meta">Art: ${item.id} | Talle: <span>${item.size}</span>${colorDot}</span>
            <div class="cart-item-qty-row">
              <div class="cart-item-qty-picker">
                <button type="button" class="btn-qty-item-minus" data-index="${index}">-</button>
                <input type="number" value="${item.quantity}" readonly>
                <button type="button" class="btn-qty-item-plus" data-index="${index}">+</button>
              </div>
            </div>
          </div>
          <button class="btn-remove-item" data-index="${index}" aria-label="Eliminar item">
            <svg class="icon"><use href="#icon-trash"></use></svg>
          </button>
        `;
        
        // Listeners del selector de cantidad dentro del carrito
        itemElement.querySelector('.btn-qty-item-minus').addEventListener('click', () => {
          updateItemQuantity(index, item.quantity - 1);
        });
        itemElement.querySelector('.btn-qty-item-plus').addEventListener('click', () => {
          updateItemQuantity(index, item.quantity + 1);
        });
        itemElement.querySelector('.btn-remove-item').addEventListener('click', () => {
          removeFromCart(index);
        });
        
        DOM.cartItemsList.appendChild(itemElement);
      });
    }
  }

  // --- VALIDACIÓN DE FORMULARIO DE CLIENTE ---
  function validateCheckoutForm() {
    const isNameValid = DOM.clientName.value.trim().length > 2;
    const isAddressValid = DOM.clientAddress.value.trim().length > 4;
    
    DOM.sendWhatsappBtn.disabled = !(isNameValid && isAddressValid && cart.length > 0);
  }

  // --- ENVÍO DE PEDIDO A WHATSAPP ---
  function sendOrderToWhatsapp() {
    if (cart.length === 0) return;
    
    const name = DOM.clientName.value.trim();
    const address = DOM.clientAddress.value.trim();
    const notes = DOM.clientNotes.value.trim();
    
    // Obtener variables del negocio de config.js
    const config = window.STORE_CONFIG || { whatsappNumber: "5491157003273", whatsappGreeting: "Hola!" };
    
    let message = `${config.whatsappGreeting}\n\n`;
    message += `📋 *DETALLE DEL PEDIDO:*\n`;
    
    cart.forEach((item, index) => {
      const colorDetails = item.color ? ` - Color: ${item.color}` : '';
      message += `${index + 1}. *${item.quantity}* x ${item.name} (Art. ${item.id}) [Talle: ${item.size}${colorDetails}]\n`;
    });
    
    message += `\n👤 *DATOS DEL CLIENTE:* \n`;
    message += `- *Nombre:* ${name}\n`;
    message += `- *Lugar de Entrega:* ${address}\n`;
    
    if (notes) {
      message += `- *Notas Adicionales:* ${notes}\n`;
    }
    
    message += `\n🛒 _Pedido generado desde catálogo digital de revendedor._`;

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${config.whatsappNumber}&text=${encodedMessage}`;
    
    // Redirigir al usuario a WhatsApp
    window.open(whatsappURL, '_blank');
  }

  // --- NOTIFICACIÓN FLOTANTE (TOAST) ---
  let toastTimeout;
  function showToast(message) {
    clearTimeout(toastTimeout);
    DOM.toast.textContent = message;
    DOM.toast.classList.add('active');
    
    toastTimeout = setTimeout(() => {
      DOM.toast.classList.remove('active');
    }, 3000);
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Buscador
    DOM.searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      DOM.searchClearBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
      renderCatalog();
    });
    
    DOM.searchClearBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      searchQuery = '';
      DOM.searchClearBtn.style.display = 'none';
      renderCatalog();
      DOM.searchInput.focus();
    });
    
    DOM.resetFiltersBtn.addEventListener('click', resetFilters);

    // Navegación por categorías (Tabs)
    DOM.categoryTabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-btn')) {
        DOM.categoryTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-category');
        renderCatalog();
      }
    });

    // Control de cantidades en Modal
    DOM.qtyMinus.addEventListener('click', () => {
      if (selectedQuantity > 1) {
        selectedQuantity--;
        DOM.modalQuantity.value = selectedQuantity;
      }
    });

    DOM.qtyPlus.addEventListener('click', () => {
      if (selectedQuantity < 99) {
        selectedQuantity++;
        DOM.modalQuantity.value = selectedQuantity;
      }
    });

    // Añadir al carrito desde Modal
    DOM.addToCartActionBtn.addEventListener('click', addToCart);

    // Triggers de Guía de Talles
    DOM.modalSizeGuideTrigger.addEventListener('click', openSizeGuide);
    DOM.closeSizeModal.addEventListener('click', closeSizeGuide);

    // Carrito Drawer Toggle
    DOM.cartToggle.addEventListener('click', openCartDrawer);
    DOM.closeCartBtn.addEventListener('click', closeCartDrawer);
    DOM.closeCartBackdrop.addEventListener('click', closeCartDrawer);

    // Cerrar modales con clic en cruz o fuera del card
    DOM.closeDetailModal.addEventListener('click', closeProductDetail);
    DOM.productDetailModal.addEventListener('click', (e) => {
      if (e.target === DOM.productDetailModal) closeProductDetail();
    });
    DOM.sizeGuideModal.addEventListener('click', (e) => {
      if (e.target === DOM.sizeGuideModal) closeSizeGuide();
    });

    // Validación en tiempo real del formulario del cliente
    DOM.clientName.addEventListener('input', validateCheckoutForm);
    DOM.clientAddress.addEventListener('input', validateCheckoutForm);

    // Envío del pedido
    DOM.sendWhatsappBtn.addEventListener('click', sendOrderToWhatsapp);
  }

  function openCartDrawer() {
    DOM.cartDrawer.classList.add('active');
    DOM.cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    DOM.cartDrawer.classList.remove('active');
    DOM.cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function resetFilters() {
    DOM.searchInput.value = '';
    searchQuery = '';
    DOM.searchClearBtn.style.display = 'none';
    currentCategory = 'all';
    DOM.categoryTabs.querySelectorAll('.tab-btn').forEach(btn => {
      if (btn.getAttribute('data-category') === 'all') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    renderCatalog();
  }

  // --- INICIO DE LA APLICACIÓN ---
  init();
});
