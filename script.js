const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText= body.querySelector(".mode-text");


    // dodaje klase "dark" do body

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
      });
      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });