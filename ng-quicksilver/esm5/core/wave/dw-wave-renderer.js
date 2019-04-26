/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
var DwWaveRenderer = /** @class */ (function () {
    function DwWaveRenderer(triggerElement, ngZone, insertExtraNode) {
        var _this = this;
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.lastTime = 0;
        this.onClick = function (event) {
            if (!_this.triggerElement ||
                !_this.triggerElement.getAttribute ||
                _this.triggerElement.getAttribute('disabled') ||
                (/** @type {?} */ (event.target)).tagName === 'INPUT' ||
                _this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            _this.fadeOutWave();
        };
        /** @type {?} */
        var platform = new Platform();
        if (platform.isBrowser) {
            this.bindTriggerEvent();
        }
    }
    Object.defineProperty(DwWaveRenderer.prototype, "waveAttributeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwWaveRenderer.prototype.bindTriggerEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.triggerElement) {
                _this.triggerElement.addEventListener('click', _this.onClick, true);
            }
        });
    };
    /**
     * @return {?}
     */
    DwWaveRenderer.prototype.removeTriggerEvent = /**
     * @return {?}
     */
    function () {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.onClick, true);
        }
    };
    /**
     * @return {?}
     */
    DwWaveRenderer.prototype.removeStyleAndExtraNode = /**
     * @return {?}
     */
    function () {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild(this.extraNode);
        }
    };
    /**
     * @return {?}
     */
    DwWaveRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    };
    /**
     * @return {?}
     */
    DwWaveRenderer.prototype.fadeOutWave = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var node = this.triggerElement;
        /** @type {?} */
        var waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML =
                "[ant-click-animating-without-extra-node]:after { border-color: " + waveColor + "; }";
            document.body.appendChild(this.styleForPseudo);
        }
        if (this.insertExtraNode) {
            if (!this.extraNode) {
                this.extraNode = document.createElement('div');
            }
            this.extraNode.className = 'ant-click-animating-node';
            node.appendChild(this.extraNode);
        }
        this.lastTime = Date.now();
        this.runTimeoutOutsideZone(function () {
            node.removeAttribute(_this.waveAttributeName);
            _this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    DwWaveRenderer.prototype.isValidColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return color
            && color !== '#ffffff'
            && color !== 'rgb(255, 255, 255)'
            && this.isNotGrey(color)
            && !/rgba\(\d*, \d*, \d*, 0\)/.test(color)
            && color !== 'transparent';
    };
    /**
     * @param {?} color
     * @return {?}
     */
    DwWaveRenderer.prototype.isNotGrey = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DwWaveRenderer.prototype.getWaveColor = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var nodeStyle = getComputedStyle(node);
        return nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color');
    };
    /**
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    DwWaveRenderer.prototype.runTimeoutOutsideZone = /**
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    function (fn, delay) {
        this.ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    return DwWaveRenderer;
}());
export { DwWaveRenderer };
function DwWaveRenderer_tsickle_Closure_declarations() {
    /** @type {?} */
    DwWaveRenderer.prototype.waveTransitionDuration;
    /** @type {?} */
    DwWaveRenderer.prototype.styleForPseudo;
    /** @type {?} */
    DwWaveRenderer.prototype.extraNode;
    /** @type {?} */
    DwWaveRenderer.prototype.lastTime;
    /** @type {?} */
    DwWaveRenderer.prototype.onClick;
    /** @type {?} */
    DwWaveRenderer.prototype.triggerElement;
    /** @type {?} */
    DwWaveRenderer.prototype.ngZone;
    /** @type {?} */
    DwWaveRenderer.prototype.insertExtraNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctd2F2ZS1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY29yZS93YXZlL2R3LXdhdmUtcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRCxJQUFBO0lBV0Usd0JBQW9CLGNBQTJCLEVBQVUsTUFBYyxFQUFVLGVBQXdCO1FBQXpHLGlCQUtDO1FBTG1CLG1CQUFjLEdBQWQsY0FBYyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFTO3NDQVR2RSxHQUFHO3dCQUdsQixDQUFDO3VCQWFWLFVBQUMsS0FBaUI7WUFDMUIsSUFDRSxDQUFDLEtBQUksQ0FBQyxjQUFjO2dCQUNwQixDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTtnQkFDakMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO2dCQUM1QyxtQkFBQyxLQUFLLENBQUMsTUFBcUIsRUFBQyxDQUFDLE9BQU8sS0FBSyxPQUFPO2dCQUNqRCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4RCxPQUFPO2FBQ1I7WUFDRCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7O1FBaEJDLElBQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0tBQ0Y7SUFURCxzQkFBSSw2Q0FBaUI7Ozs7UUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyx3Q0FBd0MsQ0FBQztTQUNoRzs7O09BQUE7Ozs7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O3lCQXpIL0Q7SUEySEMsQ0FBQTtBQXhIRCwwQkF3SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER3V2F2ZVJlbmRlcmVyIHtcblxuICByZWFkb25seSB3YXZlVHJhbnNpdGlvbkR1cmF0aW9uID0gNDAwO1xuICBwcml2YXRlIHN0eWxlRm9yUHNldWRvOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBleHRyYU5vZGU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBsYXN0VGltZSA9IDA7XG5cbiAgZ2V0IHdhdmVBdHRyaWJ1dGVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0RXh0cmFOb2RlID8gJ2FudC1jbGljay1hbmltYXRpbmcnIDogJ2FudC1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGluc2VydEV4dHJhTm9kZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHBsYXRmb3JtID0gbmV3IFBsYXRmb3JtKCk7XG4gICAgaWYgKHBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5iaW5kVHJpZ2dlckV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50IHx8XG4gICAgICAhdGhpcy50cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUgfHxcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8XG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lID09PSAnSU5QVVQnIHx8XG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdkaXNhYmxlZCcpID49IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mYWRlT3V0V2F2ZSgpO1xuICB9XG5cbiAgYmluZFRyaWdnZXJFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVRyaWdnZXJFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3R5bGVGb3JQc2V1ZG8gJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnN0eWxlRm9yUHNldWRvKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnN0eWxlRm9yUHNldWRvKTtcbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnNlcnRFeHRyYU5vZGUgJiYgdGhpcy50cmlnZ2VyRWxlbWVudC5jb250YWlucyh0aGlzLmV4dHJhTm9kZSkpIHtcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICB0aGlzLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xuICAgdGhpcy5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmYWRlT3V0V2F2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy50cmlnZ2VyRWxlbWVudDtcbiAgICBjb25zdCB3YXZlQ29sb3IgPSB0aGlzLmdldFdhdmVDb2xvcihub2RlKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSh0aGlzLndhdmVBdHRyaWJ1dGVOYW1lLCAndHJ1ZScpO1xuICAgIGlmIChEYXRlLm5vdygpIDwgdGhpcy5sYXN0VGltZSArIHRoaXMud2F2ZVRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzVmFsaWRDb2xvcih3YXZlQ29sb3IpKSB7XG4gICAgICBpZiAoIXRoaXMuc3R5bGVGb3JQc2V1ZG8pIHtcbiAgICAgICAgdGhpcy5zdHlsZUZvclBzZXVkbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8uaW5uZXJIVE1MID1cbiAgICAgICAgYFthbnQtY2xpY2stYW5pbWF0aW5nLXdpdGhvdXQtZXh0cmEtbm9kZV06YWZ0ZXIgeyBib3JkZXItY29sb3I6ICR7d2F2ZUNvbG9yfTsgfWA7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3R5bGVGb3JQc2V1ZG8pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluc2VydEV4dHJhTm9kZSkge1xuICAgICAgaWYgKCF0aGlzLmV4dHJhTm9kZSkge1xuICAgICAgICB0aGlzLmV4dHJhTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgfVxuICAgICAgdGhpcy5leHRyYU5vZGUuY2xhc3NOYW1lID0gJ2FudC1jbGljay1hbmltYXRpbmctbm9kZSc7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuZXh0cmFOb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHRoaXMud2F2ZUF0dHJpYnV0ZU5hbWUpO1xuICAgICAgdGhpcy5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xuICAgIH0sIHRoaXMud2F2ZVRyYW5zaXRpb25EdXJhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGlzVmFsaWRDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbG9yXG4gICAgICAmJiBjb2xvciAhPT0gJyNmZmZmZmYnXG4gICAgICAmJiBjb2xvciAhPT0gJ3JnYigyNTUsIDI1NSwgMjU1KSdcbiAgICAgICYmIHRoaXMuaXNOb3RHcmV5KGNvbG9yKVxuICAgICAgJiYgIS9yZ2JhXFwoXFxkKiwgXFxkKiwgXFxkKiwgMFxcKS8udGVzdChjb2xvcilcbiAgICAgICYmIGNvbG9yICE9PSAndHJhbnNwYXJlbnQnO1xuICB9XG5cbiAgcHJpdmF0ZSBpc05vdEdyZXkoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1hdGNoID0gY29sb3IubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXC5cXGRdKik/XFwpLyk7XG4gICAgaWYgKG1hdGNoICYmIG1hdGNoWyAxIF0gJiYgbWF0Y2hbIDIgXSAmJiBtYXRjaFsgMyBdKSB7XG4gICAgICByZXR1cm4gIShtYXRjaFsgMSBdID09PSBtYXRjaFsgMiBdICYmIG1hdGNoWyAyIF0gPT09IG1hdGNoWyAzIF0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2F2ZUNvbG9yKG5vZGU6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBub2RlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHJldHVybiBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXRvcC1jb2xvcicpIHx8IC8vIEZpcmVmb3ggQ29tcGF0aWJsZVxuICAgICAgbm9kZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1jb2xvcicpIHx8XG4gICAgICBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5UaW1lb3V0T3V0c2lkZVpvbmUoZm46ICgpID0+IHZvaWQsIGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xuICB9XG59XG4iXX0=