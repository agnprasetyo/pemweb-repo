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

var forestDescriptionWebsite = new Array();
forestDescriptionWebsite.push("https://www.insidekyoto.com/arashiyama");
forestDescriptionWebsite.push("https://rainforests.mongabay.com/amazon/");
forestDescriptionWebsite.push("http://oceana.org/marine-life/marine-science-and-ecosystems/kelp-forest");
forestDescriptionWebsite.push("http://www.visitsiankaan.com/");
forestDescriptionWebsite.push("https://en.wikipedia.org/wiki/Bellavista_Cloud_Forest_Reserve");
forestDescriptionWebsite.push("https://en.wikipedia.org/wiki/Białowieża_Forest");
forestDescriptionWebsite.push("https://en.wikipedia.org/wiki/Boreal_forest_of_Canada");
forestDescriptionWebsite.push("https://globalforestatlas.yale.edu/region/congo");
forestDescriptionWebsite.push("https://daintreerainforest.net.au");
forestDescriptionWebsite.push("https://whc.unesco.org/en/list/1167");
forestDescriptionWebsite.push("https://en.wikipedia.org/wiki/Valdivian_temperate_rain_forest");
forestDescriptionWebsite.push("https://en.wikipedia.org/wiki/Humboldt_Redwoods_State_Park");

var lakeDescriptionWebsite = new Array();
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Dead_Sea");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Lake_Berryessa");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Crater_Lake");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Lake_Baikal");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Abraham_Lake");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Green_Lake_(Seattle)");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Taal_Lake");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Jiuzhaigou");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Spotted_Lake");
lakeDescriptionWebsite.push("https://en.wikipedia.org/wiki/Lake_Hillier");

var beachDescriptionWebsite = new Array();
beachDescriptionWebsite.push("https://www.tikehaupearlbeachresort.com/en/");
beachDescriptionWebsite.push("https://en.wikipedia.org/wiki/Dreamland_Beach");
beachDescriptionWebsite.push("https://en.wikipedia.org/wiki/Bathsheba,_Barbados");
beachDescriptionWebsite.push("http://www.caymanislands.ky/activities/beaches/sevenmilebeach.aspx");
beachDescriptionWebsite.push("https://en.wikipedia.org/wiki/Horseshoe_Bay,_Queensland");
beachDescriptionWebsite.push("https://en.wikipedia.org/wiki/Harbour_Island,_Bahamas");
beachDescriptionWebsite.push("https://www.tripadvisor.com/LocationPhotoDirectLink-g147326-d1819723-i96836221-La_Chiva-Isla_de_Vieques_Puerto_Rico.html");
beachDescriptionWebsite.push("https://www.tripadvisor.com/Attraction_Review-g147411-d147590-Reviews-Trunk_Bay-Virgin_Islands_National_Park_St_John_U_S_Virgin_Islands.html");
beachDescriptionWebsite.push("http://www.best-big-island-hawaii.com/waipio-valley.html");
beachDescriptionWebsite.push("http://parrotcay.com/beach-villas/");
beachDescriptionWebsite.push("https://en.wikipedia.org/wiki/Sunset_Beach,_California");

var mountainDescriptionWebsite = new Array();
mountainDescriptionWebsite.push("https://www.mountkinabalu.com");
mountainDescriptionWebsite.push("https://en.wikipedia.org/wiki/Amphitheatre_(Drakensberg)");
mountainDescriptionWebsite.push("https://en.wikipedia.org/wiki/Huangshan");
mountainDescriptionWebsite.push("https://en.wikipedia.org/wiki/Aoraki_/_Mount_Cook");
mountainDescriptionWebsite.push("https://en.wikipedia.org/wiki/Fitz_Roy");
mountainDescriptionWebsite.push("https://en.wikipedia.org/wiki/Mount_Kailash");
mountainDescriptionWebsite.push("https://en.wikipedia.org/wiki/Banff,_Alberta");
mountainDescriptionWebsite.push("https://en.wikipedia.org/wiki/K2");
mountainDescriptionWebsite.push("http://www.tablemountain.net");
mountainDescriptionWebsite.push("https://en.wikipedia.org/wiki/Mount_Everest");

