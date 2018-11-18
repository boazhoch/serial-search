import Http from "./http";

class SerialSearch {
  constructor(endPointRoute) {
    this.endPointRoute = endPointRoute;
    this.httpRequester = new Http();
  }

  send(serialNumber) {
    this.httpRequester.post(this.endPointRoute);
  }

  fetchById(serialNumber) {
    //get serial number
  }

  fetchAll() {
    // get all serials
  }
}

export default SerialSearch;
