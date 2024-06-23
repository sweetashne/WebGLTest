window.onload = function () {
    var e = new LearningWebGL.Engine();
    e.start();
};
var LearningWebGL;
(function (LearningWebGL) {
    var Engine = (function () {
        function Engine() {
        }
        Engine.prototype.start = function () {
            this._canvas = LearningWebGL.GLUtilities.initialize();
            LearningWebGL.gl.clearColor(0, 0, 0, 1);
            this.loop();
        };
        Engine.prototype.loop = function () {
            LearningWebGL.gl.clear(LearningWebGL.gl.COLOR_BUFFER_BIT);
            requestAnimationFrame(this.loop.bind(this));
        };
        return Engine;
    }());
    LearningWebGL.Engine = Engine;
})(LearningWebGL || (LearningWebGL = {}));
var LearningWebGL;
(function (LearningWebGL) {
    var GLUtilities = (function () {
        function GLUtilities() {
        }
        GLUtilities.initialize = function (elementId) {
            var canvas;
            if (elementId !== undefined) {
                canvas = document.getElementById(elementId);
                if (canvas === undefined) {
                    throw new Error("cannot find a canvas element named: " + elementId);
                }
            }
            else {
                canvas = document.createElement('canvas');
                document.body.appendChild(canvas);
            }
            LearningWebGL.gl = canvas.getContext("webgl");
            if (LearningWebGL.gl === undefined) {
                throw new Error("Unable to initialize WebGL");
            }
            return canvas;
        };
        return GLUtilities;
    }());
    LearningWebGL.GLUtilities = GLUtilities;
})(LearningWebGL || (LearningWebGL = {}));
