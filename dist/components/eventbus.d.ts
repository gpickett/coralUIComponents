type EventCallback = (...args: any[]) => void;
declare class EventBus {
    private events;
    private panelWidth;
    on(event: string, callback: EventCallback): void;
    off(event: string, callback: EventCallback): void;
    emit(event: string, ...args: any[]): void;
    setPanelWidth(width: number): void;
    getPanelWidth(): number;
}
declare const eventBus: EventBus;
export default eventBus;
