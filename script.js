:root {
    --bg-color: #f4f6f8;
    --card-bg: #ffffff;
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    --danger-color: #ef4444;
    --text-color: #1f2937;
    --text-light: #6b7280;
    --border-color: #e5e7eb;
    --radius: 12px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    height: 100vh;
    overflow: hidden;
}

.pos-container {
    display: grid;
    grid-template-columns: 1fr 380px;
    height: 100vh;
    gap: 16px;
    padding: 16px;
}

/* Header Section */
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.section-header input {
    padding: 8px 14px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    outline: none;
    width: 200px;
}

/* Catalog Produk */
.products-section {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
}

.product-card {
    background: #f9fafb;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 14px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
}

.product-card:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.product-card .icon {
    font-size: 2.5rem;
    margin-bottom: 8px;
}

.product-card h4 {
    font-size: 0.95rem;
    margin-bottom: 4px;
}

.product-card .price {
    font-weight: 600;
    color: var(--primary-color);
    font-size: 0.9rem;
}

/* Panel Keranjang */
.cart-section {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 16px;
    border-bottom: 1px solid var(--border-color);
}

.empty-cart-msg {
    text-align: center;
    color: var(--text-light);
    margin-top: 40px;
    font-size: 0.9rem;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px dashed var(--border-color);
}

.cart-item-info h5 {
    font-size: 0.9rem;
}

.cart-item-info span {
    font-size: 0.8rem;
    color: var(--text-light);
}

.cart-controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.cart-controls button {
    width: 26px;
    height: 26px;
    border: 1px solid var(--border-color);
    background: white;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}

/* Ringkasan Pembayaran */
.cart-summary {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--text-light);
}

.total-row {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-color);
    margin-top: 4px;
}

.payment-input-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 6px;
}

.payment-input-group label {
    font-size: 0.8rem;
    color: var(--text-light);
}

.payment-input-group input {
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    outline: none;
}

.btn-checkout {
    width: 100%;
    padding: 12px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
}

.btn-checkout:disabled {
    background-color: #cbd5e1;
    cursor: not-allowed;
}

.btn-text {
    background: none;
    border: none;
    color: var(--danger-color);
    font-size: 0.85rem;
    cursor: pointer;
}

/* Modal Struk */
.modal {
    display: none;
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 24px;
    border-radius: var(--radius);
    width: 320px;
    font-family: monospace;
}

.receipt-header, .receipt-footer {
    text-align: center;
    font-size: 0.85rem;
}

.receipt-item-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    margin: 4px 0;
}

.modal-actions {
    display: flex;
    gap: 8px;
    margin-top: 16px;
}

.modal-actions button {
    flex: 1;
    padding: 8px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.btn-print { background: var(--primary-color); color: white; }
.btn-close { background: var(--border-color); color: var(--text-color); }

@media print {
    body * { visibility: hidden; }
    #receipt-modal, #receipt-modal * { visibility: visible; }
    #receipt-modal { position: absolute; left: 0; top: 0; width: 100%; background: none; }
    .modal-actions { display: none; }
}
