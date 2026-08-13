document.addEventListener("DOMContentLoaded", () => {
    const simple = document.getElementById("type-simple");
    const compound = document.getElementById("type-compound");
    const row = document.getElementById("compound-row");
    const btn = document.getElementById("calculate-btn");
    const result = document.getElementById("results");

    const toggle = () => {
        row.style.display = compound.checked ? "block" : "none";
    };

    const money = n =>
        "₹" + n.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    const calculate = () => {
        const p = +document.getElementById("principal").value;
        const r = +document.getElementById("rate").value / 100;
        const t = +document.getElementById("time").value;

        if (p < 0 || r < 0 || t < 0 || isNaN(p) || isNaN(r) || isNaN(t)) {
            alert("Enter valid values.");
            return;
        }

        let amount, interest;

        if (simple.checked) {
            interest = p * r * t;
            amount = p + interest;
        } else {
            const n = +document.getElementById("compounding").value;
            amount = p * Math.pow(1 + r / n, n * t);
            interest = amount - p;
        }

        document.getElementById("res-principal").innerText = money(p);
        document.getElementById("res-interest").innerText = money(interest);
        document.getElementById("res-total").innerText = money(amount);

        result.classList.add("active");
    };

    simple.addEventListener("change", toggle);
    compound.addEventListener("change", toggle);
    btn.addEventListener("click", calculate);

    toggle();
});