const huiswerkmaken = function(superleukvak, callback) {
  console.log(`Ok ok ik ga mijn ${superleukvak} huiswerk maken`);
  setTimeout(function() {
    callback();
  }, 8000);
};

const klaarmetalhethuiswerk = function() {
  console.log("Kijk ik ben klaar met het superleuke huiswerk");
};

huiswerkmaken("wiskunde", klaarmetalhethuiswerk);
