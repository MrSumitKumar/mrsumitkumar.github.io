class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <!-- Logo / Name -->
        <div class="flex items-center gap-3">
          <a href="index.html" class="flex items-center gap-3">
            <div class="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-primary font-bold">
              <img src="mr-image.jpg" alt="प्रोफ़ाइल" class="w-12 h-12 object-cover rounded-full" loading="lazy">
            </div>
            <div>
              <h1>सुमित कुमार</h1>
              <p class="text-sm text-black/80">
                ग्राम प्रधान अभ्यर्थी
              </p>
            </div>
          </a>
        </div>

        <!-- ================= DESKTOP NAV ================= -->
        <nav class="hidden md:flex gap-6 text-sm items-center">
          <a href="index.html" class="nav-link text-gray-800 hover:text-green-700 font-medium" data-path="index.html"> मुख्य पृष्ठ </a>
          <a href="about.html" class="nav-link text-gray-800 hover:text-green-700 font-medium" data-path="about.html"> परिचय </a>
          <a href="education.html" class="nav-link text-gray-800 hover:text-green-700 font-medium" data-path="education.html"> शिक्षा </a>
          <a href="gallery.html" class="nav-link text-gray-800 hover:text-green-700 font-medium" data-path="gallery.html"> गैलरी </a>

          <!-- CTA -->
          <a href="contact.html"
            class="ml-2 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow font-semibold">
            संपर्क करें
          </a>
        </nav>

        <!-- ================= MOBILE MENU BUTTON ================= -->
        <div class="md:hidden">
          <button id="mobile-menu-btn" aria-expanded="false" aria-controls="mobile-menu" class="inline-flex items-center justify-center p-2 rounded-md
                 text-gray-800 bg-gray-100 hover:bg-gray-200">
            <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- ================= MOBILE DROPDOWN MENU ================= -->
        <div id="mobile-menu" class="mobile-menu hidden md:hidden absolute right-6 top-full mt-2
               bg-white rounded-lg shadow-lg text-gray-800 w-52 py-2 z-40">
          <a href="index.html" class="mobile-link block px-4 py-2 hover:bg-gray-100" data-path="index.html"> मुख्य पृष्ठ </a>
          <a href="about.html" class="mobile-link block px-4 py-2 hover:bg-gray-100" data-path="about.html"> परिचय </a>
          <a href="education.html" class="mobile-link block px-4 py-2 hover:bg-gray-100" data-path="education.html"> शिक्षा पहल </a>
          <a href="gallery.html" class="mobile-link block px-4 py-2 hover:bg-gray-100" data-path="gallery.html"> गैलरी </a>
          <a href="contact.html"
            class="block mx-3 mt-2 text-center bg-green-600 text-white py-2 rounded-lg font-semibold">
            संपर्क करें
          </a>
        </div>
      </div>
    `;

    this.highlightActiveLink();
    this.initMobileMenu();
  }

  highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop
    const links = this.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.dataset.path === currentPath) {
        link.classList.remove('text-gray-800');
        link.classList.add('text-green-700', 'font-bold', 'border-b-2', 'border-green-600');
      }
    });

    // Mobile
    const mobileLinks = this.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      if (link.dataset.path === currentPath) {
        link.classList.add('font-bold', 'text-green-700');
      }
    });
  }

  initMobileMenu() {
    const menuBtn = this.querySelector('#mobile-menu-btn');
    const menu = this.querySelector('#mobile-menu');
    const iconOpen = this.querySelector('#icon-open');
    const iconClose = this.querySelector('#icon-close');
    const body = document.body;

    function openMenu() {
      menu.classList.remove('hidden');
      setTimeout(() => menu.classList.add('show'), 10);
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
      body.classList.add('no-scroll');
      menuBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      menu.classList.remove('show');
      setTimeout(() => {
        menu.classList.add('hidden');
      }, 250);
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      body.classList.remove('no-scroll');
      menuBtn.setAttribute('aria-expanded', 'false');
    }

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.contains('show') ? closeMenu() : openMenu();
    });

    document.addEventListener('click', (e) => {
      if (menu.classList.contains('show') && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-900 text-gray-300 py-8 text-center">
        <p class="font-semibold text-green-400">सुमित कुमार — ग्राम प्रधान प्रत्याशी</p>
        <p class="text-sm">ग्राम पंचायत कौरारा बुजुर्ग, जसराना, फिरोजाबाद</p>
        <p class="text-xs mt-4">© 2026 चुनाव अभियान</p>
      </footer>
    `;
  }
}

class FloatingButtons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Share Button -->
      <button id="share-btn"
        onclick="if(navigator.share){navigator.share({title:document.title,url:window.location.href})}else{alert('Link copied to clipboard!');navigator.clipboard.writeText(window.location.href)}"
        class="fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg transition-transform hover:scale-105"
        aria-label="Share">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      <!-- Call Button (Left) -->
      <a href="tel:+919690946501"
        class="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span class="hidden md:inline font-medium">कॉल करें</span>
      </a>
      <!-- WhatsApp Button (Right) -->
      <a href="https://wa.me/919690946501" target="_blank"
        class="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span class="hidden md:inline font-medium">WhatsApp</span>
      </a>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
customElements.define('floating-buttons', FloatingButtons);
