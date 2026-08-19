document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  initSlideshow();
  initAccordion();
  initCartButtons();
});

function initSlideshow() {
  const track = document.getElementById("slideshowTrack");
  const prevBtn = document.getElementById("slidePrev");
  const nextBtn = document.getElementById("slideNext");
  if (!track || !prevBtn || !nextBtn) return;

  const scrollByAmount = () => {
    const firstSlide = track.querySelector(".product-slide");
    return firstSlide ? firstSlide.getBoundingClientRect().width + 24 : 280;
  };

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  });
}

function initAccordion() {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = trigger.nextElementSibling;
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      triggers.forEach((otherTrigger) => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute("aria-expanded", "false");
          otherTrigger.nextElementSibling.style.maxHeight = null;
        }
      });

      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });
}

function initCartButtons() {
  const cartButtons = document.querySelectorAll(".btn-cart");
  const toast = document.getElementById("toast");
  if (!toast) return;

  let toastTimeout;

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.dataset.product || "dit biertje";
      toast.textContent = `${productName}: bestellen kan binnenkort. Nu nog niet beschikbaar.`;
      toast.classList.add("show");

      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
      }, 3200);
    });
  });
}