var forestLocationUrl = new Array();
forestLocationUrl.push("https://www.google.com/maps/place/Arashiyama/@35.0094534,135.6645843,17z/data=!3m1!4b1!4m5!3m4!1s0x6001075451efd3e3:0xabaad64f597b014c!8m2!3d35.009449!4d135.666773");
forestLocationUrl.push("https://www.google.com/maps/place/Amazon+Rainforest/@-3.4652837,-62.2246353,15z/data=!3m1!4b1!4m5!3m4!1s0x91e8605342744385:0x3d3c6dc1394a7fc7!8m2!3d-3.4653053!4d-62.2158805");
forestLocationUrl.push("https://en.wikipedia.org/wiki/Kelp_forest");
forestLocationUrl.push("https://www.google.com/maps/place/Biosphere+Reserve/@19.8509559,-87.6415318,17z/data=!3m1!4b1!4m5!3m4!1s0x8f5009169714b245:0x41d8f170a50e52e!8m2!3d19.8509509!4d-87.6393431");
forestLocationUrl.push("https://www.google.com/maps/search/Tandayapa+Cloud+Forest/@-0.0086467,-78.6916938,15z/data=!3m1!4b1");
forestLocationUrl.push("https://www.google.com/maps/place/Białowieża+Forest/@52.7346471,23.3438694,10z/data=!4m8!1m2!2m1!1sBialowieza+Primeval+Forest!3m4!1s0x472040341f583fc9:0x4a455da6e037283c!8m2!3d52.7228852!4d23.6555674");
forestLocationUrl.push("https://www.google.com/maps/place/Canada/@50.8525354,-130.2167026,3z/data=!3m1!4b1!4m5!3m4!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5!8m2!3d56.130366!4d-106.346771");
forestLocationUrl.push("https://www.google.com/maps/place/Congo+River/@-1.6569714,15.238656,8.02z/data=!4m5!3m4!1s0x1a6b71981187e5d9:0x138dbd1333821729!8m2!3d-1.94689!4d18.7795084");
forestLocationUrl.push("https://www.google.com/maps/place/Daintree+Rainforest/@-16.1700256,145.4162725,17z/data=!3m1!4b1!4m5!3m4!1s0x699d573ed18a04cb:0x147c855099501a8f!8m2!3d-16.1700308!4d145.4184612");
forestLocationUrl.push("https://www.google.com/maps/search/Sumatra+Rainforest/@3.6623093,97.4005971,10z/data=!3m1!4b1");
forestLocationUrl.push("https://www.google.com/maps/place/Valdivia,+Los+Ríos+Region,+Chile/@-39.8344973,-73.4459377,10z/data=!3m1!4b1!4m8!1m2!2m1!1sValdivian+Forest!3m4!1s0x9615e94f20de4501:0x89b7301051537813!8m2!3d-39.8195857!4d-73.2452103");
forestLocationUrl.push("https://www.google.com/maps/place/Humboldt+Redwoods+State+Park/@40.3067481,-123.9061026,17z/data=!3m1!4b1!4m5!3m4!1s0x54d463c73284e3b3:0x3716989f535a3fa!8m2!3d40.306744!4d-123.9039139");

var lakeLocationUrl = new Array();
lakeLocationUrl.push("https://www.google.com/maps/place/Dead+Sea/@31.5374596,35.21009,10z/data=!3m1!4b1!4m5!3m4!1s0x15033c2eaf9fbba1:0xf38cff48a0c15882!8m2!3d31.5590287!4d35.4731895");
lakeLocationUrl.push("https://www.google.com/maps/place/Glory+Hole/@38.5984285,-122.3878104,11z/data=!4m8!1m2!2m1!1sBerryessa+Glory+Hole!3m4!1s0x8084e23512fc9ec5:0xbf40f2a25a22b884!8m2!3d38.5122525!4d-122.1049072");
lakeLocationUrl.push("https://www.google.com/maps/place/Crater+Lake/@42.9416149,-122.1423596,13z/data=!3m1!4b1!4m5!3m4!1s0x54c63e84c023ab41:0xbae1bf19c88b877a!8m2!3d42.9445872!4d-122.1090039");
lakeLocationUrl.push("https://www.google.com/maps/place/Lake+Baikal/@53.6027518,102.342446,6z/data=!3m1!4b1!4m5!3m4!1s0x5dab7dedcf8dd873:0xf2489412c5853349!8m2!3d53.5587003!4d108.1649965");
lakeLocationUrl.push("https://www.google.com/maps/search/Abraham+Lake/@53.6027518,102.342446,6z");
lakeLocationUrl.push("https://www.google.com/maps/place/Green+Lake/@49.5399194,-123.9578192,7z/data=!4m8!1m2!2m1!1sGreen+Lake!3m4!1s0x53800f87c7d32af5:0xe0c3c7e305081269!8m2!3d51.4032661!4d-121.2314324");
lakeLocationUrl.push("https://www.google.com/maps/place/Taal+Lake/@13.9851001,120.8757477,11z/data=!3m1!4b1!4m5!3m4!1s0x33bd730a1e9e6721:0xeaf42e2516f22dcd!8m2!3d13.9750341!4d121.0220422");
lakeLocationUrl.push("https://www.google.com/maps/place/Jiuzhai+Valley+National+Park/@33.2600466,103.9164107,17z/data=!3m1!4b1!4m5!3m4!1s0x36f7bdf69e1c6729:0xc9fde8c8b5f60cc6!8m2!3d33.2600421!4d103.9185994");
lakeLocationUrl.push("https://www.google.com/maps/place/Spotted+Lake/@49.0786309,-119.5710378,16z/data=!3m1!4b1!4m5!3m4!1s0x5482c312fe9b502f:0x5b905c3627a35295!8m2!3d49.0780179!4d-119.5675024");
lakeLocationUrl.push("https://www.google.com/maps/place/Lake+Hillier/@-34.0949814,123.194023,15z/data=!3m1!4b1!4m5!3m4!1s0x2a5ea265f67dad97:0xfdbcca913bacc932!8m2!3d-34.095!4d123.2027778");

