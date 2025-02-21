document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        const src = img.getAttribute("data-src") || img.src;
        if (src.includes("ik.imagekit.io")) {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = src;
            document.head.appendChild(link);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazyload");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazyload");
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: "50px",
        threshold: 0.1,
    });

    lazyImages.forEach(img => observer.observe(img));
});