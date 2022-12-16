import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { failed, fetching, success } from "../features/data_fetch/DataSlice";

const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetching())
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            dispatch(success(res.data))            
        })
        .catch(err => {
        dispatch(failed(err.message))
    })
},[])