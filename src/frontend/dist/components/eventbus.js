class EventBus {
    events = {};
    panelWidth = 400; // Shared default width for panels
    // Register an event listener
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    // Remove an event listener
    off(event, callback) {
        if (!this.events[event])
            return;
        this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
    // Emit an event
    emit(event, ...args) {
        if (!this.events[event])
            return;
        this.events[event].forEach((callback) => callback(...args));
    }
    // Manage shared panel width
    setPanelWidth(width) {
        this.panelWidth = width;
        this.emit("panelWidthChanged", width);
    }
    getPanelWidth() {
        return this.panelWidth;
    }
}
const eventBus = new EventBus();
export default eventBus;
