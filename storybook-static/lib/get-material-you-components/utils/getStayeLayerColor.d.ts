export declare enum StateLayer {
    Hover = 0.08,
    Focus = 0.12,
    Press = 0.12,
    Drag = 0.16
}
export declare const getStateLayerColor: (state: StateLayer, containerColor: string, contentColor: string) => string;
