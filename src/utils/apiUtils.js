
export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300)
        return response;

    throw response;
}

export function parseJSON(response) {
    console.log(response);
    return response.json();
}