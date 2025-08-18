import React, {useState, useEffect} from 'react'
function Digitalclock(){
    const[time, setTime]=useState(new Date());

    useEffect(()=>{
        const intervalID=setInterval(()=>{
            setTime(new Date());

        },1000);

        return()=>{
            clearInterval(intervalID);
        }; 

    },[]);
    function formattime(){
        let hours =time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridian= hours >=12 ?"PM":"AM";

        hours= hours %12 ||12;

        return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
    }
    function padZero(number){
        return (number<10?"0":"")+number

    }



    return(
    <div className='clockcontainer'>
        <div className='clock'>
            <span>{formattime()}</span>
        </div>
    </div>

    )

}
export default Digitalclock