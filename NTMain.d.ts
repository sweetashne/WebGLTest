declare namespace LearningWebGL {
    class Engine {
        private _canvas;
        constructor();
        start(): void;
        private loop;
    }
}
declare namespace LearningWebGL {
    var gl: WebGLRenderingContext;
    class GLUtilities {
        static initialize(elementId?: string): HTMLCanvasElement;
    }
}
