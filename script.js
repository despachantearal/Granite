const facts = [
  "Granite is a coarse-grained igneous rock.",
  "It forms from the slow cooling of magma.",
  "Granite is mainly composed of quartz, feldspar, and mica.",
  "It is widely used in construction and monuments.",
  "Granite is very hard and durable."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function analyzeGranite() {
  alert("🪨 Analyzing granite composition...");
}
