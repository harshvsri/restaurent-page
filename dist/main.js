(() => {
  "use strict";
  !(function () {
    const e = document.querySelector("#content"),
      t = document.createElement("div");
    t.classList.add("navbar");
    const n = document.createElement("ul");
    function c() {
      const t = e.childNodes;
      for (let n = t.length - 1; n >= 0; n--) {
        const c = t[n];
        c.classList.contains("navbar") || e.removeChild(c);
      }
    }
    ["Home", "Menu", "Contact"].forEach((e) => {
      const t = document.createElement("li");
      (t.textContent = `${e}`), n.appendChild(t);
    }),
      t.appendChild(n),
      e.appendChild(t),
      document.querySelectorAll("li").forEach((e) => {
        e.addEventListener("click", () => {
          switch (e.textContent.toLowerCase()) {
            case "home":
              c(),
                (function () {
                  const e = document.querySelector("#content"),
                    t = document.createElement("div");
                  t.classList.add("landing-page");
                  const n = document.createElement("div");
                  n.classList.add("outlet-name"),
                    (n.textContent = "HARSH'S FOOD OUTLET"),
                    t.appendChild(n);
                  const c = document.createElement("img");
                  (c.src = "../assets/51680.jpg"), t.appendChild(c);
                  const d = document.createElement("div");
                  d.classList.add("timings");
                  const a = document.createElement("table");
                  (a.id = "openingHours"),
                    [
                      ["Day", "Opening Time", "Closing Time"],
                      ["Monday", "10:00 AM", "10:00 PM"],
                      ["Tuesday", "10:00 AM", "10:00 PM"],
                      ["Wednesday", "10:00 AM", "10:00 PM"],
                      ["Thursday", "10:00 AM", "10:00 PM"],
                      ["Friday", "10:00 AM", "12:00 AM"],
                      ["Saturday", "09:00 AM", "12:00 AM"],
                      ["Sunday", "09:00 AM", "10:00 PM"],
                    ].forEach((e) => {
                      const t = document.createElement("tr");
                      e.forEach((e) => {
                        const n = document.createElement("td");
                        (n.textContent = e), t.appendChild(n);
                      }),
                        a.appendChild(t);
                    }),
                    d.appendChild(a),
                    t.appendChild(d),
                    e.appendChild(t);
                })();
              break;
            case "menu":
              c(),
                (function () {
                  const e = document.querySelector("#content"),
                    t = document.createElement("div");
                  t.classList.add("menu-page");
                  const n = document.createElement("div");
                  n.classList.add("menu"),
                    [
                      ["Paneer Tikka", 100],
                      ["Chicken Tikka", 200],
                      ["Rajma Chawal", 150],
                    ].forEach((e) => {
                      const t = document.createElement("div");
                      t.classList.add("menu-item"),
                        (t.textContent = `${e[0]}`),
                        n.appendChild(t);
                    }),
                    t.appendChild(n),
                    e.appendChild(t);
                })();
          }
        });
      });
  })();
})();
