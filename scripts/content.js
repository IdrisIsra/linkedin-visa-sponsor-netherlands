const allCompanies = globalThis.allCompanies



async function run() {
  const companyNames = document.getElementsByClassName(
    "job-card-container__primary-description"
  );

  if (companyNames) {
    console.log("companyNames", companyNames);
    console.log(allCompanies.length);
    for (entry of companyNames) {
      console.log("entry", entry);
      const companyName = entry.innerText;
      console.log("companyName", companyName);

      if (allCompanies.find((company) => company.includes(companyName))) {
        console.log("found this one!!!");
        entry.innerText = `${companyName} ✅`;
      }
    }
  }
}

window.addEventListener(
  "load",
  function load(e) {
    window.removeEventListener("load", load, false);
    this.setTimeout(() => {
      run();
    }, 5000);
  },
  false
);


