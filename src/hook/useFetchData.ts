import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState, useFetchDataQuery} from "../config";

const useFetchData = (getUrl: string) => {

    const state = useSelector((state: RootState) => {
        return state.app;
    });

    const {data, isError, isLoading, isFetching} = useFetchDataQuery({
            ...state,
            getUrl,
        });

    const onFetchData = useCallback(() => {

    }, [data, isError,]);

    useEffect(() => {
        onFetchData();
    }, [onFetchData]);

    console.log("This is data object", data);

    return {
        data: data,
        loading: isLoading || isFetching,
    };
};

export default useFetchData;
