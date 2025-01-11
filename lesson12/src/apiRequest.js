const apiRequest = async (url, optionsObj = null, errorMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server');
        }
    } catch (err) {
        errorMsg = err.message;
    } finally {
        return errorMsg;
    }
};

export default apiRequest;