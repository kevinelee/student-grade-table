class PageHeader {
  constructor(headerElement, pageHeader) {
    this.headerElement = headerElement;
    this.pageHeader = pageHeader;
  }
  updateAverage(newAverage){
    this.newAverage = newAverage;
    var badge = document.querySelector('.badge');
    badge.textContent = newAverage;
    console.log(newAverage);
  }
}
