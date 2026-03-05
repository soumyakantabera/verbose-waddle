/* =============================================
   FIORIVIA — UI Enhancements
   Scroll animations, additional content, DOM fixes
   ============================================= */

(function () {
  "use strict";

  /* Wait for React to render, then enhance */
  function waitForRoot(cb, maxRetries) {
    var retries = 0;
    var limit = maxRetries || 40;
    var interval = setInterval(function () {
      var root = document.getElementById("root");
      if (root && root.children.length > 0 && document.querySelector("main")) {
        clearInterval(interval);
        cb();
      } else if (++retries >= limit) {
        clearInterval(interval);
      }
    }, 200);
  }

  waitForRoot(function () {
    initScrollAnimations();
    injectAdditionalContent();
    enhanceNavbar();
    addSectionInViewTracking();
  });

  /* =============================================
     SCROLL ANIMATIONS (IntersectionObserver)
     ============================================= */
  function initScrollAnimations() {
    var main = document.querySelector("main");
    if (!main) return;

    /* Mark non-pinned sections for animation (both DIV and SECTION children) */
    var sections = main.querySelectorAll(
      ":scope > section, :scope > div:not(.pin-spacer)"
    );
    sections.forEach(function (sec) {
      sec.classList.add("animate-on-scroll");
    });

    /* Mark grid children with stagger */
    var grids = main.querySelectorAll(".grid");
    grids.forEach(function (grid) {
      var children = grid.children;
      for (var i = 0; i < children.length; i++) {
        children[i].classList.add("animate-on-scroll", "animate-scale");
        children[i].classList.add("stagger-" + Math.min(i + 1, 6));
      }
    });

    /* Mark headings */
    var headings = main.querySelectorAll("h2, h3");
    headings.forEach(function (h) {
      if (!h.closest(".section-pinned")) {
        h.classList.add("animate-on-scroll");
      }
    });

    /* Observe all animate-on-scroll elements */
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
      );

      document.querySelectorAll(".animate-on-scroll").forEach(function (el) {
        observer.observe(el);
      });
    } else {
      /* Fallback: show everything immediately */
      document.querySelectorAll(".animate-on-scroll").forEach(function (el) {
        el.classList.add("animate-visible");
      });
    }
  }

  /* =============================================
     SECTION IN-VIEW TRACKING (parallax-like)
     ============================================= */
  function addSectionInViewTracking() {
    var pinned = document.querySelectorAll(".section-pinned");
    if (!pinned.length || !("IntersectionObserver" in window)) return;

    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    pinned.forEach(function (sec) {
      obs.observe(sec);
    });
  }

  /* =============================================
     NAVBAR SCROLL ENHANCEMENT
     ============================================= */
  function enhanceNavbar() {
    var header = document.querySelector("header, [role='banner']");
    if (!header) return;

    var lastScrollY = 0;

    function onScroll() {
      var scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 80) {
        header.style.backgroundColor = "rgba(244, 241, 234, 0.95)";
        header.style.backdropFilter = "blur(12px)";
        header.style.webkitBackdropFilter = "blur(12px)";
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)";
      } else {
        header.style.backgroundColor = "";
        header.style.backdropFilter = "";
        header.style.webkitBackdropFilter = "";
        header.style.boxShadow = "";
      }
      lastScrollY = scrollY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* =============================================
     ADDITIONAL CONTENT INJECTION
     ============================================= */
  function injectAdditionalContent() {
    var main = document.querySelector("main");
    if (!main) return;

    /* Find anchor sections by text content */
    var allChildren = main.querySelectorAll(":scope > div, :scope > section");
    var comeFunzionaIdx = -1;
    var categorieSectionIdx = -1;
    var faqSectionIdx = -1;

    allChildren.forEach(function (sec, idx) {
      var h2 = sec.querySelector("h2");
      if (h2) {
        var text = h2.textContent.trim();
        if (text.indexOf("Come funziona") !== -1) comeFunzionaIdx = idx;
        if (text.indexOf("categorie") !== -1) categorieSectionIdx = idx;
        if (text.indexOf("Domande frequenti") !== -1) faqSectionIdx = idx;
      }
    });

    /* 1. Inject "Il metodo FIORIVIA" section after "Come funziona" */
    if (comeFunzionaIdx >= 0) {
      var methodHTML =
        '<div class="method-detail-section animate-on-scroll">' +
        '  <div style="text-align:center;margin-bottom:8px;">' +
        '    <span class="caption-text" style="color:#C69B3C;">IL NOSTRO APPROCCIO</span>' +
        "  </div>" +
        "  <h2 style=\"text-align:center;\">Il metodo FIORIVIA</h2>" +
        '  <p style="text-align:center;color:#6E6A63;max-width:640px;margin:0 auto 40px;">Un prodotto eccellente deve funzionare nella vita reale: con il clima italiano, per pelli stressate, in routine sostenibili.</p>' +
        '  <div class="method-grid">' +
        '    <div class="method-card animate-on-scroll animate-scale stagger-1">' +
        '      <div class="method-icon">🔬</div>' +
        "      <h3>Ricerca attiva</h3>" +
        "      <p>Analizziamo ogni INCI, studiamo la letteratura scientifica e testiamo la reale efficacia degli attivi.</p>" +
        "    </div>" +
        '    <div class="method-card animate-on-scroll animate-scale stagger-2">' +
        '      <div class="method-icon">🌿</div>' +
        "      <h3>Botanica intelligente</h3>" +
        "      <p>Preferiamo ingredienti naturali supportati dalla scienza, senza rinunciare a sicurezza e performance.</p>" +
        "    </div>" +
        '    <div class="method-card animate-on-scroll animate-scale stagger-3">' +
        '      <div class="method-icon">✨</div>' +
        "      <h3>Trasparenza totale</h3>" +
        "      <p>Ogni prodotto ha una scheda chiara con INCI spiegato, percentuali degli attivi e il nostro punteggio.</p>" +
        "    </div>" +
        '    <div class="method-card animate-on-scroll animate-scale stagger-4">' +
        '      <div class="method-icon">🇮🇹</div>' +
        "      <h3>Qualit\u00e0 italiana</h3>" +
        "      <p>Selezioniamo con sensibilit\u00e0 per il clima, la pelle e le abitudini della vita in Italia.</p>" +
        "    </div>" +
        "  </div>" +
        "</div>";

      var methodEl = createElementFromHTML(methodHTML);
      var afterSection = allChildren[comeFunzionaIdx];
      afterSection.parentNode.insertBefore(methodEl, afterSection.nextSibling);
    }

    /* 2. Inject Journal section after categories */
    if (categorieSectionIdx >= 0) {
      var journalHTML =
        '<div class="journal-section animate-on-scroll">' +
        '  <div style="text-align:center;margin-bottom:8px;">' +
        '    <span class="caption-text" style="color:#C69B3C;">JOURNAL</span>' +
        "  </div>" +
        "  <h2>Dal nostro Journal</h2>" +
        '  <p class="journal-subtitle">Guide, ingredienti e routine per scegliere con consapevolezza.</p>' +
        '  <div class="journal-grid">' +
        '    <div class="journal-card animate-on-scroll animate-scale stagger-1">' +
        '      <div style="overflow:hidden;"><img src="./images/journal_niacinamide.jpg" alt="Niacinamide" loading="lazy" /></div>' +
        '      <div class="journal-content">' +
        '        <div class="journal-tag">Ingredienti</div>' +
        "        <h3>Niacinamide: cosa fa davvero alla tua pelle</h3>" +
        "        <p>La guida completa all\u2019attivo pi\u00f9 cercato. Concentrazioni, combinazioni e routine per ogni tipo di pelle.</p>" +
        "      </div>" +
        "    </div>" +
        '    <div class="journal-card animate-on-scroll animate-scale stagger-2">' +
        '      <div style="overflow:hidden;"><img src="./images/journal_routine.jpg" alt="Routine" loading="lazy" /></div>' +
        '      <div class="journal-content">' +
        '        <div class="journal-tag">Routine</div>' +
        "        <h3>La routine essenziale in 3 passaggi</h3>" +
        "        <p>Meno prodotti, pi\u00f9 risultati. Come costruire una skincare routine che funziona nella vita reale.</p>" +
        "      </div>" +
        "    </div>" +
        '    <div class="journal-card animate-on-scroll animate-scale stagger-3">' +
        '      <div style="overflow:hidden;"><img src="./images/journal_sunscreen.jpg" alt="Protezione solare" loading="lazy" /></div>' +
        '      <div class="journal-content">' +
        '        <div class="journal-tag">Protezione</div>' +
        "        <h3>Protezione solare: la verit\u00e0 dietro SPF</h3>" +
        "        <p>Filtri chimici vs minerali, riapplicazione, texture: tutto quello che serve sapere per proteggersi davvero.</p>" +
        "      </div>" +
        "    </div>" +
        '    <div class="journal-card animate-on-scroll animate-scale stagger-4">' +
        '      <div style="overflow:hidden;"><img src="./images/journal_inci.jpg" alt="INCI" loading="lazy" /></div>' +
        '      <div class="journal-content">' +
        '        <div class="journal-tag">Educazione</div>' +
        "        <h3>Come leggere un INCI senza ansia</h3>" +
        "        <p>Non servono lauree: bastano poche regole per capire cosa c\u2019\u00e8 davvero dentro un cosmetico.</p>" +
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "</div>";

      var journalEl = createElementFromHTML(journalHTML);
      var afterCat = allChildren[categorieSectionIdx];
      afterCat.parentNode.insertBefore(journalEl, afterCat.nextSibling);
    }

    /* 3. Inject "La futura linea FIORIVIA" ingredient section before FAQ */
    if (faqSectionIdx >= 0) {
      var ingredientHTML =
        '<div class="ingredient-section animate-on-scroll">' +
        "  <h2>La futura linea FIORIVIA</h2>" +
        "  <p>Stiamo sviluppando una linea propria con formulazioni essenziali, routine semplici e qualit\u00e0 italiana. Meno prodotti, migliori prodotti.</p>" +
        '  <div class="ingredient-grid">' +
        '    <div class="ingredient-card animate-on-scroll animate-scale stagger-1">' +
        '      <div class="ingredient-emoji">\uD83C\uDF3F</div>' +
        "      <h3>Acido ialuronico</h3>" +
        "      <p>Multi-peso molecolare per idratazione profonda e superficie.</p>" +
        "    </div>" +
        '    <div class="ingredient-card animate-on-scroll animate-scale stagger-2">' +
        '      <div class="ingredient-emoji">\uD83C\uDF3B</div>' +
        "      <h3>Vitamina C stabilizzata</h3>" +
        "      <p>Antiossidante potente, luminosit\u00e0 e protezione dall\u2019inquinamento.</p>" +
        "    </div>" +
        '    <div class="ingredient-card animate-on-scroll animate-scale stagger-3">' +
        '      <div class="ingredient-emoji">\uD83E\uDDEA</div>' +
        "      <h3>Niacinamide 5%</h3>" +
        "      <p>Equilibra il sebo, minimizza i pori, uniforma il tono della pelle.</p>" +
        "    </div>" +
        '    <div class="ingredient-card animate-on-scroll animate-scale stagger-4">' +
        '      <div class="ingredient-emoji">\uD83C\uDF3E</div>' +
        "      <h3>Ceramidi vegetali</h3>" +
        "      <p>Rinforzano la barriera cutanea per una pelle pi\u00f9 resiliente.</p>" +
        "    </div>" +
        '    <div class="ingredient-card animate-on-scroll animate-scale stagger-5">' +
        '      <div class="ingredient-emoji">\uD83C\uDF4A</div>' +
        "      <h3>Retinolo incapsulato</h3>" +
        "      <p>Anti-et\u00e0 efficace con rilascio graduale, meno irritazione.</p>" +
        "    </div>" +
        '    <div class="ingredient-card animate-on-scroll animate-scale stagger-6">' +
        '      <div class="ingredient-emoji">\uD83C\uDF0A</div>' +
        "      <h3>Estratto di alghe marine</h3>" +
        "      <p>Minerali e antiossidanti dal mare per nutrimento e protezione.</p>" +
        "    </div>" +
        "  </div>" +
        "</div>";

      var ingredientEl = createElementFromHTML(ingredientHTML);
      /* Re-query sections since we may have added content above */
      var updatedSections = main.querySelectorAll(":scope > div, :scope > section");
      var faqSection = null;
      updatedSections.forEach(function (sec) {
        var h2 = sec.querySelector("h2");
        if (h2 && h2.textContent.indexOf("Domande frequenti") !== -1) {
          faqSection = sec;
        }
      });
      if (faqSection) {
        faqSection.parentNode.insertBefore(ingredientEl, faqSection);
      }
    }

    /* Re-initialize scroll animations for newly added elements */
    setTimeout(function () {
      if ("IntersectionObserver" in window) {
        var obs = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible");
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
        );

        document
          .querySelectorAll(".animate-on-scroll:not(.animate-visible)")
          .forEach(function (el) {
            obs.observe(el);
          });
      }
    }, 100);
  }

  /* Helper: create DOM element from HTML string */
  function createElementFromHTML(html) {
    var div = document.createElement("div");
    div.innerHTML = html.trim();
    return div.firstChild;
  }
})();
