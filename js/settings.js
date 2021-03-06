var dumpCookie = extractCookies();

function addCookie() {
  modal = document.querySelector("#modal");
  document.cookie = "theme=kali";
  modal.style.visibility = "hidden";
  window.location.reload();
}

function extractCookies() {
  return document.cookie.split("; ").reduce((acc, curr) => {
    const pair = curr.split("=");
    acc[pair[0]] = pair[1];
    return acc;
  }, {});
}
console.log(dumpCookie);

window.addEventListener("DOMContentLoaded", function () {
  select = document.querySelector("#select");
  home = document.querySelector("#home");
  settings = document.querySelector("#settings");
  reducer = document.querySelector("#reducer");
  title = document.querySelector("#title");
  header = document.querySelector("#header");
  body = document.querySelector("#body");
  background_header = document.querySelector(".background_header");
  if (dumpCookie.theme) {
    modal = document.querySelector("#modal");
    modal.style.visibility = "hidden";
    console.log("hey");
    changeTheme(dumpCookie.theme);
  }
  if (select) {
    select.addEventListener("change", function (event) {
      changeTheme(event.target.value);
      window.location.reload();
    });
  }
});

function changeTheme(value) {
  switch (value) {
    case "1":
    case "kali":
      title.innerText = "root@kali: ~/" + title.innerText;
      home.src = "../images/kali logo.png";
      settings.src = "../images/settings.png";
      reducer.src = "../images/cross_reducer.png";
      header.style.backgroundColor = "#181a207a";
      body.style.backgroundImage = "url(../images/background.jpg)";
      document.cookie = "theme=kali";
      break;

    case "2":
    case "windows":
      title.innerText = "C: \\ " + title.innerText;
      home.src = "../images/home_windows.png";
      settings.src = "../images/settings_windows.png";
      reducer.src = "../images/reducer_windows.png";
      header.style.backgroundColor = "rgb(27, 27, 27)";
      body.style.backgroundImage = "url(../images/windows_wallpaper.jpg)";
      document.cookie = "theme=windows";
      break;

    case "3":
    case "apple":
      title.innerText = title.innerText + " - Bash - 1920 x 1017";
      home.src = "../images/apple_logo.png";
      settings.src = "../images/apple_settings.png";
      reducer.src = "../images/macos_reducer.png";
      header.style.backgroundColor = "rgba(0, 0, 0, 0.311)";
      body.style.backgroundImage = "url(../images/mac_wallpaper.jpg)";
      document.cookie = "theme=apple";
      break;

    case "4":
    case "parrot":
      title.innerText = "Parrot Terminal | " + title.innerText;
      home.src = "../images/parrot_logo.png";
      settings.src = "../images/parrot_settings.png";
      reducer.src = "../images/parrot-reducer.png";
      header.style.backgroundColor = "rgba(0, 0, 0, 0.311)";
      body.style.backgroundImage = "url(../images/parrot_wallpaper.png)";
      document.cookie = "theme=parrot";
      break;

    default:
      title.innerText = "root@kali: ~/" + title.innerText;
      home.src = "../images/kali logo.png";
      settings.src = "../images/settings.png";
      reducer.src = "../images/cross_reducer.png";
      header.style.backgroundColor = "#181a207a";
      body.style.backgroundImage = "url(../images/background.jpg)";
      document.cookie = "theme=kali";
      break;
  }
}
