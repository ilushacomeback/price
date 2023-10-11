(function () {
    const width = innerWidth;
    const getSwiper = (width) => {
      if (width < 768) {
        return new Swiper(".price", {
          slidesPerView: "auto",
          refresh: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    };
    getSwiper(width);
})();