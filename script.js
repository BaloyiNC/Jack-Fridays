// ─── MENU DATA ────────────────────────────────────────────────────────────────
// Sourced from official Jack Friday's menu board, August 2026.
// Verify pricing with management before launch — prices may change.

const menuItems = [
  // ALL DAY BREAKFAST
  {name:"Breakfast Bun",                  category:"breakfast", description:"1 egg, 2 rashers of bacon, cheese, tomato, shredded lettuce & mayo.",                                                                         tag:"BREAKFAST", price:"R45"},
  {name:"Jack's Breakfast Special",       category:"breakfast", description:"2 eggs, 2 rashers of bacon, 1 pork or beef sausage & grilled tomato, served with chips, toast & a choice of juice or coffee.",                tag:"POPULAR",   price:"R70"},
  {name:"Omelette",                       category:"breakfast", description:"Served with cheese & a choice of 2 extra fillings with a slice of toast.",                                                                     tag:"BREAKFAST", price:"R70"},
  // TOASTIES
  {name:"Bacon, Cheese & Tomato",         category:"breakfast", description:"A classic toastie.",                                                                                                                           tag:"TOASTIE",   price:"R55"},
  {name:"Bacon, Egg & Cheese",            category:"breakfast", description:"Toastie with crispy bacon, egg and cheese.",                                                                                                   tag:"TOASTIE",   price:"R59"},
  {name:"Chicken Mayo",                   category:"breakfast", description:"Creamy chicken mayo toastie.",                                                                                                                 tag:"TOASTIE",   price:"R59"},
  {name:"Ham & Cheese",                   category:"breakfast", description:"Classic ham and cheese toastie.",                                                                                                              tag:"TOASTIE",   price:"R50"},
  {name:"Ham, Cheese & Tomato",           category:"breakfast", description:"A hearty ham, cheese and tomato toastie.",                                                                                                     tag:"TOASTIE",   price:"R55"},
  {name:"Mince & Cheese Open Sandwich",   category:"breakfast", description:"Open sandwich with mince and cheese.",                                                                                                         tag:"TOASTIE",   price:"R59"},

  // STARTERS & LIGHT MEALS
  {name:"Crispy Potato Skins",            category:"starters",  description:"Crispy potato skins — a light bite to get things started.",                                                                                    tag:"STARTER",   price:"R15"},
  {name:"Jalapeño Poppers",               category:"starters",  description:"Stuffed jalapeño peppers, fried to order.",                                                                                                    tag:"STARTER",   price:"R89"},
  {name:"Feta, Garlic & Rosemary Focaccia",category:"starters", description:"Warm focaccia loaded with feta, garlic and rosemary.",                                                                                         tag:"STARTER",   price:"R54"},
  {name:"Crumbed Mushrooms",              category:"starters",  description:"Crumbed and fried mushrooms.",                                                                                                                 tag:"STARTER",   price:"R59"},
  {name:"Chicken Livers",                 category:"starters",  description:"Served with plain focaccia.",                                                                                                                  tag:"STARTER",   price:"R54"},
  {name:"Creamy Garlic Snails",           category:"starters",  description:"Served with bread fingers.",                                                                                                                   tag:"STARTER",   price:"R79"},
  {name:"Beef Trinchado",                 category:"starters",  description:"Beef in a creamy garlic sauce served with plain focaccia.",                                                                                     tag:"STARTER",   price:"R95"},
  {name:"Crumbed Sesame Chicken Strips",  category:"starters",  description:"Served with a sweet & sour sauce & chips.",                                                                                                    tag:"STARTER",   price:"R85"},
  {name:"Traditional Pap & Boerewors",   category:"starters",  description:"Served with home made sheba.",                                                                                                                 tag:"STARTER",   price:"R55"},
  {name:"Boerie Roll",                    category:"starters",  description:"Served with home made sheba.",                                                                                                                 tag:"STARTER",   price:"R50"},
  {name:"Sticky Sesame Chicken Strips",   category:"starters",  description:"Served with a sweet & sour sauce & chips.",                                                                                                    tag:"STARTER",   price:"R85"},
  {name:"Cheese Balls",                   category:"starters",  description:"Serving of 8 cheesy balls.",                                                                                                                   tag:"STARTER",   price:"R89"},

  // BURGERS
  {name:"Saucy JD Burger",               category:"burgers",   description:"150g beef patty, cheddar cheese, lettuce, tomato, onion, gherkins & Jack Daniel's BBQ sauce, served with chips.",                            tag:"BURGER",    price:"R99"},
  {name:"Beefy Cheese Burger",           category:"burgers",   description:"150g beef patty, cheddar cheese, lettuce, tomato, onion and gherkins, served with chips.",                                                    tag:"BURGER",    price:"R95"},
  {name:"Chicken Cheese Burger",         category:"burgers",   description:"Crumbed chicken breast, cheddar cheese, lettuce, tomato, onion, gherkins & sweet chilli mayo, served with chips.",                            tag:"BURGER",    price:"R85"},
  {name:"Hawaiian Burger",               category:"burgers",   description:"Crumbed chicken breast, grilled pineapple ring, cheddar cheese, lettuce, tomato, onion, gherkins & sweet chilli mayo, served with chips.",   tag:"BURGER",    price:"R90"},
  {name:"Trio of Sliders",               category:"burgers",   description:"Trio of cheese, bacon & sundried tomato, biltong & feta — served with chips.",                                                                tag:"BURGER",    price:"R95"},

  // MAINS
  {name:"Chicken Schnitzel",             category:"mains",     description:"Crumbed chicken breast with mushroom or cheese sauce.",                                                                                        tag:"MAINS",     price:"R105"},
  {name:"Beerpot Pie",                   category:"mains",     description:"Slow braised beef & vegetables covered and baked with puff pastry.",                                                                           tag:"MAINS",     price:"R105"},
  {name:"Half Chicken",                  category:"mains",     description:"Half chicken basted in your choice of BBQ, lemon & herb or peri-peri.",                                                                       tag:"MAINS",     price:"R120"},
  {name:"Pork Chops",                    category:"mains",     description:"Grilled or crumbed pork chops served with mushroom or cheese sauce, basted in BBQ, lemon & herb or peri-peri.",                              tag:"MAINS",     price:"R109"},
  {name:"1KG Chicken Wings",             category:"mains",     description:"Basted in your choice of BBQ, lemon & herb or peri-peri.",                                                                                    tag:"POPULAR",   price:"R185"},
  {name:"1KG Eisbein",                   category:"mains",     description:"Crispy eisbein served with a mustard sauce.",                                                                                                  tag:"MAINS",     price:"R145"},

  // GRILL
  {name:"Spare Ribs 500g",              category:"grill",     description:"Spare ribs served with a side of your choice.",                                                                                                tag:"GRILL",     price:"R155"},
  {name:"Spare Ribs 1KG",              category:"grill",     description:"Full rack of spare ribs served with a side of your choice.",                                                                                    tag:"GRILL",     price:"R219"},
  {name:"200g Rump Steak",              category:"grill",     description:"Served with a side of your choice.",                                                                                                           tag:"STEAK",     price:"R140"},
  {name:"300g Rump Steak",              category:"grill",     description:"Served with a side of your choice.",                                                                                                           tag:"STEAK",     price:"R165"},
  {name:"1KG Rump Steak",              category:"grill",     description:"For the serious meat lover — served with a side of your choice.",                                                                              tag:"STEAK",     price:"R169"},
  {name:"500g T-Bone",                  category:"grill",     description:"Served with a side of your choice.",                                                                                                           tag:"STEAK",     price:"R169"},

  // PIZZA
  {name:"Margarita",                     category:"pizza",     description:"Mozzarella cheese & napolitana sauce.",                                                                                                        tag:"PIZZA",     price:"R110"},
  {name:"Regina",                        category:"pizza",     description:"Mozzarella cheese, ham & mushroom.",                                                                                                           tag:"PIZZA",     price:"R125"},
  {name:"Hawaiian",                      category:"pizza",     description:"Mozzarella cheese, ham & pineapple.",                                                                                                          tag:"PIZZA",     price:"R120"},
  {name:"Jack Friday's Pizza",           category:"pizza",     description:"Mozzarella cheese, rump strips, bacon, salami, chili & feta cheese.",                                                                         tag:"SIGNATURE", price:"R150"},
  {name:"Africana",                      category:"pizza",     description:"Mozzarella cheese, biltong, peppadew, feta cheese & avocado (seasonal).",                                                                     tag:"PIZZA",     price:"R150"},
  {name:"Chicken Supreme",               category:"pizza",     description:"Mozzarella cheese, BBQ chicken, onions & peppers.",                                                                                            tag:"PIZZA",     price:"R140"},
  {name:"Blue Cheese Pizza",             category:"pizza",     description:"Mozzarella cheese, blue cheese, rump strips, peppers, onions & sweet chilli sauce.",                                                          tag:"PIZZA",     price:"R150"},
  {name:"Vegetarian",                    category:"pizza",     description:"Mozzarella cheese, mushrooms, peppers, red onions, olives & feta cheese.",                                                                    tag:"PIZZA",     price:"R140"},

  // SALADS
  {name:"Greek Salad",                   category:"salads",    description:"Lettuce, tomato, onion, feta cheese & olives with a greek salad dressing.",                                                                   tag:"SALAD",     price:"R55"},
  {name:"Jack Friday's Chicken Salad",   category:"salads",    description:"Grilled chicken strips, bacon, feta, olives & avocado (seasonal) with a home made honey mustard dressing.",                                   tag:"SALAD",     price:"R95"},
  {name:"Jack Friday's Beef Salad",      category:"salads",    description:"Beef strips, bacon, feta, olives & avocado (seasonal).",                                                                                      tag:"SALAD",     price:"R105"},

  // PASTA
  {name:"Spaghetti Bolognese",           category:"pasta",     description:"Served with a home made bolognese sauce.",                                                                                                    tag:"PASTA",     price:"R104"},
  {name:"Fettuccine Alfredo",            category:"pasta",     description:"Served with creamy ham & mushroom sauce.",                                                                                                    tag:"PASTA",     price:"R104"},

  // DRINKS — COCKTAILS
  {name:"Margarita Cocktail",            category:"drinks",    description:"The classic tequila cocktail.",                                                                                                               tag:"COCKTAIL",  price:"R95"},
  {name:"Mojito",                        category:"drinks",    description:"A refreshing rum and mint classic.",                                                                                                           tag:"COCKTAIL",  price:"R95"},
  {name:"Pina Colada",                   category:"drinks",    description:"Tropical and refreshing.",                                                                                                                    tag:"COCKTAIL",  price:"R80"},
  {name:"Strawberry Daiquiri",           category:"drinks",    description:"A fruity frozen favourite.",                                                                                                                  tag:"COCKTAIL",  price:"R105"},
  {name:"Raging Bull",                   category:"drinks",    description:"A bold house special.",                                                                                                                       tag:"COCKTAIL",  price:"R40"},
  {name:"Classic Old Fashioned",         category:"drinks",    description:"A timeless whisky longdrink.",                                                                                                                tag:"LONGDRINK", price:""},
  {name:"Jack N Wonderland",             category:"drinks",    description:"A signature Jack Friday's longdrink.",                                                                                                        tag:"SIGNATURE", price:""},
  {name:"Energy Fusion Long Island",     category:"drinks",    description:"A high-energy twist on the Long Island Iced Tea.",                                                                                            tag:"LONGDRINK", price:""},
  {name:"Long Island Iced Tea",          category:"drinks",    description:"The original longdrink classic.",                                                                                                             tag:"LONGDRINK", price:""},
  {name:"Miami Vice",                    category:"drinks",    description:"A tropical blend cocktail.",                                                                                                                  tag:"LONGDRINK", price:""},
  {name:"Mimosa",                        category:"drinks",    description:"Sparkling wine and citrus — perfect for celebrations.",                                                                                        tag:"COCKTAIL",  price:""},
  // DRINKS — WINE & BUBBLES
  {name:"Dutoitskloof Merlot",           category:"drinks",    description:"Red wine. Glass R210 · Bottle R210.",                                                                                                         tag:"RED WINE",  price:"From R210"},
  {name:"Diemersfontein Pinotage",       category:"drinks",    description:"Red wine. Glass R280 · Bottle R280.",                                                                                                         tag:"RED WINE",  price:"From R280"},
  {name:"Durbanville Hills Sauv Blanc",  category:"drinks",    description:"White wine. Glass R190 · Bottle R190.",                                                                                                       tag:"WHITE WINE",price:"From R190"},
  {name:"Jakkelsvlei Pink Moscato",      category:"drinks",    description:"Rosé. Glass R190.",                                                                                                                           tag:"ROSÉ",      price:"R190"},
  {name:"JC Le Roux La Chanson",         category:"drinks",    description:"Sparkling wine. Glass R40 · Bottle R170.",                                                                                                    tag:"SPARKLING", price:"From R40"},
  {name:"Moët & Chandon Brut Impérial", category:"drinks",    description:"Premium French champagne.",                                                                                                                   tag:"CHAMPAGNE", price:"R1600"},

  // DAILY SPECIALS
  {name:"Monday — Spare Ribs",           category:"specials",  description:"500G Spare Ribs served with a side of your choice.",                                                                                          tag:"MONDAY",    price:"R125"},
  {name:"Tuesday — All Burgers",         category:"specials",  description:"All burgers served with a side of your choice.",                                                                                              tag:"TUESDAY",   price:"R79"},
  {name:"Wednesday — All Pizzas",        category:"specials",  description:"All pizzas at half price.",                                                                                                                   tag:"WEDNESDAY", price:"HALF PRICE"},
  {name:"Thursday — Wings & Windhoek",   category:"specials",  description:"1KG Chicken Wings with a Windhoek Lager or Windhoek Draught.",                                                                               tag:"THURSDAY",  price:"R140"},
  {name:"Friday — 1KG Eisbein",         category:"specials",  description:"1KG Eisbein served with a side of your choice.",                                                                                              tag:"FRIDAY",    price:"R135"},
  {name:"Saturday — Vodka Deal",         category:"specials",  description:"1x Pizza + 375ml SKYY Vodka & 3 Mixers.",                                                                                                    tag:"SATURDAY",  price:"R350"},
  {name:"Saturday — Richelieu Deal",     category:"specials",  description:"1x Pizza + 750ml Richelieu & 6 Mixers.",                                                                                                     tag:"SATURDAY",  price:"R650"},
  {name:"Sunday — All Specials",         category:"specials",  description:"All above daily specials available till 5PM.",                                                                                               tag:"SUNDAY",    price:"TILL 5PM"},
  {name:"Lunch Special — T-Bone",        category:"specials",  description:"500G T-Bone + side of your choice + Windhoek Lager. Mon–Fri, 12PM–4PM.",                                                                    tag:"LUNCH",     price:"R135"},
  {name:"Lunch Special — Schnitzel",     category:"specials",  description:"Chicken Schnitzel + side of your choice + glass of house wine. Mon–Fri, 12PM–4PM.",                                                         tag:"LUNCH",     price:"R79"},
];


