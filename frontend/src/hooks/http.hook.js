import {useCallback, useState} from "react";


const useHttp = (func) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const request = useCallback(async (requestData = null,) => {
        setLoading(true);

        try {
            const response = await func(requestData)
            const data = await response
            setLoading(false);

            return data
        } catch (e) {
            setLoading(false);
            setError(e["message"]);
            throw e;
        }
    }, [func]);

    const clearError = useCallback(() => setError(null), []);

    return {request, loading, error, clearError}
}

export default useHttp;