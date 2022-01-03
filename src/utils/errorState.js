import { Error } from '../components/Error/Error';

class ErrorState {
    error = false;
    done = false;
    setNewState(val) {
        this.error = val;
        const observer = new MutationObserver((_, obs) => {
            const element = document.getElementById(`error`);
            if (element) {
                if(!this.done){
                setTimeout(() => element.className = 'error-off', 6000);
                element.className = val ? 'error-on' : 'error-off';
                this.done = true;
                obs.disconnect();
                return;
            }
            }
        });
        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }
}

export default new ErrorState();
