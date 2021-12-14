// Set a cookie that tells the user how many times they have vitited the page
// Set a cookie that tells the user if they have already entered their name
// If the user has visited the page before, display the number of visits
// If the user has not visited the page before, ask them to enter their name
// Display the name and number of visits
// If the user has not entered their name, ask them to enter it
// Display the name and number of visits


var visits = 0;
var visitsCookie = "visits=";
var nameCookie = "name=";
var visitsCookieExists = false;
var nameCookieExists = false;
var visitsCookieValue = "";
var nameCookieValue = "";

// Check if the visits cookie exists
function checkVisitsCookie() {
  if (document.cookie.indexOf(visitsCookie) != -1) {
    visitsCookieExists = true;
  } else {
    visitsCookieExists = false;
  }
}

// Check if the name cookie exists
function checkNameCookie() {
  if (document.cookie.indexOf(nameCookie) != -1) {
    nameCookieExists = true;
  } else {
    nameCookieExists = false;
  }
}

// Get the number of visits from the visits cookie
function getVisits() {
  checkVisitsCookie();
  if (visitsCookieExists) {
    visitsCookieValue = document.cookie.substring(
      document.cookie.indexOf(visitsCookie) + visitsCookie.length
    );
    visitsCookieValue = visitsCookieValue.substring(
      0,
      visitsCookieValue.indexOf(";")
    );
    visits = parseInt(visitsCookieValue);
  } else {
    visits = 0;
  }
}

// Get the name from the name cookie
function getName() {
  checkNameCookie();
  if (nameCookieExists) {
    nameCookieValue = document.cookie.substring(
      document.cookie.indexOf(nameCookie) + nameCookie.length)
  }
}