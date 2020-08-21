import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs";


//custom hook se hace el efecto para que llame la data despues de 3 seg
export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGif(category)
            .then(imgs => {

                setstate({
                    data: imgs,
                    loading: false
                })

            })
    }, [category])


    return state;
}