// ─── RENDER ────────────────────────────────────────────────────────────────────

const menuGrid = document.getElementById("menuGrid");
const tabs     = document.querySelectorAll(".menu-tab");

function renderMenu(category = "all") {
  let filtered;
  if (category === "all") {
    filtered = menuItems;
  } else if (category === "salads") {
    // Salads & Pasta tab shows both categories
    filtered = menuItems.filter(item => item.category === "salads" || item.category === "pasta");
  } else {
    filtered = menuItems.filter(item => item.category === category);
  }

  menuGrid.innerHTML = filtered.map((item, index) => `
    <article class="menu-item">
      <span class="number">${String(index + 1).padStart(2, "0")}</span>
      <span class="tag">${item.tag}</span>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      ${item.price ? `<span class="price">${item.price}</span>` : ""}
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

const dateInput  = document.querySelector('input[name="date"]');
const today      = new Date();
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

  if (!reservationForm.checkValidity()) {
    reservationForm.reportValidity();
    return;
  }

  if (FORMSPREE_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")) {
    formStatus.textContent = "Online booking is not yet active. Please call us on 012 941 0156 to reserve your table.";
    formStatus.style.color = "#ffb366";
    return;
  }

  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending\u2026";
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
      formStatus.textContent = `Your request for ${data.date} at ${data.time} has been sent \u2014 we\u2019ll be in touch to confirm shortly.`;
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
