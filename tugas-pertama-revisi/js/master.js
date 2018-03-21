var myNav = document.getElementById('fixed-navigation-bar');
var myIcon = document.getElementsByClassName('nav-link');
var parent = document.getElementById('nav-icon-logo');

var greyLogo = document.createElement('img');
greyLogo.setAttribute('src','data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ0OCA0NDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0OCA0NDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPHBhdGggZD0iTTQ0OCwyNDljMC01Ny4zNDYtNDYuNjU0LTEwNC0xMDQtMTA0Yy0yMC4zMywwLTQwLjIyLDYuMDIzLTU3LjA4OSwxNy4wOTVjLTQuMzgtMTkuMTgyLTEwLjIwMy0zNy42NjItMTcuMjM1LTU0LjE5OCAgQzI1MC43ODEsNjMuNDY5LDIyNi4wMzYsMzksMjAwLDM5Yy0yNi4wNjUsMC01MC44MSwyNC4zNjgtNjkuNjczLDY4LjYxNWMtNi42NDUsMTUuNTg3LTEyLjIxMiwzMi45NC0xNi41MDEsNTEuMDFsLTI2LjEwOC05NS43MyAgQzg2Ljc2OCw1OS40MTUsODMuNjA3LDU3LDgwLDU3cy02Ljc2OSwyLjQxNS03LjcxOCw1Ljg5NmwtNzIsMjY0Yy0wLjY1NiwyLjQwNS0wLjE1Myw0Ljk3OSwxLjM2LDYuOTYgIEMzLjE1NiwzMzUuODM4LDUuNTA3LDMzNyw4LDMzN2g2NHY2NGMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04di02NGg2NGMyLjQ5MywwLDQuODQ0LTEuMTYyLDYuMzU3LTMuMTQ1ICBjMS4yMzItMS42MTMsMS43ODEtMy42MTgsMS41OTQtNS42MDZjOS44OTgsNC41NTUsMjAuNjk2LDcuNDc1LDMyLjA0OSw4LjQxNVY0MDFjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOHYtNjQuMzM1ICBjMjAuNzY4LTEuNzE5LDM5LjY4NC0xMC4wNjcsNTQuNjItMjIuOTJjMTguMDE0LDIyLjYyNiw0NC41ODQsMzYuNzIsNzMuMzgsMzguOTM2VjQwMWMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04di00OC4zMDUgIEM0MDUuNjIyLDM0OC41OTcsNDQ4LDMwMy42NTQsNDQ4LDI0OXogTTE0MS41MjYsMzIxSDg4di0xMi42ODZsMTQuMTU3LTE0LjE1N2MzLjEyNC0zLjEyNSwzLjEyNC04LjE4OSwwLTExLjMxNCAgYy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMEw4OCwyODUuNjg1VjIzM2MwLTQuNDE4LTMuNTgyLTgtOC04cy04LDMuNTgyLTgsOHYzNi42ODZsLTEwLjM0My0xMC4zNDMgIGMtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBjLTMuMTI0LDMuMTI1LTMuMTI0LDguMTg5LDAsMTEuMzE0TDcyLDI5Mi4zMTR2MTIuNjhjMCwwLjAwMywwLDAuMDA3LDAsMC4wMVYzMjFIMTguNDc0ICBMODAsOTUuNDA0bDI3LjEwNSw5OS4zODNjLTIuMTA5LDE1LjU0My0zLjIzLDMxLjExLTMuMjMsNDYuMDg3YzAsMzAuNDA4LDE0LjE5Niw1Ny41NTksMzYuMzA0LDc1LjE4NkwxNDEuNTI2LDMyMXogTTIwOCwzMDguMzE0ICBsMjkuNjU3LTI5LjY1N2MzLjEyNC0zLjEyNSwzLjEyNC04LjE4OSwwLTExLjMxNGMtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBMMjA4LDI4NS42ODV2LTMzLjM3MWwyMS42NTctMjEuNjU3ICBjMy4xMjQtMy4xMjUsMy4xMjQtOC4xODksMC0xMS4zMTRjLTMuMTI1LTMuMTIzLTguMTg5LTMuMTIzLTExLjMxNCwwTDIwOCwyMjkuNjg1VjIwOWMwLTQuNDE4LTMuNTgyLTgtOC04cy04LDMuNTgyLTgsOHYzOS45OTUgIGMwLDAuMDAzLDAsMC4wMDcsMCwwLjAxdjIwLjY4bC0xOC4zNDMtMTguMzQzYy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMGMtMy4xMjQsMy4xMjUtMy4xMjQsOC4xODksMCwxMS4zMTRMMTkyLDI5Mi4zMTQgIHYxMi42OGMwLDAuMDAzLDAsMC4wMDcsMCwwLjAxdjE1LjU5NGMtNDAuNDM4LTQuMDI4LTcyLjEyNS0zOC4yNDQtNzIuMTI1LTc5LjcyNGMwLTQyLjU0NCw5LjQwOS05MC4wMTYsMjUuMTctMTI2Ljk4NCAgQzE2MS4wMDEsNzYuNDY1LDE4MS4wMzEsNTUsMjAwLDU1YzE4LjkzNCwwLDM4Ljk2MywyMS41NjMsNTQuOTUyLDU5LjE1OWMxNS43NjMsMzcuMDY0LDI1LjE3Myw4NC40MzUsMjUuMTczLDEyNi43MTYgIGMwLDQxLjQ4MS0zMS42ODcsNzUuNjk3LTcyLjEyNSw3OS43MjRWMzA4LjMxNHogTTM1MiwzMzYuNjMzdi0xMi4zMThsMjkuNjU3LTI5LjY1N2MzLjEyNC0zLjEyNSwzLjEyNC04LjE4OSwwLTExLjMxNCAgYy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMEwzNTIsMzAxLjY4NVYyNDljMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2MzYuNjg2bC0xOC4zNDMtMTguMzQzICBjLTMuMTI1LTMuMTIzLTguMTg5LTMuMTIzLTExLjMxNCwwYy0zLjEyNCwzLjEyNS0zLjEyNCw4LjE4OSwwLDExLjMxNEwzMzYsMzA4LjMxNHYxMi42OGMwLDAuMDAzLDAsMC4wMDcsMCwwLjAxdjE1LjYzICBjLTI0LjUzOC0yLjIzNC00Ny4wNjQtMTQuNjc3LTYyLjA2Ni0zNC4zOThjMTMuODUtMTYuNjU5LDIyLjE5MS0zOC4wNTQsMjIuMTkxLTYxLjM2MmMwLTE5Ljk1Mi0yLjAxLTQwLjk5NC01LjcyMy02MS42NTYgIEMzMDUuNzA3LDE2Ny40NTgsMzI0LjYxOCwxNjEsMzQ0LDE2MWM0OC41MjMsMCw4OCwzOS40NzcsODgsODhDNDMyLDI5NC44MjYsMzk2Ljc4OCwzMzIuNTc3LDM1MiwzMzYuNjMzeiIgZmlsbD0iIzk0OGY4ZiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K');
greyLogo.setAttribute('id','logo-grey');