var beachLocationUrl = new Array();
beachLocationUrl.push("https://www.google.com/maps/place/Atoll+Tikehau/@-15.0148303,-148.3080131,11z/data=!3m1!4b1!4m5!3m4!1s0x768d903ff52c7c81:0x83793f71ef7c59d7!8m2!3d-15.0083959!4d-148.1757902");
beachLocationUrl.push("https://www.google.com/maps/place/Dreamland+Beach/@-8.7995033,115.1121088,16z/data=!3m1!4b1!4m5!3m4!1s0x2dd245154d864c41:0xaac6f51b3bd20fcb!8m2!3d-8.7992774!4d115.1177233");
beachLocationUrl.push("https://www.google.com/maps/place/Bathsheba/@13.2146496,-59.5266348,16z/data=!3m1!4b1!4m5!3m4!1s0x8c43ed9f14373a53:0xc09d77bda2018c08!8m2!3d13.2141938!4d-59.5230148");
beachLocationUrl.push("https://www.google.com/maps/place/Seven+Mile+Beach/@-34.8162137,150.71204,12z/data=!3m1!4b1!4m5!3m4!1s0x6b137cc31c0d79e1:0xe08be3c11f13fe39!8m2!3d-34.7725374!4d150.8133315");
beachLocationUrl.push("https://www.google.com/maps/place/Horseshoe+Bay+QLD+4819,+Australia/@-19.1236059,146.8336126,14z/data=!3m1!4b1!4m8!1m2!2m1!1sHorseshoe+Bay!3m4!1s0x697e06ec33687f57:0x500eef17f211330!8m2!3d-19.133333!4d146.85");
beachLocationUrl.push("https://www.google.com/maps/place/Harbor+Island/@25.499603,-76.6693398,13z/data=!3m1!4b1!4m5!3m4!1s0x8925375c307c3f9b:0xa3c4d4ec5138a59e!8m2!3d25.50011!4d-76.6340511");
beachLocationUrl.push("https://www.google.com/maps/place/Playa+La+Chiva/@18.1128925,-65.3896594,17z/data=!3m1!4b1!4m5!3m4!1s0x8c04c673efeb835b:0xca08150276bcaa1f!8m2!3d18.1128874!4d-65.3874707");
beachLocationUrl.push("https://www.google.com/maps/place/Trunk+Bay/@18.3525873,-64.770564,17z/data=!3m1!4b1!4m5!3m4!1s0x8c051278de5e0e8b:0x5fad6ca2762a6a05!8m2!3d18.3525822!4d-64.7683753");
beachLocationUrl.push("https://www.google.com/maps/place/Waipio+Valley/@20.1151155,-155.5886314,17z/data=!3m1!4b1!4m5!3m4!1s0x7953768932b3a7bf:0x8bf908e0138764e0!8m2!3d20.1151105!4d-155.5864427");
beachLocationUrl.push("https://www.google.com/maps/place/Parrot+Cay/@21.9208496,-72.0781741,14z/data=!3m1!4b1!4m5!3m4!1s0x894b5c13b36ad181:0xfe800355a5390278!8m2!3d21.920119!4d-72.0616304");
beachLocationUrl.push("https://www.google.com/maps/place/Sunset+Beach+Villas/@21.8142879,-72.1617995,17z/data=!3m1!4b1!4m5!3m4!1s0x894b4ff6a611721f:0xe158e8bace1815e0!8m2!3d21.8142829!4d-72.1596108");

