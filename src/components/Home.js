import { React, useEffect, useState } from 'react'
import AvailableVehicles from './AvailableVehicles';
import Loader from './Loader';
import Error from './Error'
const BASE_URL =require('../utils/helper');

export default function Home() {

    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const vehicleHandler = async () => {
        try {
            setLoading(true);

            // Fetching all available
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            // console.log(`${BASE_URL}/api/v1/vehicle`);
            const response = await fetch(`${BASE_URL}/api/v1/vehicle`, {
                method: 'GET',
                credentials: 'include', // Don't forget to specify this if you need cookies
                headers: headers
            })
            const json = await response.json();
            setLoading(false);
            if (json.status === 'success') {
                setVehicles(json.data);
                setError(false);
            }
            else {
                setError(true);
            }

        } catch {
            setLoading(false);
            setError(true);
        }
    }
    useEffect(() => {
        vehicleHandler();
        // eslint-disable-next-line
    }, []);

    return (<>{loading ? <Loader /> : error ? <Error /> :
        <AvailableVehicles vehicles={vehicles} />
    }</>
    )
}
