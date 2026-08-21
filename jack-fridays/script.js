// ─── MENU ─────────────────────────────────────────────────────────────────────

const menuItems = [
  {name:"Ribs",            category:"grill",    description:"Slow-cooked and full of flavour — a crowd favourite worth coming back for.",                          tag:"GRILL"},
  {name:"Steaks",          category:"grill",    description:"Classic cuts grilled to order and served exactly the way they should be.",                            tag:"GRILL"},
  {name:"Burgers",         category:"burgers",  description:"Generous pub-style burgers stacked with the good stuff for an easy match-day meal.",                  tag:"FAVOURITE"},
  {name:"Pizza",           category:"pizza",    description:"Properly loaded and consistently one of our most popular orders.",                                     tag:"FAVOURITE"},
  {name:"Chicken Wings",   category:"chicken",  description:"Perfectly seasoned wings that keep the table going through every half.",                              tag:"POPULAR"},
  {name:"Chicken Strips",  category:"chicken",  description:"Crispy, tender strips — an easy win any time of day.",                                                tag:"CHICKEN"},
  {name:"Hake",            category:"seafood",  description:"Fresh hake done right, for when you want something a little lighter.",                                tag:"SEAFOOD"},
  {name:"Sandwiches",      category:"share",    description:"Pub-style sandwiches built for a proper lunch or a quick pre-match bite.",                            tag:"LUNCH"},
  {name:"Bruschetta",      category:"share",    description:"A lighter starter that pairs well with almost anything on the menu.",                                 tag:"SHARE"},
  {name:"Sushi Selection", category:"share",    description:"A sushi selection for something a little different — ask your server for today's options.",           tag:"SHARE"}
];

const menuGrid = document.getElementById("menuGrid");
const tabs     = document.querySelectorAll(".menu-tab");

function renderMenu(category = "all") {
  const filtered = category === "all"
    ? menuItems
    : menuItems.filter(item => item.category === category);

  menuGrid.innerHTML = filtered.map((item, index) => `
    <article class="menu-item">
      <span class="number">${String(index + 1).padStart(2, "0")}</span>
      <span class="tag">${item.tag}</span>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});
renderMenu();


// ─── MOBILE NAVIGATION ────────────────────────────────────────────────────────
// body.nav-open is used for scroll-lock instead of body:has(.nav.open)
// so it works correctly in all browsers including older Firefox versions.

const toggle = document.querySelector(".menu-toggle");
const nav    = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  document.body.classList.toggle("nav-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  });
});


// ─── DATE MINIMUM ─────────────────────────────────────────────────────────────

const dateInput = document.querySelector('input[name="date"]');
const today     = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().split("T")[0];
dateInput.min = localToday;


// ─── RESERVATION FORM ─────────────────────────────────────────────────────────
//
// BEFORE LAUNCH — connect the form to Formspree (free tier available):
//   1. Sign up at https://formspree.io
//   2. Create a new form and copy your unique form ID
//   3. Replace REPLACE_WITH_YOUR_FORM_ID below with that ID
//      e.g.  https://formspree.io/f/abcd1234
//
// Formspree will email every reservation request to the address you register.
// No server-side code required.
//
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

const reservationForm = document.getElementById("reservationForm");
const formStatus      = document.getElementById("formStatus");
const submitBtn       = reservationForm.querySelector('button[type="submit"]');

reservationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Native browser validation
  if (!reservationForm.checkValidity()) {
    reservationForm.reportValidity();
    return;
  }

  // Guard: show helpful message if endpoint hasn't been configured yet
  if (FORMSPREE_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")) {
    formStatus.textContent = "Online booking is not yet active. Please call us on 012 941 0156 to reserve your table.";
    formStatus.style.color = "#ffb366";
    return;
  }

  // Loading state — prevent double-submit
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";
  formStatus.textContent = "";
  formStatus.style.color = "";

  const data = Object.fromEntries(new FormData(reservationForm).entries());

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method:  "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body:    JSON.stringify(data)
    });

    if (response.ok) {
      formStatus.textContent = `Your request for ${data.date} at ${data.time} has been sent — we'll be in touch to confirm shortly.`;
      formStatus.style.color = "#7ee07e";
      reservationForm.reset();
      dateInput.min = localToday;
    } else {
      const json = await response.json().catch(() => ({}));
      throw new Error(json.error || "Submission failed.");
    }
  } catch (err) {
    formStatus.textContent = "Something went wrong. Please call us directly on 012 941 0156.";
    formStatus.style.color = "#ff7070";
    console.error("Reservation form error:", err);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});


// ─── FOOTER YEAR ──────────────────────────────────────────────────────────────

document.getElementById("year").textContent = new Date().getFullYear();