var mountainLocationUrl = new Array();
mountainLocationUrl.push("https://www.google.com/maps/place/Mount+Kinabalu/@6.0753343,116.5500689,15z/data=!3m1!4b1!4m5!3m4!1s0x323ba2565e9224cb:0x2281c3fec0a9c05e!8m2!3d6.0753131!4d116.5588237");
mountainLocationUrl.push("https://www.google.com/maps/place/Amphitheatre/@-28.7594249,28.9034674,15z/data=!3m1!4b1!4m5!3m4!1s0x1ef2c4297e420c85:0xf78999f0d57e3a6f!8m2!3d-28.7594444!4d28.9122222");
mountainLocationUrl.push("https://www.google.com/maps/place/Huangshan+Mountain/@29.890698,118.015679,10z/data=!4m8!1m2!2m1!1sHuangshan!3m4!1s0x3435c68c09678d3d:0x706d912f1c61517e!8m2!3d30.137803!4d118.165201");
mountainLocationUrl.push("https://www.google.com/maps/place/Mt+Cook/@-43.5949585,170.1330335,15z/data=!3m1!4b1!4m5!3m4!1s0x6d2bcbf4957533cb:0x2459ca45fd83e865!8m2!3d-43.5949749!4d170.1417883");
mountainLocationUrl.push("https://www.google.com/maps/place/Fitz+Roy/@-49.2712311,-73.0519808,15z/data=!3m1!4b1!4m5!3m4!1s0xbdbd1a8b7e17beed:0xe1862b88429e5d!8m2!3d-49.271246!4d-73.043226");
mountainLocationUrl.push("https://www.google.com/maps/place/Kangrinboqe+Peak/@31.0675176,81.3031896,15z/data=!3m1!4b1!4m5!3m4!1s0x39a590ca18ebfb6b:0xdece226ef2f187fa!8m2!3d31.0675!4d81.3119444");
mountainLocationUrl.push("https://www.google.com/maps/place/Mountain+Ave,+Banff,+AB,+Canada/@51.1597058,-115.5685082,17z/data=!3m1!4b1!4m8!1m2!2m1!1sMountain+of+Banff!3m4!1s0x5370ca3d3c430ceb:0x145d03b33b9c86d5!8m2!3d51.1597025!4d-115.5663195");
mountainLocationUrl.push("https://www.google.com/maps/place/K2/@35.8800041,76.5063453,15z/data=!3m1!4b1!4m5!3m4!1s0x38fad5add7ff4adb:0xc531647bf8e9d577!8m2!3d35.8799875!4d76.5151001");
mountainLocationUrl.push("https://www.google.com/maps/place/Table+Mountain/@-33.9628034,18.4010858,15z/data=!3m1!4b1!4m5!3m4!1s0x1dcc67e657e6046d:0xaf549ac0fcfa4362!8m2!3d-33.962822!4d18.4098406");
mountainLocationUrl.push("https://www.google.com/maps/place/Mt+Everest/@27.9878682,86.9162713,15z/data=!3m1!4b1!4m5!3m4!1s0x39e854a215bd9ebd:0x576dcf806abbab2!8m2!3d27.98785!4d86.9250261");

function findAPlace(id){
  temp = id.split("-");
  type = temp[0];
  identifier = Number(temp[2]);
  switch (type) {
    case "f":{
      console.log("WHERE Find Forest Number : ",identifier);
      openWindow(identifier,forestLocationUrl);
      break;
    }
    case "l":{
      console.log("WHERE Find Lake Number : ",identifier);
      openWindow(identifier,lakeLocationUrl);
      break;
    }
    case "m":{
      console.log("WHERE Find Mountain Number : ",identifier);
      break;
    }
    case "b":{
      console.log("WHERE Find Beach Number : ",identifier);
      openWindow(identifier,beachLocationUrl);
      break;
    }
    default:{
      console.log("WHERE Not Found");
      openWindow(identifier,mountainLocationUrl);
      break;
    }
  }
}

function findADescription(id){
  temp = id.split("-");
  type = temp[0];
  identifier = Number(temp[2]);
  switch (type) {
    case "f":{
      console.log("WHAT Find Forest Number : ",identifier);
      openWindow(identifier,forestDescriptionWebsite);
      break;
    }
    case "l":{
      console.log("WHAT Find Lake Number : ",identifier);
      openWindow(identifier,lakeDescriptionWebsite);
      break;
    }
    case "m":{
      console.log("WHAT Find Mountain Number : ",identifier);
      openWindow(identifier,mountainDescriptionWebsite);
      break;
    }
    case "b":{
      console.log("WHAT Find Beach Number : ",identifier);
      openWindow(identifier,beachDescriptionWebsite);
      break;
    }
    default:{
      console.log("WHAT Not Found");
      break;
    }
  }
}



function openWindow(id,arrayTarget){
  var w = window.open(arrayTarget[id-1],'_blank');
  w.focus();
}
