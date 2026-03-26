// ===========================
// MENU DATA
// ===========================

const menuData = {
    pizza: [
        { id: 'p1', name: 'Chicken Tikka', image: 'https://images.unsplash.com/photo-1614707267537-b85faf00021b?w=400', sizes: { S: 599, M: 799, L: 999 } },
        { id: 'p2', name: 'Chicken Fajita', image: 'https://images.unsplash.com/photo-1579751626658-0e0edc60d3dd?w=400', sizes: { S: 649, M: 849, L: 1049 } },
        { id: 'p3', name: 'Nawabi Pizza', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400', sizes: { S: 699, M: 899, L: 1099 } },
        { id: 'p4', name: 'Malai Boti', image: 'https://images.unsplash.com/photo-1571407-918b9e13a401?w=400', sizes: { S: 549, M: 749, L: 949 } },
        { id: 'p5', name: 'Tandoori Pizza', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400', sizes: { S: 699, M: 899, L: 1099 } },
        { id: 'p6', name: 'Kebabish Pizza', image: 'https://images.unsplash.com/photo-1593560708920-36f28ddf4d64?w=400', sizes: { S: 649, M: 849, L: 1049 } },
        { id: 'p7', name: 'Nawabi Cheese', image: 'https://images.unsplash.com/photo-1528840042246-fb7ee8867ae0?w=400', sizes: { S: 749, M: 949, L: 1149 } },
        { id: 'p8', name: 'Crown Crust', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400', sizes: { M: 899, L: 1199 } },
        { id: 'p9', name: 'Stake Pizza', image: 'https://images.unsplash.com/photo-1571994588005-c48c65f8c5a4?w=400', sizes: { S: 699, M: 899, L: 1099 } },
        { id: 'p10', name: 'Four Excel', image: 'https://images.unsplash.com/photo-1555992336-f3bbb505b311?w=400', sizes: { S: 699, M: 899, L: 1099 } },
        { id: 'p11', name: 'Bonfire Pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', sizes: { S: 749, M: 949, L: 1149 } },
        { id: 'p12', name: 'Moon Special', image: 'https://images.unsplash.com/photo-1533134242443-742f1123fbf6?w=400', sizes: { S: 799, M: 999, L: 1299 } }
    ],
    burger: [
        { id: 'b1', name: 'Zinger Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', sizes: { R: 449 } },
        { id: 'b2', name: 'Cheese Burger', image: 'https://images.unsplash.com/photo-1550547990-25967502a51b?w=400', sizes: { R: 399 } },
        { id: 'b3', name: 'Loaded Burger', image: 'https://images.unsplash.com/photo-1562547256-c4e80f0a0c67?w=400', sizes: { R: 549 } },
        { id: 'b4', name: 'Double Burger', image: 'https://images.unsplash.com/photo-1571091718767-24fc42ebf551?w=400', sizes: { R: 599 } }
    ],
    shawarma: [
        { id: 's1', name: 'Chicken Shawarma Roll', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd4c430?w=400', sizes: { R: 349 } },
        { id: 's2', name: 'Chicken Shawarma Platter', image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b6?w=400', sizes: { R: 649 } },
        { id: 's3', name: 'Beef Shawarma Roll', image: 'https://images.unsplash.com/photo-1585238341710-4b4e6ceaea18?w=400', sizes: { R: 399 } },
        { id: 's4', name: 'Beef Shawarma Platter', image: 'https://images.unsplash.com/photo-1599504339406-bde125db1993?w=400', sizes: { R: 699 } }
    ],
    fries: [
        { id: 'f1', name: 'Regular Fries', image: 'https://images.unsplash.com/photo-1584621666175-e26989ac291c?w=400', sizes: { R: 199 } },
        { id: 'f2', name: 'Loaded Fries', image: 'https://images.unsplash.com/photo-1585618372595-5f8de4a4efda?w=400', sizes: { R: 349 } },
        { id: 'f3', name: 'Masala Fries', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400', sizes: { R: 249 } }
    ],
    pasta: [
        { id: 'pa1', name: 'Alfredo Pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400', sizes: { M: 449, L: 599 } },
        { id: 'pa2', name: 'Macaroni Pasta', image: 'https://images.unsplash.com/photo-1598521868836-bc5e8f3f6e68?w=400', sizes: { M: 399, L: 549 } },
        { id: 'pa3', name: 'Creamy Pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400', sizes: { M: 499, L: 649 } }
    ],
    wrap: [
        { id: 'w1', name: 'Chicken Wrap', image: 'https://images.unsplash.com/photo-1585518419759-d550c06ba6a5?w=400', sizes: { R: 349 } },
        { id: 'w2', name: 'Veggie Wrap', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400', sizes: { R: 299 } },
        { id: 'w3', name: 'Spicy Wrap', image: 'https://images.unsplash.com/photo-1585518419759-d550c06ba6a5?w=400', sizes: { R: 399 } }
    ],
    drinks: [
        { id: 'd1', name: 'Pepsi', image: 'https://images.unsplash.com/photo-1554866585-cd94860144a7?w=400', sizes: { 'S (300ml)': 99, 'L (500ml)': 149 } },
        { id: 'd2', name: '7UP', image: 'https://images.unsplash.com/photo-1597318109832-b16cabda2d0e?w=400', sizes: { 'S (300ml)': 99, 'L (500ml)': 149 } },
        { id: 'd3', name: 'Fanta Orange', image: 'https://images.unsplash.com/photo-1590774033100-9f60a05a2833?w=400', sizes: { 'S (300ml)': 99, 'L (500ml)': 149 } },
        { id: 'd4', name: 'Iced Tea', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400', sizes: { 'S (250ml)': 129, 'L (500ml)': 199 } }
    ],
    deals: [
        { id: 'de1', name: 'Family Combo', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561818?w=400', sizes: { '2 Pizza + 2 Drinks': 1999 } },
        { id: 'de2', name: 'Party Pack', image: 'https://images.unsplash.com/photo-1619066449713-06a6dfca24ef?w=400', sizes: { '3 Pizza + 3 Drinks': 2999 } },
        { id: 'de3', name: 'Lunch Combo', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', sizes: { '1 Pizza + Fries + Drink': 999 } }
    ]
};

// ===========================
// APPLICATION STATE
// ===========================

class POSApp {
    constructor() {
        this.currentCategory = 'pizza';
        this.currentOrderType = 'dine-in';
        this.orderItems = [];
        this.history = [];
        this.historyIndex = -1;
        this.selectedItemData = null;
        this.selectedSize = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderMenuItems();
        this.updateDateTime();
        this.saveState();
        setInterval(() => this.updateDateTime(), 1000);
    }

    setupEventListeners() {
        // Order type buttons
        document.querySelectorAll('.order-type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleOrderTypeChange(e));
        });

        // Category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleCategoryChange(e));
        });

        // Undo/Redo buttons
        document.getElementById('undoBtn').addEventListener('click', () => this.undo());
        document.getElementById('redoBtn').addEventListener('click', () => this.redo());

        // Payment input
        document.getElementById('paidAmount').addEventListener('input', () => this.calculateChange());

        // Action buttons
        document.getElementById('sendKotBtn').addEventListener('click', () => this.sendKOT());
        document.getElementById('printBillBtn').addEventListener('click', () => this.printBill());
        document.getElementById('quickBillBtn').addEventListener('click', () => this.quickBill());
        document.getElementById('cancelOrderBtn').addEventListener('click', () => this.cancelOrder());
        document.getElementById('closeOrderBtn').addEventListener('click', () => this.closeOrder());

        // Modal controls
        const modal = document.getElementById('itemModal');
        document.querySelector('.modal-close').addEventListener('click', () => this.closeModal());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });

        // Modal quantity controls
        document.getElementById('qtyMinus').addEventListener('click', () => this.decrementQty());
        document.getElementById('qtyPlus').addEventListener('click', () => this.incrementQty());
        document.getElementById('addToOrderBtn').addEventListener('click', () => this.confirmAddToOrder());

        // Modal size selection
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('size-btn')) {
                this.selectSize(e.target);
            }
        });
    }

    handleOrderTypeChange(e) {
        document.querySelectorAll('.order-type-btn').forEach(btn => btn.classList.remove('active'));
        e.target.closest('.order-type-btn').classList.add('active');
        this.currentOrderType = e.target.closest('.order-type-btn').dataset.type;
        this.saveState();
    }

    handleCategoryChange(e) {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        e.target.closest('.category-btn').classList.add('active');
        this.currentCategory = e.target.closest('.category-btn').dataset.category;
        document.getElementById('categoryTitle').textContent = 
            e.target.closest('.category-btn').textContent.trim().split('\n')[1];
        this.renderMenuItems();
    }

    renderMenuItems() {
        const grid = document.getElementById('menuItemsGrid');
        grid.innerHTML = '';
        
        const items = menuData[this.currentCategory];
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item-card';
            const sizes = Object.keys(item.sizes).join(', ');
            const minPrice = Math.min(...Object.values(item.sizes));
            
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/200x120?text=${item.name}'">
                <div class="menu-item-info">
                    <div class="menu-item-name">${item.name}</div>
                    <div class="menu-item-sizes">
                        ${Object.keys(item.sizes).map(size => `<span class="size-option">${size}</span>`).join('')}
                    </div>
                    <div class="menu-item-price">From PKR ${minPrice}</div>
                </div>
            `;
            
            card.addEventListener('click', () => this.openItemModal(item));
            grid.appendChild(card);
        });
    }

    openItemModal(item) {
        this.selectedItemData = item;
        this.selectedSize = null;
        
        document.getElementById('modalItemName').textContent = item.name;
        document.getElementById('modalItemImage').src = item.image;
        document.getElementById('modalItemImage').onerror = function() {
            this.src = 'https://via.placeholder.com/300x200?text=' + item.name;
        };
        
        // Clear and render sizes
        const sizesContainer = document.getElementById('sizesContainer');
        sizesContainer.innerHTML = '';
        Object.entries(item.sizes).forEach(([size, price]) => {
            const btn = document.createElement('button');
            btn.className = 'size-btn';
            btn.textContent = `${size}\nPKR ${price}`;
            btn.dataset.size = size;
            btn.dataset.price = price;
            btn.addEventListener('click', () => this.selectSize(btn));
            sizesContainer.appendChild(btn);
        });
        
        document.getElementById('qtyInput').value = 1;
        document.getElementById('itemModal').classList.add('active');
    }

    selectSize(btn) {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedSize = {
            size: btn.dataset.size,
            price: parseInt(btn.dataset.price)
        };
    }

    incrementQty() {
        const input = document.getElementById('qtyInput');
        input.value = parseInt(input.value) + 1;
    }

    decrementQty() {
        const input = document.getElementById('qtyInput');
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    }

    confirmAddToOrder() {
        if (!this.selectedSize) {
            alert('Please select a size');
            return;
        }
        
        const qty = parseInt(document.getElementById('qtyInput').value);
        const newItem = {
            id: this.selectedItemData.id + '_' + this.selectedSize.size,
            name: this.selectedItemData.name,
            size: this.selectedSize.size,
            price: this.selectedSize.price,
            quantity: qty
        };
        
        // Check if item already exists
        const existingIndex = this.orderItems.findIndex(item => item.id === newItem.id);
        if (existingIndex !== -1) {
            this.orderItems[existingIndex].quantity += qty;
        } else {
            this.orderItems.push(newItem);
        }
        
        this.saveState();
        this.renderOrderItems();
        this.closeModal();
    }

    closeModal() {
        document.getElementById('itemModal').classList.remove('active');
    }

    renderOrderItems() {
        const tbody = document.getElementById('orderTableBody');
        tbody.innerHTML = '';
        
        this.orderItems.forEach((item, index) => {
            const row = document.createElement('tr');
            const total = item.price * item.quantity;
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.size}</td>
                <td>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="app.updateItemQty(${index}, -1)">-</button>
                        <input type="number" class="qty-input" value="${item.quantity}" onchange="app.setItemQty(${index}, this.value)" min="1">
                        <button class="qty-btn" onclick="app.updateItemQty(${index}, 1)">+</button>
                    </div>
                </td>
                <td>PKR ${total}</td>
                <td><button class="remove-btn" onclick="app.removeItem(${index})">Remove</button></td>
            `;
            tbody.appendChild(row);
        });
        
        this.updateBilling();
    }

    updateItemQty(index, change) {
        this.orderItems[index].quantity += change;
        if (this.orderItems[index].quantity < 1) {
            this.orderItems.splice(index, 1);
        }
        this.saveState();
        this.renderOrderItems();
    }

    setItemQty(index, value) {
        const qty = parseInt(value);
        if (qty < 1 || isNaN(qty)) {
            this.orderItems.splice(index, 1);
        } else {
            this.orderItems[index].quantity = qty;
        }
        this.saveState();
        this.renderOrderItems();
    }

    removeItem(index) {
        this.orderItems.splice(index, 1);
        this.saveState();
        this.renderOrderItems();
    }

    updateBilling() {
        const subtotal = this.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = Math.round(subtotal * 0.1);
        const total = subtotal + tax;
        
        document.getElementById('subtotal').textContent = `PKR ${subtotal}`;
        document.getElementById('tax').textContent = `PKR ${tax}`;
        document.getElementById('total').textContent = `PKR ${total}`;
        
        this.calculateChange();
    }

    calculateChange() {
        const total = this.getTotal();
        const paid = parseInt(document.getElementById('paidAmount').value || 0);
        const change = paid - total;
        
        document.getElementById('change').textContent = `PKR ${change > 0 ? change : 0}`;
    }

    getTotal() {
        const subtotal = this.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return subtotal + Math.round(subtotal * 0.1);
    }

    sendKOT() {
        if (this.orderItems.length === 0) {
            alert('No items in order');
            return;
        }

        let kotContent = 'KITCHEN ORDER TICKET\n';
        kotContent += '='.repeat(30) + '\n\n';
        kotContent += `Time: ${new Date().toLocaleString()}\n`;
        kotContent += `Order Type: ${this.currentOrderType.toUpperCase()}\n\n`;
        kotContent += 'ITEMS:\n';
        kotContent += '-'.repeat(30) + '\n';

        this.orderItems.forEach(item => {
            kotContent += `${item.name} (${item.size}) x${item.quantity}\n`;
        });

        kotContent += '\n' + '='.repeat(30) + '\n';
        kotContent += 'Please prepare the above items\n';

        alert('KOT Sent to Kitchen!\n\n' + kotContent);
    }

    printBill() {
        if (this.orderItems.length === 0) {
            alert('No items to print');
            return;
        }

        this.generateReceipt();
        window.print();
    }

    quickBill() {
        if (this.orderItems.length === 0) {
            alert('No items to print');
            return;
        }

        this.generateReceipt();
        window.print();
        setTimeout(() => {
            this.clearOrder();
        }, 500);
    }

    generateReceipt() {
        const orderType = this.currentOrderType.toUpperCase().replace('-', ' ');
        document.getElementById('receiptOrderType').textContent = `Order Type: ${orderType}`;

        const itemsBody = document.getElementById('receiptItemsBody');
        itemsBody.innerHTML = '';

        this.orderItems.forEach(item => {
            const row = document.createElement('tr');
            const itemTotal = item.price * item.quantity;
            row.innerHTML = `
                <td>${item.name} (${item.size})</td>
                <td class="item-qty">x${item.quantity}</td>
                <td class="item-price">PKR ${itemTotal}</td>
            `;
            itemsBody.appendChild(row);
        });

        const subtotal = this.orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = Math.round(subtotal * 0.1);
        const total = subtotal + tax;
        const paid = parseInt(document.getElementById('paidAmount').value || 0);
        const change = paid - total;

        document.getElementById('receiptSubtotal').textContent = `PKR ${subtotal}`;
        document.getElementById('receiptTax').textContent = `PKR ${tax}`;
        document.getElementById('receiptTotal').textContent = `PKR ${total}`;
        document.getElementById('receiptPaid').textContent = `PKR ${paid > 0 ? paid : total}`;
        document.getElementById('receiptChange').textContent = `PKR ${change > 0 ? change : 0}`;
        document.getElementById('receiptDateTime').textContent = new Date().toLocaleString();
    }

    clearOrder() {
        this.orderItems = [];
        document.getElementById('paidAmount').value = '';
        this.saveState();
        this.renderOrderItems();
        alert('Order cleared!');
    }

    cancelOrder() {
        if (this.orderItems.length === 0) {
            alert('No order to cancel');
            return;
        }
        if (confirm('Are you sure you want to cancel this order?')) {
            this.clearOrder();
        }
    }

    closeOrder() {
        if (this.orderItems.length === 0) {
            alert('No order to close');
            return;
        }

        const total = this.getTotal();
        const paid = parseInt(document.getElementById('paidAmount').value || 0);

        if (paid < total) {
            alert(`Insufficient payment! Total: PKR ${total}, Paid: PKR ${paid}`);
            return;
        }

        this.generateReceipt();
        alert('✓ Order Closed Successfully!\nPrinting receipt...');
        window.print();
        setTimeout(() => {
            this.clearOrder();
        }, 500);
    }

    saveState() {
        const state = {
            orderItems: JSON.parse(JSON.stringify(this.orderItems)),
            timestamp: new Date()
        };

        // Remove states after current index
        this.history = this.history.slice(0, this.historyIndex + 1);
        
        this.history.push(state);
        this.historyIndex++;

        // Update button states
        document.getElementById('undoBtn').disabled = this.historyIndex <= 0;
        document.getElementById('redoBtn').disabled = this.historyIndex >= this.history.length - 1;
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.restoreState();
        }
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.restoreState();
        }
    }

    restoreState() {
        const state = this.history[this.historyIndex];
        this.orderItems = JSON.parse(JSON.stringify(state.orderItems));
        this.renderOrderItems();
        
        // Update button states
        document.getElementById('undoBtn').disabled = this.historyIndex <= 0;
        document.getElementById('redoBtn').disabled = this.historyIndex >= this.history.length - 1;
    }

    updateDateTime() {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        };
        document.getElementById('dateTime').textContent = now.toLocaleString('en-US', options);
    }
}

// ===========================
// INITIALIZE APPLICATION
// ===========================

let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new POSApp();
});
