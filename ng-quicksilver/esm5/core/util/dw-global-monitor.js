/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from '@angular/core';
/**
 * @record
 */
export function Position() { }
function Position_tsickle_Closure_declarations() {
    /** @type {?} */
    Position.prototype.x;
    /** @type {?} */
    Position.prototype.y;
}
var DwGlobalMonitorService = /** @class */ (function () {
    function DwGlobalMonitorService() {
        this.counter = 0;
        this.lastClickPos = {
            x: 0,
            y: 0
        };
        this._navItemSource = new EventEmitter();
        this._observeGlobalEvents();
    }
    /**
     * @return {?}
     */
    DwGlobalMonitorService.prototype.getGlobalCount = /**
     * @return {?}
     */
    function () {
        return ++this.counter;
    };
    /**
     * @param {?} status
     * @return {?}
     */
    DwGlobalMonitorService.prototype.setDocumentOverflowHidden = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        document.body.style.overflow = status ? 'hidden' : '';
    };
    /**
     * @return {?}
     */
    DwGlobalMonitorService.prototype._observeGlobalEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 监听document的点击事件，记录点击坐标，并抛出 documentClick 事件
        document.addEventListener('click', function (e) {
            _this.lastClickPos = {
                x: e.clientX,
                y: e.clientY
            };
            _this._navItemSource.emit('documentClick');
        });
    };
    return DwGlobalMonitorService;
}());
export { DwGlobalMonitorService };
function DwGlobalMonitorService_tsickle_Closure_declarations() {
    /** @type {?} */
    DwGlobalMonitorService.prototype.counter;
    /** @type {?} */
    DwGlobalMonitorService.prototype.lastClickPos;
    /** @type {?} */
    DwGlobalMonitorService.prototype._navItemSource;
}
export default new DwGlobalMonitorService();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZ2xvYmFsLW1vbml0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC9kdy1nbG9iYWwtbW9uaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFPN0MsSUFBQTtJQTRCRTt1QkEzQlUsQ0FBQzs0QkFDYztZQUN2QixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0w7OEJBRXNDLElBQUksWUFBWSxFQUFFO1FBc0J2RCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztLQUM3Qjs7OztJQXJCRCwrQ0FBYzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUN2Qjs7Ozs7SUFFRCwwREFBeUI7Ozs7SUFBekIsVUFBMEIsTUFBZTtRQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN2RDs7OztJQUVELHFEQUFvQjs7O0lBQXBCO1FBQUEsaUJBU0M7O1FBUEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLFlBQVksR0FBRztnQkFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPO2dCQUNaLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzthQUNiLENBQUM7WUFDRixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzQyxDQUFDLENBQUM7S0FDSjtpQ0FqQ0g7SUFzQ0MsQ0FBQTtBQS9CRCxrQ0ErQkM7Ozs7Ozs7OztBQUVELGVBQWUsSUFBSSxzQkFBc0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIER3R2xvYmFsTW9uaXRvclNlcnZpY2Uge1xuICBjb3VudGVyID0gMDtcbiAgbGFzdENsaWNrUG9zOiBQb3NpdGlvbiA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBfbmF2SXRlbVNvdXJjZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0R2xvYmFsQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKyt0aGlzLmNvdW50ZXI7XG4gIH1cblxuICBzZXREb2N1bWVudE92ZXJmbG93SGlkZGVuKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBzdGF0dXMgPyAnaGlkZGVuJyA6ICcnO1xuICB9XG5cbiAgX29ic2VydmVHbG9iYWxFdmVudHMoKTogdm9pZCB7XG4gICAgLy8g55uR5ZCsZG9jdW1lbnTnmoTngrnlh7vkuovku7bvvIzorrDlvZXngrnlh7vlnZDmoIfvvIzlubbmipvlh7ogZG9jdW1lbnRDbGljayDkuovku7ZcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmxhc3RDbGlja1BvcyA9IHtcbiAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICB5OiBlLmNsaWVudFlcbiAgICAgIH07XG4gICAgICB0aGlzLl9uYXZJdGVtU291cmNlLmVtaXQoJ2RvY3VtZW50Q2xpY2snKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX29ic2VydmVHbG9iYWxFdmVudHMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRHdHbG9iYWxNb25pdG9yU2VydmljZSgpO1xuIl19