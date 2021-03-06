/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Renderer2 } from '@angular/core';
export class DwUpdateHostClassService {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.classMap = {};
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = Object.assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                if (classMap[i]) {
                    renderer.addClass(el, i);
                }
            }
        }
    }
}
DwUpdateHostClassService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DwUpdateHostClassService.ctorParameters = () => [
    { type: Renderer2 }
];
function DwUpdateHostClassService_tsickle_Closure_declarations() {
    /** @type {?} */
    DwUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    DwUpdateHostClassService.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0RCxNQUFNOzs7O0lBMkJKLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7d0JBMUJwQixFQUFFO0tBNEJwQjs7Ozs7O0lBMUJELGVBQWUsQ0FBQyxFQUFlLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEscUJBQVEsUUFBUSxDQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakQ7Ozs7Ozs7SUFFTyxXQUFXLENBQUMsRUFBZSxFQUFFLFFBQWdCLEVBQUUsUUFBbUI7UUFDeEUsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNGOzs7Ozs7OztJQUdLLFFBQVEsQ0FBQyxFQUFlLEVBQUUsUUFBZ0IsRUFBRSxRQUFtQjtRQUNyRSxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksUUFBUSxDQUFFLENBQUMsQ0FBRSxFQUFFO29CQUNqQixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7YUFDRjtTQUNGOzs7O1lBekJKLFVBQVU7Ozs7WUFGVSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2Uge1xuICBwcml2YXRlIGNsYXNzTWFwID0ge307XG5cbiAgdXBkYXRlSG9zdENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IG9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoZWwsIHRoaXMuY2xhc3NNYXAsIHRoaXMucmVuZGVyZXIpO1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7IC4uLmNsYXNzTWFwIH07XG4gICAgdGhpcy5hZGRDbGFzcyhlbCwgdGhpcy5jbGFzc01hcCwgdGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUNsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IG9iamVjdCwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xuICAgICAgaWYgKGNsYXNzTWFwLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IG9iamVjdCwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xuICAgICAgaWYgKGNsYXNzTWFwLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGlmIChjbGFzc01hcFsgaSBdKSB7XG4gICAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxufVxuIl19