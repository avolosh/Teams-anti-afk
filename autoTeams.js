// Step one: Install greasemonkey in firefox
// Step two: add this script
// https://www.reddit.com/r/MicrosoftTeams/comments/k5w349/script_for_keeping_available_status_perpetually/


// ==UserScript==
// @name     fuk u teams
// @version  1
// @grant    none
// @match        *://*.teams.microsoft.com/*
// ==/UserScript==

function getAuthToken() {
  for(const i in localStorage) {
    if(i.startsWith("ts.") && i.endsWith("cache.token.https://presence.teams.microsoft.com/")) {
      return JSON.parse(localStorage[i]).token;
    }
  }
}

function makeActive() {
  console.log('fuk u teams');
  fetch("https://presence.teams.microsoft.com/v1/me/forceavailability/", {
    "headers": {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAuthToken()}`
    },
    "body": '{"availability":"Available"}',
    "method": "PUT"
  })
  .then(response => console.log(`Got fuked: ${response.statusText}`))

}


setInterval(makeActive, 15*1000);
makeActive()
