import {useEffect, useRef} from "react";

export const useInterval = (callback, refreshKey, interval) => {
    const savedCallback = useRef()

    useEffect(() => {
       savedCallback.current = callback
    },[])

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if(refreshKey !== null){
            let id = setInterval(tick, interval)
            return () => clearInterval(id)
        }
    },[refreshKey])

}