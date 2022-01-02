/* 
    @param id - ID of element that we wanna select
    @param callback - function which we want to invoke on listener, for example what will be done onClick
    @param event - addEventListener event, click, keypress etc.
*/

// This function is created due to the code where we want to return HTML and add eventListener on element which has some delay while applying to real HTML
// It's creating an Observer which will listen for changes in document, and run the callback when it detects the presents of the element that we are looking for

export const observerListener = (id, callback, event = 'click') => {
    const observer = new MutationObserver((_, obs) => {
        const element = document.getElementById(`${id}`);
        if (element) {
            element.addEventListener(event, callback);
            obs.disconnect();
            return;
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
};

export const obseverDom = (callback) => {
    const observer = new MutationObserver(callback);
    observer.observe(document, {
        childList: true,
        subtree: true
    });
};
