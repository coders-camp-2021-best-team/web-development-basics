class LoadingState {
    loading = false;
    setNewState(val) {
        this.loading = val;
        val = false;
        const observer = new MutationObserver((_, obs) => {
            const element = document.getElementById(`spinner-screen`);
            if (element) {
                element.className = val ? 'spinner-on' : 'spinner-off';
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

export default new LoadingState();