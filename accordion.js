const accordion = $(".icon");
const items = $(".accordion button");
const sectionLinks = $(".faq-section-link");
const menuItems = $(".sidebar a");

// Add click event handling to the accordion buttons
items.on("click", function (e) {
  e.preventDefault();
  toggleAccordion.call(this);
});
// Handle clicks on both sidebar links and accordion items
menuItems.add(items).on("click", function (e) {
  e.preventDefault();
});
sectionLinks.on("click", function () {
  highlightSideMenu.call(this);
});

//Toggle faqs
function toggleAccordion() {
  const itemToggle = $(this).attr("aria-expanded");
  items.attr("aria-expanded", "false");

  if (itemToggle === "false") {
    $(this).attr("aria-expanded", "true");
  }

  return false;
}
///making active left side
$(".accordion-button-general").click(function () {
  $("#link1").addClass("active");
  $("#link2").removeClass("active");
  $("#link3").removeClass("active");
  $("#link4").removeClass("active");
});
$(".accordion-button-shipping").click(function () {
  $("#link1").removeClass("active");
  $("#link2").addClass("active");
  $("#link3").removeClass("active");
  $("#link4").removeClass("active");
});
$(".accordion-button-gifting").click(function () {
  $("#link1").removeClass("active");
  $("#link2").removeClass("active");
  $("#link3").addClass("active");
  $("#link4").removeClass("active");
});
$(".accordion-button-products").click(function () {
  $("#link1").removeClass("active");
  $("#link2").removeClass("active");
  $("#link3").removeClass("active");
  $("#link4").addClass("active");
});

//

// Highlight sideMenuItems After Clicking Accordion Item
function highlightSideMenu() {
  sectionLinks.removeClass("active");
  $(this).addClass("active");

  // Scroll to the selected section smoothly
  const targetSectionId = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(targetSectionId).offset().top,
    },
    500
  );

  // Toggle the associated accordion section
  const accordion = $(targetSectionId).find(".accordion");
  if (accordion.length) {
    accordion.show();
  }
}
