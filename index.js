fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => console.log("IP:", data.ip));