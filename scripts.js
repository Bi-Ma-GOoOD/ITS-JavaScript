function parseData() {
    try {
        let data = JSON.parse("invalid json");
        console.log(data);
    } catch (err) {
        return null;
    } finally {
        console.log("เสร็จสิ้น");
    }
}

parseData();