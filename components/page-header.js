class PageHeader {
  constructor(headerElement, pageHeader) {
    this.headerElement = headerElement;
    this.pageHeader = pageHeader;
  }
  updateAverage(newAverage){
    this.newAverage = newAverage;
    console.log(newAverage);
  }
}
