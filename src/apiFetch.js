import { KEY } from "./config";

export const runTestApi = url => {

    const runTestUrl = `http://www.webpagetest.org/runtest.php?url=https://www.liverpool.com.mx/tienda/adidas/cat4190005&runs=1&f=json&location=Dulles_MotoG.3GFast&browser=Firefox&k=${KEY}`
    return fetch(runTestUrl, {
        method: 'GET'
    })
    .then(response => response.json())
    .catch(error => console.log('runTest Fetch', error));
};

export const testStatusApi = idTest => {
    const testStatusUrl = `http://www.webpagetest.org/testStatus.php?f=json&test=${idTest}`;
    return fetch(testStatusUrl, {
        method: 'GET'
    })
    .then(response => response.json())
    .catch(error => console.log('testStatus', error));
};

export const resultStatusApi = idTest => {
    const resultStatusUrl = `http://www.webpagetest.org/xmlResult/${idTest}/`;
    return fetch(resultStatusUrl, {
        method: 'GET'
    })
    .then(response => response.json())
    .catch(error => console.log('testStatus', error));
};
