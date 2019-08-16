function getContacts() {
  try {
    var regex = /\+?\d+/g;
    var filteredContact = [];
    allContactsFromWAweb.forEach(
      c =>
        c.replace(/\s/g, "").match(regex) &&
        filteredContact.push(c.replace(/\s/g, ""))
    );

    var csvString = filteredContact.join("\r\n");
    var csvFile = URL.createObjectURL(
      new Blob([csvString], { type: "application/octet-binary" })
    );
    chrome.runtime.sendMessage(csvFile);
  } catch (error) {
    // console.log(error);
  }
}

getContacts();
