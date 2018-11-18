class DataFetch {
  constructor(endPoint, dataModel) {
    this.endPoint = endPoint;
    this.dataModel = dataModel;
  }

  fetchAll() {
    this.dataModel.fetchAll();
  }

  fetchOne(id) {
    this.dataModel.fetchOne(id);
  }
}

export default DataFetch;
