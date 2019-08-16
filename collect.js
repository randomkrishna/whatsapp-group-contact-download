var allContactsFromWAweb = [];

function readContactContinuously() {
  try {
    var nodes = document.getElementById("main").childNodes;
    var resArr = [...nodes]
      .filter(c => c.nodeName === "HEADER")[0]
      .childNodes[1].childNodes[1].childNodes[0].getAttribute("title")
      .split(", ");
    var allValue = [...allContactsFromWAweb, ...resArr];
    allContactsFromWAweb = [...new Set(allValue)];
  } catch (error) {
    // console.log(error);
  }
}

setInterval(readContactContinuously, 1000);
