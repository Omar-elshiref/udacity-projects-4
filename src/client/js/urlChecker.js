function isValidURL(url) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/;
    return regex.test(url);
}

export { isValidURL };
