// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Duress button logic
document.getElementById("duressBtn").addEventListener("click", () => {
  const confirmDuress = confirm(
    "Are you sure you want to raise a duress alert?"
  );
  if (confirmDuress) {
    // In production, call a real API or send SMS/email.
    // For demo, we open a pre‑filled email and show a quick alert.
    alert("Duress alert raised! Notifying Site Manager.");
    window.location.href =
      "mailto:jane.doe@example.com?subject=Duress%20Alert&body=I%20am%20in%20duress%20on%20site.%20Please%20assist%20immediately.";
  }
});
