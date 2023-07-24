import { React } from 'react'
// import SyncLoader from "react-spinners/SyncLoader";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import HashLoader from "react-spinners/HashLoader"

export default function Loader() {

    return (
        // <SyncLoader color="#000" className='text-center mt-5' />
        // // <ClimbingBoxLoader color="#36d7b7" className='text-center mt-5' />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <HashLoader color="#000" className='text-center mt-5' />
</div>
    )
}
