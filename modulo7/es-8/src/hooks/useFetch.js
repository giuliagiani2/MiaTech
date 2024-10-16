//IMPLEMENTA L'HOOK USEFETCH
import { useEffect, useState } from "react";

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    data: {}
};

export const useFetch = (url, options = DEFAULT_OPTIONS) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        if (!loading) setLoading(true);
        if (error) setError(false);

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("Errore durante la chiamata");
            }
            const _data = await response.json();
            setData(_data);
        } catch (error) {
            setError(error.message);
        } finally {
            if (loading) setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        data, error, loading
    };
}