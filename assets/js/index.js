function updatePrice(){
    let quantity = document.getElementById('quantity').value;
    let unitPrice = document.getElementById('unit-price').innerHTML;
    let amount = parseInt(unitPrice) * parseInt(quantity);
    let description = document.getElementById('product-description').innerHTML;

    document.getElementById('cart-total').innerHTML = '$ ' + amount;
    document.getElementById('description').value = description;
    document.getElementById('amount').value = parseInt(unitPrice);
    document.getElementById('quantity-total').value = quantity;
    };
document.getElementById('quantity').addEventListener('change', updatePrice);
updatePrice();
