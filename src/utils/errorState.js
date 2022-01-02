import { Error } from '../components/Error/Error';

class ErrorState {
    error = false;
    setNewState(val, errMsg = 'dupa') {
        this.error = val;
        const observer = new MutationObserver((_, obs) => {
            const element = document.getElementById(`error`);
            if (element) {
                setTimeout(() => element.className = 'error-off', 6000);
                element.className = val ? 'error-on' : 'error-off';
                obs.disconnect();
                return;
            }
        });
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }
}

export default new ErrorState();
