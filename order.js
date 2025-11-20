<script>
function saveOrder(packageName, price, uid){
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
        id: Date.now(),
        package: packageName,
        price: price,
        uid: uid,
        status: "Pending"
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order সফলভাবে সাবমিট হয়েছে!");
}
</script>
