import { useEffect } from "react";
import $ from "jquery";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Instagram from "./components/Instagram";
import News from "./components/News/index";

function HomePage() {
  useEffect(() => {
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });

    //Search Switch
    $(".search-switch").on("click", function () {
      $(".search-model").fadeIn(400);
    });

    $(".search-close-switch").on("click", function () {
      $(".search-model").fadeOut(400, function () {
        $("#search-input").val("");
      });
    });

    /*------------------
          Accordin Active
      --------------------*/
    $(".collapse").on("shown.bs.collapse", function () {
      $(this).prev().addClass("active");
    });

    $(".collapse").on("hidden.bs.collapse", function () {
      $(this).prev().removeClass("active");
    });

    //Canvas Menu
    $(".canvas__open").on("click", function () {
      $(".offcanvas-menu-wrapper").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on("click", function () {
      $(".offcanvas-menu-wrapper").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });
  }, []);

  return (
    <div>
      <Hero />
      <Banner />
      <Products />
      <Categories />
      <Instagram />
      <News />
    </div>
  );
}

export default HomePage;
