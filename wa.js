function getContacts() {
  try {
    var nodes = document.getElementById("main").childNodes;
    var resArr = [...nodes]
      .filter(c => c.nodeName === "HEADER")[0]
      .childNodes[1].childNodes[1].childNodes[0].getAttribute("title")
      .split(", ");
    var csvRows = [];
    for (var i = 0, l = resArr.length; i < l; ++i) {
      csvRows.push(resArr[i]);
    }
    var csvString = csvRows.join("\r\n");
    var csvFile = URL.createObjectURL(
      new Blob([csvString], { type: "application/octet-binary" })
    );
    chrome.runtime.sendMessage(csvFile);
  } catch (error) {
    console.log(error);
  }
}

getContacts();
