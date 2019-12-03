import React, { useState, useEffect } from 'react';
import { KEY } from "../../config";
import axios from 'axios';

const Test = ({url, name}) => {

    // console.log("URL ", url, "NAME ", name);

    const [elapsed, setElapsed] = useState('Uninitialized Test');
    // const [resultTest, setResultTest] = useState('');
    const [isError, setIsError] = useState({
        status: false,
        message: ''
    });

    useEffect(() => {
        const fetchMyAPI = async () => {
            console.log("RUN TEST");
            const result = await axios(
                `http://www.webpagetest.org/runtest.php?url=${url}&runs=1&f=json&location=Dulles_MotoG4.3GFast&video=1&timeline=1&lighthouse=1&k=${KEY}`,);
            
            console.log("RESULT, ", result);

            if (result.data.statusCode === 400) {
                setIsError(result.data.statusText);
            } else {
                let testID = result.data.data.testId;
                testStatus(testID);
            };
        };
        fetchMyAPI();
    }, []);

    const testStatus = (testID) => {
        console.log("TEST STATUS");

        let intervalFetch = setInterval(myTimer, 5000);

        async function myTimer() {

            const result = await axios(
                `http://www.webpagetest.org/testStatus.php?f=json&test=${testID}`
            );

            console.log("RESULT TIMER ", result.data);

            setElapsed(result.data.statusText);

            if (result.data.statusCode === 200) {

                clearInterval(intervalFetch);

                const jsonResult = await axios(
                    `http://www.webpagetest.org/jsonResult.php?test=${testID}`
                );

                console.log("FINISH JSON", jsonResult.data);

                // setResultTest(jsonResult.data);
            }; 
        };
    };

    return (
        <div>
            { isError.status 
                ? isError.message
                : (
                    <div>
                        <h1>Name: {name}</h1>
                        <span>{elapsed}</span>
                    </div>
                )
            }
        </div>
    );
};

export default Test;
