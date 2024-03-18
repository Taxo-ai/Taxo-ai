function displayProductName() {
    var input = document.getElementById('productNameInput');
    var label = document.getElementById('productNameLabel');
    label.textContent = "Product Name: " + input.value;
  }