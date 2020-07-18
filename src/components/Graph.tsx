import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import IUserInput from '../shared/IUserInput';
import IGraphResponse from '../shared/IGraphResponse';

function Graph(props: IUserInput) {
    const [searchQuery, setSearchQuery] = useState<string | null>("");
    const [apiResponse, setApiResponse] = useState<IGraphResponse[]>([
        {
            close: 0,
            label: "Dec"
        }
    ]);

    useEffect(() => {
        setSearchQuery(props.searchQuery);

        // if (searchQuery === "")
        //     return;

        fetch(`https://sandbox.iexapis.com/stable/stock/${props.searchQuery}/chart/1m?token=${process.env.REACT_APP_SANDBOX_API_KEY}`)
            .then(response => response.json())
            .then(response => {
                let resObjArray: IGraphResponse[] = [];

                for (let i = 0; i < response.length; i++) {
                    if (typeof response[i] !== 'undefined') {
                        let resObj = {
                            close: response[i]["close"],
                            label: response[i]["label"]
                        };
    
                        resObjArray.push(resObj);
                    }
                }

                setApiResponse(resObjArray);
            });
    }, [props.searchQuery]);

    if (searchQuery !== "") {
        return (
            <div>
                <LineChart width={600} height={400} data={apiResponse}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="label"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
            </div>
        );
    } else {
        return <div></div>
    }
}

export default Graph;