var whiteLogo = document.createElement('img');
whiteLogo.setAttribute('src','data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ0OCA0NDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0OCA0NDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPHBhdGggZD0iTTQ0OCwyNDljMC01Ny4zNDYtNDYuNjU0LTEwNC0xMDQtMTA0Yy0yMC4zMywwLTQwLjIyLDYuMDIzLTU3LjA4OSwxNy4wOTVjLTQuMzgtMTkuMTgyLTEwLjIwMy0zNy42NjItMTcuMjM1LTU0LjE5OCAgQzI1MC43ODEsNjMuNDY5LDIyNi4wMzYsMzksMjAwLDM5Yy0yNi4wNjUsMC01MC44MSwyNC4zNjgtNjkuNjczLDY4LjYxNWMtNi42NDUsMTUuNTg3LTEyLjIxMiwzMi45NC0xNi41MDEsNTEuMDFsLTI2LjEwOC05NS43MyAgQzg2Ljc2OCw1OS40MTUsODMuNjA3LDU3LDgwLDU3cy02Ljc2OSwyLjQxNS03LjcxOCw1Ljg5NmwtNzIsMjY0Yy0wLjY1NiwyLjQwNS0wLjE1Myw0Ljk3OSwxLjM2LDYuOTYgIEMzLjE1NiwzMzUuODM4LDUuNTA3LDMzNyw4LDMzN2g2NHY2NGMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04di02NGg2NGMyLjQ5MywwLDQuODQ0LTEuMTYyLDYuMzU3LTMuMTQ1ICBjMS4yMzItMS42MTMsMS43ODEtMy42MTgsMS41OTQtNS42MDZjOS44OTgsNC41NTUsMjAuNjk2LDcuNDc1LDMyLjA0OSw4LjQxNVY0MDFjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOHYtNjQuMzM1ICBjMjAuNzY4LTEuNzE5LDM5LjY4NC0xMC4wNjcsNTQuNjItMjIuOTJjMTguMDE0LDIyLjYyNiw0NC41ODQsMzYuNzIsNzMuMzgsMzguOTM2VjQwMWMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04di00OC4zMDUgIEM0MDUuNjIyLDM0OC41OTcsNDQ4LDMwMy42NTQsNDQ4LDI0OXogTTE0MS41MjYsMzIxSDg4di0xMi42ODZsMTQuMTU3LTE0LjE1N2MzLjEyNC0zLjEyNSwzLjEyNC04LjE4OSwwLTExLjMxNCAgYy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMEw4OCwyODUuNjg1VjIzM2MwLTQuNDE4LTMuNTgyLTgtOC04cy04LDMuNTgyLTgsOHYzNi42ODZsLTEwLjM0My0xMC4zNDMgIGMtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBjLTMuMTI0LDMuMTI1LTMuMTI0LDguMTg5LDAsMTEuMzE0TDcyLDI5Mi4zMTR2MTIuNjhjMCwwLjAwMywwLDAuMDA3LDAsMC4wMVYzMjFIMTguNDc0ICBMODAsOTUuNDA0bDI3LjEwNSw5OS4zODNjLTIuMTA5LDE1LjU0My0zLjIzLDMxLjExLTMuMjMsNDYuMDg3YzAsMzAuNDA4LDE0LjE5Niw1Ny41NTksMzYuMzA0LDc1LjE4NkwxNDEuNTI2LDMyMXogTTIwOCwzMDguMzE0ICBsMjkuNjU3LTI5LjY1N2MzLjEyNC0zLjEyNSwzLjEyNC04LjE4OSwwLTExLjMxNGMtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBMMjA4LDI4NS42ODV2LTMzLjM3MWwyMS42NTctMjEuNjU3ICBjMy4xMjQtMy4xMjUsMy4xMjQtOC4xODksMC0xMS4zMTRjLTMuMTI1LTMuMTIzLTguMTg5LTMuMTIzLTExLjMxNCwwTDIwOCwyMjkuNjg1VjIwOWMwLTQuNDE4LTMuNTgyLTgtOC04cy04LDMuNTgyLTgsOHYzOS45OTUgIGMwLDAuMDAzLDAsMC4wMDcsMCwwLjAxdjIwLjY4bC0xOC4zNDMtMTguMzQzYy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMGMtMy4xMjQsMy4xMjUtMy4xMjQsOC4xODksMCwxMS4zMTRMMTkyLDI5Mi4zMTQgIHYxMi42OGMwLDAuMDAzLDAsMC4wMDcsMCwwLjAxdjE1LjU5NGMtNDAuNDM4LTQuMDI4LTcyLjEyNS0zOC4yNDQtNzIuMTI1LTc5LjcyNGMwLTQyLjU0NCw5LjQwOS05MC4wMTYsMjUuMTctMTI2Ljk4NCAgQzE2MS4wMDEsNzYuNDY1LDE4MS4wMzEsNTUsMjAwLDU1YzE4LjkzNCwwLDM4Ljk2MywyMS41NjMsNTQuOTUyLDU5LjE1OWMxNS43NjMsMzcuMDY0LDI1LjE3Myw4NC40MzUsMjUuMTczLDEyNi43MTYgIGMwLDQxLjQ4MS0zMS42ODcsNzUuNjk3LTcyLjEyNSw3OS43MjRWMzA4LjMxNHogTTM1MiwzMzYuNjMzdi0xMi4zMThsMjkuNjU3LTI5LjY1N2MzLjEyNC0zLjEyNSwzLjEyNC04LjE4OSwwLTExLjMxNCAgYy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMEwzNTIsMzAxLjY4NVYyNDljMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2MzYuNjg2bC0xOC4zNDMtMTguMzQzICBjLTMuMTI1LTMuMTIzLTguMTg5LTMuMTIzLTExLjMxNCwwYy0zLjEyNCwzLjEyNS0zLjEyNCw4LjE4OSwwLDExLjMxNEwzMzYsMzA4LjMxNHYxMi42OGMwLDAuMDAzLDAsMC4wMDcsMCwwLjAxdjE1LjYzICBjLTI0LjUzOC0yLjIzNC00Ny4wNjQtMTQuNjc3LTYyLjA2Ni0zNC4zOThjMTMuODUtMTYuNjU5LDIyLjE5MS0zOC4wNTQsMjIuMTkxLTYxLjM2MmMwLTE5Ljk1Mi0yLjAxLTQwLjk5NC01LjcyMy02MS42NTYgIEMzMDUuNzA3LDE2Ny40NTgsMzI0LjYxOCwxNjEsMzQ0LDE2MWM0OC41MjMsMCw4OCwzOS40NzcsODgsODhDNDMyLDI5NC44MjYsMzk2Ljc4OCwzMzIuNTc3LDM1MiwzMzYuNjMzeiIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K');
whiteLogo.setAttribute('id','logo-white');

function scrolling() {
  console.log(window.scrollY);
  "use strict";
  if (window.scrollY >= 689 ) {
    for (let i = 0; i < myIcon.length; i++) {
      myIcon[i].classList.add('nav-colored-bot');
      myIcon[i].classList.remove('nav-colored-top');
    }
    myNav.classList.add("colored");
    myNav.classList.remove("uncolored");
    myNav.classList.add("nav-shadow");
    var child = document.getElementById('logo-white');
    if(child != null){
      parent.removeChild(child);
      parent.appendChild(greyLogo);
    }
  } else {
    for (let i = 0; i < myIcon.length; i++) {
      myIcon[i].classList.remove('nav-colored-bot');
      myIcon[i].classList.add('nav-colored-top');
    }
    myNav.classList.add("uncolored");
    myNav.classList.remove("colored");
    myNav.classList.remove("nav-shadow");
    var child = document.getElementById('logo-grey');
    if(child != null){
      parent.removeChild(child);
      parent.appendChild(whiteLogo);
    }
  }
}
