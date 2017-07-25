module.exports = (object) => {
    let apiPath;
    let currency = object.currency;
    if(object.today){
        apiPath = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`;
    }
    if(object.yesterday || (object.start && object.end)){
        apiPath = `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`;
    }
    if(object.yesterday){
        apiPath = `${apiPath}&for=yesterday`
    }
    if(object.start && object.end){
        apiPath = `${apiPath}&start=${object.start}&end=${object.end}`
    }
    return apiPath;
}