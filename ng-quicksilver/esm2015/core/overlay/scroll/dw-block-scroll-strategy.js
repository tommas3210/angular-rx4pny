/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class DwBlockScrollStrategy {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} dwMeasureScrollbarService
     */
    constructor(document, renderer, dwMeasureScrollbarService) {
        this.document = document;
        this.renderer = renderer;
        this.dwMeasureScrollbarService = dwMeasureScrollbarService;
    }
    /**
     * @return {?}
     */
    attach() { }
    /**
     * @return {?}
     */
    enable() {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
        this.renderer.setStyle(this.document.body, 'padding-right', `${this.dwMeasureScrollbarService.scrollBarWidth}px`);
    }
    /**
     * @return {?}
     */
    disable() {
        this.renderer.removeStyle(document.body, 'overflow');
        this.renderer.removeStyle(document.body, 'padding-right');
    }
}
function DwBlockScrollStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    DwBlockScrollStrategy.prototype.document;
    /** @type {?} */
    DwBlockScrollStrategy.prototype.renderer;
    /** @type {?} */
    DwBlockScrollStrategy.prototype.dwMeasureScrollbarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjb3JlL292ZXJsYXkvc2Nyb2xsL2R3LWJsb2NrLXNjcm9sbC1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsTUFBTTs7Ozs7O0lBRUosWUFBb0IsUUFBa0IsRUFBVSxRQUFtQixFQUFVLHlCQUFvRDtRQUE3RyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7S0FDaEk7Ozs7SUFFRCxNQUFNLE1BQVc7Ozs7SUFFakIsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO0tBRW5IOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztLQUMzRDtDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kdy1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlJ1xuXG5leHBvcnQgY2xhc3MgRHdCbG9ja1Njcm9sbFN0cmF0ZWd5IGltcGxlbWVudHMgU2Nyb2xsU3RyYXRlZ3kge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZTogRHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSkge1xuICB9XG5cbiAgYXR0YWNoKCk6IHZvaWQge31cblxuICBlbmFibGUoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdwYWRkaW5nLXJpZ2h0JywgYCR7dGhpcy5kd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLnNjcm9sbEJhcldpZHRofXB4YCk7XG5cbiAgfVxuXG4gIGRpc2FibGUoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGRvY3VtZW50LmJvZHksICdwYWRkaW5nLXJpZ2h0Jyk7XG4gIH1cblxufVxuIl19