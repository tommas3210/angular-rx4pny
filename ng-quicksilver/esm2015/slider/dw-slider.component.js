/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { Marks } from './dw-slider-marks.component';
import { DwSliderService } from './dw-slider.service';
export class SliderHandle {
}
function SliderHandle_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderHandle.prototype.offset;
    /** @type {?} */
    SliderHandle.prototype.value;
    /** @type {?} */
    SliderHandle.prototype.active;
}
/**
 * @record
 */
function MouseTouchObserverConfig() { }
function MouseTouchObserverConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    MouseTouchObserverConfig.prototype.start;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.move;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.end;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.pluckKey;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.filter;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.startPlucked$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.end$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.moveResolved$;
}
export class DwSliderComponent {
    /**
     * @param {?} utils
     */
    constructor(utils) {
        this.utils = utils;
        // Debugging
        this.dwDebugId = null;
        // Static configurations (properties that can only specify once)
        this.dwStep = 1;
        this.dwMarks = null;
        this.dwMin = 0;
        this.dwMax = 100;
        this.dwDefaultValue = null;
        this.dwOnAfterChange = new EventEmitter();
        this._disabled = false;
        this._dots = false;
        this._included = true;
        this._range = false;
        this._vertical = false;
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.prefixCls = 'ant-slider';
        this.activeValueIndex = null;
        this.track = { offset: null, length: null };
        this.bounds = { lower: null, upper: null };
        this.onTouched = () => {
        };
        this.isDragging = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwVertical(value) {
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwRange(value) {
        this._range = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwRange() {
        return this._range;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDots(value) {
        this._dots = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwDots() {
        return this._dots;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwIncluded() {
        return this._included;
    }
    /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    setValue(val, isWriteValue = false) {
        if (isWriteValue) { // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            this.value = this.formatValue(val);
            this.log(`[ngModel:setValue/writeValue]Update track & handles`);
            this.updateTrackAndHandles();
            // if (!this.isValueEqual(this.value, val)) {
            //   this.log(`[ngModel:setValue/writeValue]onValueChange`, val);
            //   if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
            //     this.onValueChange(this.value);
            //   }
            // }
        }
        else { // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            if (!this.isValueEqual(this.value, val)) {
                this.value = val;
                this.log(`[Normal:setValue]Update track & handles`);
                this.updateTrackAndHandles();
                this.log(`[Normal:setValue]onValueChange`, val);
                if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    this.onValueChange(this.value);
                }
            }
        }
    }
    /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    getValue(cloneAndSort = false) {
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.dwRange) { // clone & sort range values
            // clone & sort range values
            return this.utils.cloneArray(/** @type {?} */ (this.value)).sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    getValueToOffset(value) {
        /** @type {?} */
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.dwRange ?
            (/** @type {?} */ (normalizedValue)).map(val => this.valueToOffset(val)) :
            this.valueToOffset(/** @type {?} */ (normalizedValue));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.log(`[ngModel/writeValue]current writing value = `, val);
        this.setValue(val, true);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.dwDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // initial checking
        this.checkValidValue(this.dwDefaultValue); // check dwDefaultValue
        // default handles
        this.handles = this._generateHandles(this.dwRange ? 2 : 1);
        // initialize
        this.sliderDOM = this.slider.nativeElement;
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        } // init with default value
        this.marksArray = this.dwMarks === null ? null : this.toMarksArray(this.dwMarks);
        // event bindings
        this.createDrag();
        // initialize drag's disabled status
        this.toggleDragDisabled(this.dwDisabled);
        // the first time to init classes
        this.setClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { dwDisabled, dwMarks, dwRange } = changes;
        if (dwDisabled && !dwDisabled.firstChange) {
            this.toggleDragDisabled(dwDisabled.currentValue);
            this.setClassMap();
        }
        else if (dwMarks && !dwMarks.firstChange) {
            this.marksArray = this.dwMarks ? this.toMarksArray(this.dwMarks) : null;
        }
        else if (dwRange && !dwRange.firstChange) {
            this.setValue(this.formatValue(null)); // Change to default value when dwRange changed
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-disabled`]: this.dwDisabled,
            [`${this.prefixCls}-vertical`]: this.dwVertical,
            [`${this.prefixCls}-with-marks`]: this.marksArray ? this.marksArray.length : 0
        };
    }
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValueIndex(pointerValue) {
        if (this.dwRange) {
            /** @type {?} */
            let minimal = null;
            /** @type {?} */
            let gap;
            /** @type {?} */
            let activeIndex;
            // TODO: using type guard, remove type cast
            (/** @type {?} */ (this.getValue())).forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
        }
    }
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValue(pointerValue) {
        if (this.dwRange) {
            /** @type {?} */
            const newValue = this.utils.cloneArray(/** @type {?} */ (this.value));
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * @return {?}
     */
    updateTrackAndHandles() {
        /** @type {?} */
        const value = this.getValue();
        /** @type {?} */
        const offset = this.getValueToOffset(value);
        /** @type {?} */
        const valueSorted = this.getValue(true);
        /** @type {?} */
        const offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        const boundParts = this.dwRange ? /** @type {?} */ (valueSorted) : [0, valueSorted];
        /** @type {?} */
        const trackParts = this.dwRange ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = this.dwRange ? offset[index] : offset;
            handle.value = this.dwRange ? value[index] : value;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
    }
    /**
     * @param {?} marks
     * @return {?}
     */
    toMarksArray(marks) {
        /** @type {?} */
        const marksArray = [];
        for (const key in marks) {
            /** @type {?} */
            const mark = marks[key];
            /** @type {?} */
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.dwMin || val > this.dwMax) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDragStart(value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        this._showHandleTooltip(this.dwRange ? this.activeValueIndex : 0);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDragMove(value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    }
    /**
     * @return {?}
     */
    onDragEnd() {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.dwOnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    }
    /**
     * @return {?}
     */
    createDrag() {
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        /** @type {?} */
        const orientField = this.dwVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        const mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        const touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => !this.utils.isNotTouchEvent(/** @type {?} */ (e))
        };
        // make observables
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = (() => true) } = source;
            // start
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(this.utils.pauseEvent), pluck(...pluckKey), map((position) => this.findClosestValue(position)));
            // end
            source.end$ = fromEvent(document, end);
            // resolve move
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(this.utils.pauseEvent), pluck(...pluckKey), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = merge(mouse.end$, touch.end$);
    }
    /**
     * @param {?=} periods
     * @return {?}
     */
    subscribeDrag(periods = ['start', 'move', 'end']) {
        this.log('[subscribeDrag]this.dragstart$ = ', this.dragstart$);
        if (periods.indexOf('start') !== -1 && this.dragstart$ && !this.dragstart_) {
            this.dragstart_ = this.dragstart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragmove$ && !this.dragmove_) {
            this.dragmove_ = this.dragmove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragend$ && !this.dragend_) {
            this.dragend_ = this.dragend$.subscribe(this.onDragEnd.bind(this));
        }
    }
    /**
     * @param {?=} periods
     * @return {?}
     */
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        this.log('[unsubscribeDrag]this.dragstart_ = ', this.dragstart_);
        if (periods.indexOf('start') !== -1 && this.dragstart_) {
            this.dragstart_.unsubscribe();
            this.dragstart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragmove_) {
            this.dragmove_.unsubscribe();
            this.dragmove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragend_) {
            this.dragend_.unsubscribe();
            this.dragend_ = null;
        }
    }
    /**
     * @param {?} movable
     * @return {?}
     */
    toggleDragMoving(movable) {
        /** @type {?} */
        const periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    findClosestValue(position) {
        /** @type {?} */
        const sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        const sliderLength = this.getSliderLength();
        /** @type {?} */
        const ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        const val = (this.dwMax - this.dwMin) * (this.dwVertical ? 1 - ratio : ratio) + this.dwMin;
        /** @type {?} */
        const points = (this.dwMarks === null ? [] : Object.keys(this.dwMarks).map(parseFloat));
        // push closest step
        if (this.dwStep !== null && !this.dwDots) {
            /** @type {?} */
            const closestOne = Math.round(val / this.dwStep) * this.dwStep;
            points.push(closestOne);
        }
        /** @type {?} */
        const gaps = points.map(point => Math.abs(val - point));
        /** @type {?} */
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        // return the fixed
        return this.dwStep === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.dwStep)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    valueToOffset(value) {
        return this.utils.valueToOffset(this.dwMin, this.dwMax, value);
    }
    /**
     * @return {?}
     */
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        const offset = this.utils.getElementOffset(this.sliderDOM);
        return this.dwVertical ? offset.top : offset.left;
    }
    /**
     * @return {?}
     */
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        return this.dwVertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * @param {?=} remove
     * @return {?}
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        /** @type {?} */
        let res = value;
        if (!this.checkValidValue(value)) { // if empty, use default value
            // if empty, use default value
            res = this.dwDefaultValue === null ?
                (this.dwRange ? [this.dwMin, this.dwMax] : this.dwMin) : this.dwDefaultValue;
        }
        else { // format
            // format
            // TODO: using type guard, remove type cast
            res = this.dwRange ?
                (/** @type {?} */ (value)).map(val => this.utils.correctNumLimit(val, this.dwMin, this.dwMax)) :
                this.utils.correctNumLimit(/** @type {?} */ (value), this.dwMin, this.dwMax);
        }
        return res;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    checkValidValue(value) {
        /** @type {?} */
        const range = this.dwRange;
        if (value === null || value === undefined) {
            return false;
        }
        /** @type {?} */
        const isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            /** @type {?} */
            let parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) { // value type not match
            // value type not match
            throw new Error(`The "dwRange" can't match the "dwValue"'s type, please check these properties: "dwRange", "dwValue", "dwDefaultValue".`);
        }
        return true;
    }
    /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    isValueEqual(value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            /** @type {?} */
            const len = value.length;
            for (let i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    }
    /**
     * @param {...?} messages
     * @return {?}
     */
    log(...messages) {
        if (this.dwDebugId !== null) {
            /** @type {?} */
            const args = [`[dw-slider][#${this.dwDebugId}] `].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    }
    /**
     * @param {?=} handleIndex
     * @return {?}
     */
    _showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            this.handles[index].active = index === handleIndex;
        });
    }
    /**
     * @return {?}
     */
    _hideAllHandleTooltip() {
        this.handles.forEach(handle => handle.active = false);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    _generateHandles(amount) {
        /** @type {?} */
        const handles = [];
        for (let i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    }
}
DwSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-slider',
                preserveWhitespaces: false,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DwSliderComponent),
                        multi: true
                    }],
                template: "<div #slider [ngClass]=\"classMap\">\n  <div class=\"ant-slider-rail\"></div>\n  <dw-slider-track\n    dwClassName=\"{{prefixCls}}-track\"\n    [dwVertical]=\"dwVertical\"\n    [dwIncluded]=\"dwIncluded\"\n    [dwOffset]=\"track.offset\"\n    [dwLength]=\"track.length\"\n  ></dw-slider-track>\n  <dw-slider-step *ngIf=\"marksArray\"\n    dwPrefixCls=\"{{prefixCls}}\"\n    [dwVertical]=\"dwVertical\"\n    [dwLowerBound]=\"bounds.lower\"\n    [dwUpperBound]=\"bounds.upper\"\n    [dwMarksArray]=\"marksArray\"\n    [dwIncluded]=\"dwIncluded\"\n  ></dw-slider-step>\n  <dw-slider-handle\n    *ngFor=\"let handle of handles;\"\n    dwClassName=\"{{prefixCls}}-handle\"\n    [dwVertical]=\"dwVertical\"\n    [dwOffset]=\"handle.offset\"\n    [dwValue]=\"handle.value\"\n    [dwActive]=\"handle.active\"\n    [dwTipFormatter]=\"dwTipFormatter\"\n  ></dw-slider-handle>\n  <dw-slider-marks *ngIf=\"marksArray\"\n    dwClassName=\"{{prefixCls}}-mark\"\n    [dwVertical]=\"dwVertical\"\n    [dwMin]=\"dwMin\"\n    [dwMax]=\"dwMax\"\n    [dwLowerBound]=\"bounds.lower\"\n    [dwUpperBound]=\"bounds.upper\"\n    [dwMarksArray]=\"marksArray\"\n    [dwIncluded]=\"dwIncluded\"\n  ></dw-slider-marks>\n</div>"
            }] }
];
/** @nocollapse */
DwSliderComponent.ctorParameters = () => [
    { type: DwSliderService }
];
DwSliderComponent.propDecorators = {
    dwDebugId: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwStep: [{ type: Input }],
    dwMarks: [{ type: Input }],
    dwMin: [{ type: Input }],
    dwMax: [{ type: Input }],
    dwDefaultValue: [{ type: Input }],
    dwTipFormatter: [{ type: Input }],
    dwOnAfterChange: [{ type: Output }],
    dwVertical: [{ type: Input }],
    dwRange: [{ type: Input }],
    dwDots: [{ type: Input }],
    dwIncluded: [{ type: Input }],
    slider: [{ type: ViewChild, args: ['slider',] }]
};
function DwSliderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSliderComponent.prototype.dwDebugId;
    /** @type {?} */
    DwSliderComponent.prototype.dwStep;
    /** @type {?} */
    DwSliderComponent.prototype.dwMarks;
    /** @type {?} */
    DwSliderComponent.prototype.dwMin;
    /** @type {?} */
    DwSliderComponent.prototype.dwMax;
    /** @type {?} */
    DwSliderComponent.prototype.dwDefaultValue;
    /** @type {?} */
    DwSliderComponent.prototype.dwTipFormatter;
    /** @type {?} */
    DwSliderComponent.prototype.dwOnAfterChange;
    /** @type {?} */
    DwSliderComponent.prototype._disabled;
    /** @type {?} */
    DwSliderComponent.prototype._dots;
    /** @type {?} */
    DwSliderComponent.prototype._included;
    /** @type {?} */
    DwSliderComponent.prototype._range;
    /** @type {?} */
    DwSliderComponent.prototype._vertical;
    /** @type {?} */
    DwSliderComponent.prototype.value;
    /** @type {?} */
    DwSliderComponent.prototype.slider;
    /** @type {?} */
    DwSliderComponent.prototype.sliderDOM;
    /** @type {?} */
    DwSliderComponent.prototype.cacheSliderStart;
    /** @type {?} */
    DwSliderComponent.prototype.cacheSliderLength;
    /** @type {?} */
    DwSliderComponent.prototype.prefixCls;
    /** @type {?} */
    DwSliderComponent.prototype.classMap;
    /** @type {?} */
    DwSliderComponent.prototype.activeValueIndex;
    /** @type {?} */
    DwSliderComponent.prototype.track;
    /** @type {?} */
    DwSliderComponent.prototype.handles;
    /** @type {?} */
    DwSliderComponent.prototype.marksArray;
    /** @type {?} */
    DwSliderComponent.prototype.bounds;
    /** @type {?} */
    DwSliderComponent.prototype.onValueChange;
    /** @type {?} */
    DwSliderComponent.prototype.onTouched;
    /** @type {?} */
    DwSliderComponent.prototype.isDragging;
    /** @type {?} */
    DwSliderComponent.prototype.dragstart$;
    /** @type {?} */
    DwSliderComponent.prototype.dragmove$;
    /** @type {?} */
    DwSliderComponent.prototype.dragend$;
    /** @type {?} */
    DwSliderComponent.prototype.dragstart_;
    /** @type {?} */
    DwSliderComponent.prototype.dragmove_;
    /** @type {?} */
    DwSliderComponent.prototype.dragend_;
    /** @type {?} */
    DwSliderComponent.prototype.utils;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2xpZGVyL2R3LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXRELE1BQU07Q0FJTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCRCxNQUFNOzs7O0lBbUtKLFlBQW9CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCOzt5QkFoS0osSUFBSTs7c0JBYXhCLENBQUM7dUJBQ08sSUFBSTtxQkFDYixDQUFDO3FCQUNELEdBQUc7OEJBQ21CLElBQUk7K0JBRWYsSUFBSSxZQUFZLEVBQWU7eUJBdUN2QyxLQUFLO3FCQUNULEtBQUs7eUJBQ0QsSUFBSTtzQkFDUCxLQUFLO3lCQUNGLEtBQUs7cUJBRUosSUFBSTtnQ0FHRSxJQUFJO2lDQUNILElBQUk7eUJBQ3BCLFlBQVk7Z0NBRUcsSUFBSTtxQkFDdkIsRUFBRSxNQUFN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XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHBsdWNrLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBNYXJrcywgTWFya3NBcnJheSB9IGZyb20gJy4vZHctc2xpZGVyLW1hcmtzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1NsaWRlclNlcnZpY2UgfSBmcm9tICcuL2R3LXNsaWRlci5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgU2xpZGVyVmFsdWUgPSBudW1iZXJbXSB8IG51bWJlcjtcblxuZXhwb3J0IGNsYXNzIFNsaWRlckhhbmRsZSB7XG4gIG9mZnNldDogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcge1xuICBzdGFydDogc3RyaW5nO1xuICBtb3ZlOiBzdHJpbmc7XG4gIGVuZDogc3RyaW5nO1xuICBwbHVja0tleTogc3RyaW5nW107XG5cbiAgZmlsdGVyPyhlOiBFdmVudCk6IGJvb2xlYW47XG5cbiAgc3RhcnRQbHVja2VkJD86IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgZW5kJD86IE9ic2VydmFibGU8RXZlbnQ+O1xuICBtb3ZlUmVzb2x2ZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXNsaWRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIHtcbiAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdTbGlkZXJDb21wb25lbnQpLFxuICAgIG11bHRpICAgICAgOiB0cnVlXG4gIH0gXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc2xpZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1NsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvLyBEZWJ1Z2dpbmdcbiAgQElucHV0KCkgZHdEZWJ1Z0lkOiBudW1iZXIgfCBzdHJpbmcgPSBudWxsOyAvLyBzZXQgdGhpcyBpZCB3aWxsIHByaW50IGRlYnVnIGluZm9ybWF0aW9ucyB0byBjb25zb2xlXG5cbiAgLy8gRHluYW1pYyBwcm9wZXJ0eSBzZXR0aW5nc1xuICBASW5wdXQoKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIC8vIFN0YXRpYyBjb25maWd1cmF0aW9ucyAocHJvcGVydGllcyB0aGF0IGNhbiBvbmx5IHNwZWNpZnkgb25jZSlcbiAgQElucHV0KCkgZHdTdGVwID0gMTtcbiAgQElucHV0KCkgZHdNYXJrczogTWFya3MgPSBudWxsO1xuICBASW5wdXQoKSBkd01pbiA9IDA7XG4gIEBJbnB1dCgpIGR3TWF4ID0gMTAwO1xuICBASW5wdXQoKSBkd0RlZmF1bHRWYWx1ZTogU2xpZGVyVmFsdWUgPSBudWxsO1xuICBASW5wdXQoKSBkd1RpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcbiAgQE91dHB1dCgpIGR3T25BZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2xpZGVyVmFsdWU+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdSYW5nZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JhbmdlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1JhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yYW5nZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RvdHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kb3RzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0RvdHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RvdHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0luY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuXG4gIC8vIEluc2lkZSBwcm9wZXJ0aWVzXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2RvdHMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSB0cnVlO1xuICBwcml2YXRlIF9yYW5nZSA9IGZhbHNlO1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIHZhbHVlOiBTbGlkZXJWYWx1ZSA9IG51bGw7IC8vIENPUkUgdmFsdWUgc3RhdGVcbiAgQFZpZXdDaGlsZCgnc2xpZGVyJykgc2xpZGVyOiBFbGVtZW50UmVmO1xuICBzbGlkZXJET006IEhUTUxEaXZFbGVtZW50O1xuICBjYWNoZVNsaWRlclN0YXJ0OiBudW1iZXIgPSBudWxsO1xuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyID0gbnVsbDtcbiAgcHJlZml4Q2xzID0gJ2FudC1zbGlkZXInO1xuICBjbGFzc01hcDogb2JqZWN0O1xuICBhY3RpdmVWYWx1ZUluZGV4OiBudW1iZXIgPSBudWxsOyAvLyBDdXJyZW50IGFjdGl2YXRlZCBoYW5kbGUncyBpbmRleCBPTkxZIGZvciByYW5nZT10cnVlXG4gIHRyYWNrID0geyBvZmZzZXQ6IG51bGwsIGxlbmd0aDogbnVsbCB9OyAvLyBUcmFjaydzIG9mZnNldCBhbmQgbGVuZ3RoXG4gIGhhbmRsZXM6IFNsaWRlckhhbmRsZVtdOyAvLyBIYW5kbGVzJyBvZmZzZXRcbiAgbWFya3NBcnJheTogTWFya3NbXTsgLy8gXCJtYXJrc1wiIGluIGFycmF5IHR5cGUgd2l0aCBtb3JlIGRhdGEgJiBGSUxURVIgb3V0IHRoZSBpbnZhbGlkIG1hcmtcbiAgYm91bmRzID0geyBsb3dlcjogbnVsbCwgdXBwZXI6IG51bGwgfTsgLy8gbm93IGZvciBkdy1zbGlkZXItc3RlcFxuICBvblZhbHVlQ2hhbmdlOiAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkOyAvLyBVc2VkIGJ5IG5nTW9kZWwuIEJVRzogb25WYWx1ZUNoYW5nZSgpIHdpbGwgbm90IHN1Y2Nlc3MgdG8gZWZmZWN0IHRoZSBcInZhbHVlXCIgdmFyaWFibGUgKCBbKG5nTW9kZWwpXT1cInZhbHVlXCIgKSB3aGVuIHRoZSBmaXJzdCBpbml0aWFsaXppbmcsIGV4Y2VwdCB1c2luZyBcIm5leHRUaWNrXCIgZnVuY3Rpb25hbGl0eSAoTUFZIGFuZ3VsYXIyJ3MgcHJvYmxlbSA/KVxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG4gIH0gLy8gb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgaXNEcmFnZ2luZyA9IGZhbHNlOyAvLyBDdXJyZW50IGRyYWdnaW5nIHN0YXRlXG5cbiAgLy8gRXZlbnRzIG9ic2VydmFibGVzICYgc3Vic2NyaXB0aW9uc1xuICBkcmFnc3RhcnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIGRyYWdtb3ZlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBkcmFnZW5kJDogT2JzZXJ2YWJsZTxFdmVudD47XG4gIGRyYWdzdGFydF86IFN1YnNjcmlwdGlvbjtcbiAgZHJhZ21vdmVfOiBTdWJzY3JpcHRpb247XG4gIGRyYWdlbmRfOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgdmFsdWUgYWNjZXNzb3JzICYgbmdNb2RlbCBhY2Nlc3NvcnNcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc2V0VmFsdWUodmFsOiBTbGlkZXJWYWx1ZSwgaXNXcml0ZVZhbHVlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaXNXcml0ZVZhbHVlKSB7IC8vIFtuZ01vZGVsLXdyaXRlVmFsdWVdOiBGb3JtYXR0aW5nIGJlZm9yZSBzZXR0aW5nIHZhbHVlLCBhbHdheXMgdXBkYXRlIGN1cnJlbnQgdmFsdWUsIGJ1dCB0cmlnZ2VyIG9uVmFsdWVDaGFuZ2UgT05MWSB3aGVuIHRoZSBcImZvcm1hdHRlZCB2YWx1ZVwiIG5vdCBlcXVhbHMgXCJpbnB1dCB2YWx1ZVwiXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWwpO1xuICAgICAgdGhpcy5sb2coYFtuZ01vZGVsOnNldFZhbHVlL3dyaXRlVmFsdWVdVXBkYXRlIHRyYWNrICYgaGFuZGxlc2ApO1xuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcbiAgICAgIC8vIGlmICghdGhpcy5pc1ZhbHVlRXF1YWwodGhpcy52YWx1ZSwgdmFsKSkge1xuICAgICAgLy8gICB0aGlzLmxvZyhgW25nTW9kZWw6c2V0VmFsdWUvd3JpdGVWYWx1ZV1vblZhbHVlQ2hhbmdlYCwgdmFsKTtcbiAgICAgIC8vICAgaWYgKHRoaXMub25WYWx1ZUNoYW5nZSkgeyAvLyBOT1RFOiBvblZhbHVlQ2hhbmdlIHdpbGwgYmUgdW5hdmFpbGFibGUgd2hlbiB3cml0ZVZhbHVlKCkgY2FsbGVkIGF0IHRoZSBmaXJzdCB0aW1lXG4gICAgICAvLyAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfSBlbHNlIHsgLy8gW05vcm1hbF06IHNldHRpbmcgdmFsdWUsIE9OTFkgY2hlY2sgY2hhbmdlZCwgdGhlbiB1cGRhdGUgYW5kIHRyaWdnZXIgb25WYWx1ZUNoYW5nZVxuICAgICAgaWYgKCF0aGlzLmlzVmFsdWVFcXVhbCh0aGlzLnZhbHVlLCB2YWwpKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMubG9nKGBbTm9ybWFsOnNldFZhbHVlXVVwZGF0ZSB0cmFjayAmIGhhbmRsZXNgKTtcbiAgICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcbiAgICAgICAgdGhpcy5sb2coYFtOb3JtYWw6c2V0VmFsdWVdb25WYWx1ZUNoYW5nZWAsIHZhbCk7XG4gICAgICAgIGlmICh0aGlzLm9uVmFsdWVDaGFuZ2UpIHsgLy8gTk9URTogb25WYWx1ZUNoYW5nZSB3aWxsIGJlIHVuYXZhaWxhYmxlIHdoZW4gd3JpdGVWYWx1ZSgpIGNhbGxlZCBhdCB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlKGNsb25lQW5kU29ydDogYm9vbGVhbiA9IGZhbHNlKTogU2xpZGVyVmFsdWUge1xuICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICBpZiAoY2xvbmVBbmRTb3J0ICYmIHRoaXMuZHdSYW5nZSkgeyAvLyBjbG9uZSAmIHNvcnQgcmFuZ2UgdmFsdWVzXG4gICAgICByZXR1cm4gdGhpcy51dGlscy5jbG9uZUFycmF5KHRoaXMudmFsdWUgYXMgbnVtYmVyW10pLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyBjbG9uZSAmIHNvcnQgY3VycmVudCB2YWx1ZSBhbmQgY29udmVydCB0aGVtIHRvIG9mZnNldHMsIHRoZW4gcmV0dXJuIHRoZSBuZXcgb25lXG4gIGdldFZhbHVlVG9PZmZzZXQodmFsdWU/OiBTbGlkZXJWYWx1ZSk6IFNsaWRlclZhbHVlIHtcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBub3JtYWxpemVkVmFsdWUgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xuICAgIH1cbiAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XG4gICAgcmV0dXJuIHRoaXMuZHdSYW5nZSA/XG4gICAgICAobm9ybWFsaXplZFZhbHVlIGFzIG51bWJlcltdKS5tYXAodmFsID0+IHRoaXMudmFsdWVUb09mZnNldCh2YWwpKSA6XG4gICAgICB0aGlzLnZhbHVlVG9PZmZzZXQobm9ybWFsaXplZFZhbHVlIGFzIG51bWJlcik7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbDogU2xpZGVyVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmxvZyhgW25nTW9kZWwvd3JpdGVWYWx1ZV1jdXJyZW50IHdyaXRpbmcgdmFsdWUgPSBgLCB2YWwpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogU2xpZGVyVmFsdWUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHdEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQoaXNEaXNhYmxlZCk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgTGlmZWN5Y2xlIGhvb2tzXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXRpbHM6IER3U2xpZGVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZSBldmVudCBiaW5kaW5nLCBjbGFzcyBpbml0LCBldGMuIChjYWxsZWQgb25seSBvbmNlKVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBpbml0aWFsIGNoZWNraW5nXG4gICAgdGhpcy5jaGVja1ZhbGlkVmFsdWUodGhpcy5kd0RlZmF1bHRWYWx1ZSk7IC8vIGNoZWNrIGR3RGVmYXVsdFZhbHVlXG4gICAgLy8gZGVmYXVsdCBoYW5kbGVzXG4gICAgdGhpcy5oYW5kbGVzID0gdGhpcy5fZ2VuZXJhdGVIYW5kbGVzKHRoaXMuZHdSYW5nZSA/IDIgOiAxKTtcbiAgICAvLyBpbml0aWFsaXplXG4gICAgdGhpcy5zbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmdldFZhbHVlKCkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7XG4gICAgfSAvLyBpbml0IHdpdGggZGVmYXVsdCB2YWx1ZVxuICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMuZHdNYXJrcyA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLnRvTWFya3NBcnJheSh0aGlzLmR3TWFya3MpO1xuICAgIC8vIGV2ZW50IGJpbmRpbmdzXG4gICAgdGhpcy5jcmVhdGVEcmFnKCk7XG4gICAgLy8gaW5pdGlhbGl6ZSBkcmFnJ3MgZGlzYWJsZWQgc3RhdHVzXG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQodGhpcy5kd0Rpc2FibGVkKTtcbiAgICAvLyB0aGUgZmlyc3QgdGltZSB0byBpbml0IGNsYXNzZXNcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBkd0Rpc2FibGVkLCBkd01hcmtzLCBkd1JhbmdlIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChkd0Rpc2FibGVkICYmICFkd0Rpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChkd0Rpc2FibGVkLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfSBlbHNlIGlmIChkd01hcmtzICYmICFkd01hcmtzLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLmR3TWFya3MgPyB0aGlzLnRvTWFya3NBcnJheSh0aGlzLmR3TWFya3MpIDogbnVsbDtcbiAgICB9IGVsc2UgaWYgKGR3UmFuZ2UgJiYgIWR3UmFuZ2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7IC8vIENoYW5nZSB0byBkZWZhdWx0IHZhbHVlIHdoZW4gZHdSYW5nZSBjaGFuZ2VkXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgfVxuXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IEJhc2ljIGZsb3cgZnVuY3Rpb25zXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgIF0gIDogdGhpcy5kd0Rpc2FibGVkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tdmVydGljYWxgIF0gIDogdGhpcy5kd1ZlcnRpY2FsLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30td2l0aC1tYXJrc2AgXTogdGhpcy5tYXJrc0FycmF5ID8gdGhpcy5tYXJrc0FycmF5Lmxlbmd0aCA6IDBcbiAgICB9O1xuICB9XG5cbiAgLy8gZmluZCB0aGUgY2xvZXN0IHZhbHVlIHRvIGJlIGFjdGl2YXRlZCAob25seSBmb3IgcmFuZ2UgPSB0cnVlKVxuICBzZXRBY3RpdmVWYWx1ZUluZGV4KHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdSYW5nZSkge1xuICAgICAgbGV0IG1pbmltYWwgPSBudWxsO1xuICAgICAgbGV0IGdhcDtcbiAgICAgIGxldCBhY3RpdmVJbmRleDtcbiAgICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICAgICh0aGlzLmdldFZhbHVlKCkgYXMgbnVtYmVyW10pLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZ2FwID0gTWF0aC5hYnMocG9pbnRlclZhbHVlIC0gdmFsKTtcbiAgICAgICAgaWYgKG1pbmltYWwgPT09IG51bGwgfHwgZ2FwIDwgbWluaW1hbCkge1xuICAgICAgICAgIG1pbmltYWwgPSBnYXA7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmVWYWx1ZShwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3UmFuZ2UpIHtcbiAgICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy51dGlscy5jbG9uZUFycmF5KHRoaXMudmFsdWUgYXMgbnVtYmVyW10pO1xuICAgICAgbmV3VmFsdWVbIHRoaXMuYWN0aXZlVmFsdWVJbmRleCBdID0gcG9pbnRlclZhbHVlO1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocG9pbnRlclZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUcmFja0FuZEhhbmRsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlKTtcbiAgICBjb25zdCB2YWx1ZVNvcnRlZCA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XG4gICAgY29uc3Qgb2Zmc2V0U29ydGVkID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlU29ydGVkKTtcbiAgICBjb25zdCBib3VuZFBhcnRzID0gdGhpcy5kd1JhbmdlID8gdmFsdWVTb3J0ZWQgYXMgbnVtYmVyW10gOiBbIDAsIHZhbHVlU29ydGVkIF07XG4gICAgY29uc3QgdHJhY2tQYXJ0cyA9IHRoaXMuZHdSYW5nZSA/IFsgb2Zmc2V0U29ydGVkWyAwIF0sIG9mZnNldFNvcnRlZFsgMSBdIC0gb2Zmc2V0U29ydGVkWyAwIF0gXSA6IFsgMCwgb2Zmc2V0U29ydGVkIF07XG5cbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgaGFuZGxlLm9mZnNldCA9IHRoaXMuZHdSYW5nZSA/IG9mZnNldFsgaW5kZXggXSA6IG9mZnNldDtcbiAgICAgIGhhbmRsZS52YWx1ZSA9IHRoaXMuZHdSYW5nZSA/IHZhbHVlWyBpbmRleCBdIDogdmFsdWU7XG4gICAgfSk7XG4gICAgWyB0aGlzLmJvdW5kcy5sb3dlciwgdGhpcy5ib3VuZHMudXBwZXIgXSA9IGJvdW5kUGFydHM7XG4gICAgWyB0aGlzLnRyYWNrLm9mZnNldCwgdGhpcy50cmFjay5sZW5ndGggXSA9IHRyYWNrUGFydHM7XG4gIH1cblxuICB0b01hcmtzQXJyYXkobWFya3M6IE1hcmtzKTogTWFya3NbXSB7XG4gICAgY29uc3QgbWFya3NBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1hcmtzKSB7XG4gICAgICBjb25zdCBtYXJrID0gbWFya3NbIGtleSBdO1xuICAgICAgY29uc3QgdmFsID0gdHlwZW9mIGtleSA9PT0gJ251bWJlcicgPyBrZXkgOiBwYXJzZUZsb2F0KGtleSk7XG4gICAgICBpZiAodmFsIDwgdGhpcy5kd01pbiB8fCB2YWwgPiB0aGlzLmR3TWF4KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbWFya3NBcnJheS5wdXNoKHsgdmFsdWU6IHZhbCwgb2Zmc2V0OiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSwgY29uZmlnOiBtYXJrIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFya3NBcnJheTtcbiAgfVxuXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IEV2ZW50IGxpc3RlbmVycyAmIGJpbmRpbmdzXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIG9uRHJhZ1N0YXJ0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW29uRHJhZ1N0YXJ0XWRyYWdnaW5nIHZhbHVlID0gJywgdmFsdWUpO1xuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyh0cnVlKTtcbiAgICAvLyBjYWNoZSBET00gbGF5b3V0L3JlZmxvdyBvcGVyYXRpb25zXG4gICAgdGhpcy5jYWNoZVNsaWRlclByb3BlcnR5KCk7XG4gICAgLy8gdHJpZ2dlciBkcmFnIHN0YXJ0XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZUluZGV4KHZhbHVlKTtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBUb29sdGlwIHZpc2liaWxpdHkgb2YgaGFuZGxlc1xuICAgIHRoaXMuX3Nob3dIYW5kbGVUb29sdGlwKHRoaXMuZHdSYW5nZSA/IHRoaXMuYWN0aXZlVmFsdWVJbmRleCA6IDApO1xuICB9XG5cbiAgb25EcmFnTW92ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ1tvbkRyYWdNb3ZlXWRyYWdnaW5nIHZhbHVlID0gJywgdmFsdWUpO1xuICAgIC8vIHRyaWdnZXIgZHJhZyBtb3ZpbmdcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIG9uRHJhZ0VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW29uRHJhZ0VuZF0nKTtcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcoZmFsc2UpO1xuICAgIHRoaXMuZHdPbkFmdGVyQ2hhbmdlLmVtaXQodGhpcy5nZXRWYWx1ZSh0cnVlKSk7XG4gICAgLy8gcmVtb3ZlIGNhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnNcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkodHJ1ZSk7XG4gICAgLy8gSGlkZSBhbGwgdG9vbHRpcFxuICAgIHRoaXMuX2hpZGVBbGxIYW5kbGVUb29sdGlwKCk7XG4gIH1cblxuICBjcmVhdGVEcmFnKCk6IHZvaWQge1xuICAgIGNvbnN0IHNsaWRlckRPTSA9IHRoaXMuc2xpZGVyRE9NO1xuICAgIGNvbnN0IG9yaWVudEZpZWxkID0gdGhpcy5kd1ZlcnRpY2FsID8gJ3BhZ2VZJyA6ICdwYWdlWCc7XG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0ICAgOiAnbW91c2Vkb3duJywgbW92ZTogJ21vdXNlbW92ZScsIGVuZDogJ21vdXNldXAnLFxuICAgICAgcGx1Y2tLZXk6IFsgb3JpZW50RmllbGQgXVxuICAgIH07XG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0ICAgOiAndG91Y2hzdGFydCcsIG1vdmU6ICd0b3VjaG1vdmUnLCBlbmQ6ICd0b3VjaGVuZCcsXG4gICAgICBwbHVja0tleTogWyAndG91Y2hlcycsICcwJywgb3JpZW50RmllbGQgXSxcbiAgICAgIGZpbHRlciAgOiAoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+ICF0aGlzLnV0aWxzLmlzTm90VG91Y2hFdmVudChlIGFzIFRvdWNoRXZlbnQpXG4gICAgfTtcbiAgICAvLyBtYWtlIG9ic2VydmFibGVzXG4gICAgWyBtb3VzZSwgdG91Y2ggXS5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKCkgPT4gdHJ1ZSkgfSA9IHNvdXJjZTtcbiAgICAgIC8vIHN0YXJ0XG4gICAgICBzb3VyY2Uuc3RhcnRQbHVja2VkJCA9IGZyb21FdmVudChzbGlkZXJET00sIHN0YXJ0KS5waXBlKFxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXG4gICAgICAgIHRhcCh0aGlzLnV0aWxzLnBhdXNlRXZlbnQpLFxuICAgICAgICBwbHVjayguLi5wbHVja0tleSksXG4gICAgICAgIG1hcCgocG9zaXRpb246IG51bWJlcikgPT4gdGhpcy5maW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uKSlcbiAgICAgICk7XG4gICAgICAvLyBlbmRcbiAgICAgIHNvdXJjZS5lbmQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBlbmQpO1xuICAgICAgLy8gcmVzb2x2ZSBtb3ZlXG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxuICAgICAgICB0YXAodGhpcy51dGlscy5wYXVzZUV2ZW50KSxcbiAgICAgICAgcGx1Y2soLi4ucGx1Y2tLZXkpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwoc291cmNlLmVuZCQpXG4gICAgICApO1xuICAgICAgLy8gbWVyZ2UgdG8gYmVjb21lIG1vdmluZ1xuICAgICAgLy8gc291cmNlLm1vdmUkID0gc291cmNlLnN0YXJ0UGx1Y2tlZCQubWVyZ2VNYXBUbyhzb3VyY2UubW92ZVJlc29sdmVkJCk7XG4gICAgfSk7XG4gICAgLy8gbWVyZ2UgbW91c2UgYW5kIHRvdWNoIG9ic2VydmFibGVzXG4gICAgdGhpcy5kcmFnc3RhcnQkID0gbWVyZ2UobW91c2Uuc3RhcnRQbHVja2VkJCwgdG91Y2guc3RhcnRQbHVja2VkJCk7XG4gICAgLy8gdGhpcy5kcmFnbW92ZSQgPSBPYnNlcnZhYmxlLm1lcmdlKG1vdXNlLm1vdmUkLCB0b3VjaC5tb3ZlJCk7XG4gICAgdGhpcy5kcmFnbW92ZSQgPSBtZXJnZShtb3VzZS5tb3ZlUmVzb2x2ZWQkLCB0b3VjaC5tb3ZlUmVzb2x2ZWQkKTtcbiAgICB0aGlzLmRyYWdlbmQkID0gbWVyZ2UobW91c2UuZW5kJCwgdG91Y2guZW5kJCk7XG4gIH1cblxuICBzdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWyAnc3RhcnQnLCAnbW92ZScsICdlbmQnIF0pOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW3N1YnNjcmliZURyYWdddGhpcy5kcmFnc3RhcnQkID0gJywgdGhpcy5kcmFnc3RhcnQkKTtcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdzdGFydCQgJiYgIXRoaXMuZHJhZ3N0YXJ0Xykge1xuICAgICAgdGhpcy5kcmFnc3RhcnRfID0gdGhpcy5kcmFnc3RhcnQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnbW92ZSQgJiYgIXRoaXMuZHJhZ21vdmVfKSB7XG4gICAgICB0aGlzLmRyYWdtb3ZlXyA9IHRoaXMuZHJhZ21vdmUkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ2VuZCQgJiYgIXRoaXMuZHJhZ2VuZF8pIHtcbiAgICAgIHRoaXMuZHJhZ2VuZF8gPSB0aGlzLmRyYWdlbmQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZURyYWcocGVyaW9kczogc3RyaW5nW10gPSBbICdzdGFydCcsICdtb3ZlJywgJ2VuZCcgXSk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbdW5zdWJzY3JpYmVEcmFnXXRoaXMuZHJhZ3N0YXJ0XyA9ICcsIHRoaXMuZHJhZ3N0YXJ0Xyk7XG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnc3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdzdGFydF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0XyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdtb3ZlXykge1xuICAgICAgdGhpcy5kcmFnbW92ZV8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ21vdmVfID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnZW5kXykge1xuICAgICAgdGhpcy5kcmFnZW5kXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnZW5kXyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJhZ01vdmluZyhtb3ZhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgcGVyaW9kcyA9IFsgJ21vdmUnLCAnZW5kJyBdO1xuICAgIGlmIChtb3ZhYmxlKSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyYWdEaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKFsgJ3N0YXJ0JyBdKTtcbiAgICB9XG4gIH1cblxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBVdGlsIGZ1bmN0aW9ucyAodG9vbHMpXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGZpbmQgdGhlIGNsb3Nlc3QgdmFsdWUgZGVwZW5kIG9uIHBvaW50ZXIncyBwb3NpdGlvblxuICBmaW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNsaWRlclN0YXJ0ID0gdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2xpZGVyTGVuZ3RoID0gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgICBjb25zdCByYXRpbyA9IHRoaXMudXRpbHMuY29ycmVjdE51bUxpbWl0KChwb3NpdGlvbiAtIHNsaWRlclN0YXJ0KSAvIHNsaWRlckxlbmd0aCwgMCwgMSk7XG4gICAgY29uc3QgdmFsID0gKHRoaXMuZHdNYXggLSB0aGlzLmR3TWluKSAqICh0aGlzLmR3VmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLmR3TWluO1xuICAgIGNvbnN0IHBvaW50cyA9ICh0aGlzLmR3TWFya3MgPT09IG51bGwgPyBbXSA6IE9iamVjdC5rZXlzKHRoaXMuZHdNYXJrcykubWFwKHBhcnNlRmxvYXQpKTtcbiAgICAvLyBwdXNoIGNsb3Nlc3Qgc3RlcFxuICAgIGlmICh0aGlzLmR3U3RlcCAhPT0gbnVsbCAmJiAhdGhpcy5kd0RvdHMpIHtcbiAgICAgIGNvbnN0IGNsb3Nlc3RPbmUgPSBNYXRoLnJvdW5kKHZhbCAvIHRoaXMuZHdTdGVwKSAqIHRoaXMuZHdTdGVwO1xuICAgICAgcG9pbnRzLnB1c2goY2xvc2VzdE9uZSk7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZSBnYXBzXG4gICAgY29uc3QgZ2FwcyA9IHBvaW50cy5tYXAocG9pbnQgPT4gTWF0aC5hYnModmFsIC0gcG9pbnQpKTtcbiAgICBjb25zdCBjbG9zZXN0ID0gcG9pbnRzWyBnYXBzLmluZGV4T2YoTWF0aC5taW4oLi4uZ2FwcykpIF07XG4gICAgLy8gcmV0dXJuIHRoZSBmaXhlZFxuICAgIHJldHVybiB0aGlzLmR3U3RlcCA9PT0gbnVsbCA/IGNsb3Nlc3QgOlxuICAgICAgcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQodGhpcy51dGlscy5nZXRQcmVjaXNpb24odGhpcy5kd1N0ZXApKSk7XG4gIH1cblxuICB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnV0aWxzLnZhbHVlVG9PZmZzZXQodGhpcy5kd01pbiwgdGhpcy5kd01heCwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyU3RhcnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMudXRpbHMuZ2V0RWxlbWVudE9mZnNldCh0aGlzLnNsaWRlckRPTSk7XG4gICAgcmV0dXJuIHRoaXMuZHdWZXJ0aWNhbCA/IG9mZnNldC50b3AgOiBvZmZzZXQubGVmdDtcbiAgfVxuXG4gIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVNsaWRlckxlbmd0aDtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XG4gICAgcmV0dXJuIHRoaXMuZHdWZXJ0aWNhbCA/XG4gICAgICBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgLy8gY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9ucyBmb3IgcGVyZm9ybWFuY2UgKG1heSBub3QgbmVjZXNzYXJ5PylcbiAgY2FjaGVTbGlkZXJQcm9wZXJ0eShyZW1vdmU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVTbGlkZXJTdGFydCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcbiAgICB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7IC8vIE5PVEU6IHdpbGwgcmV0dXJuIG5ldyB2YWx1ZVxuICAgIGxldCByZXMgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuY2hlY2tWYWxpZFZhbHVlKHZhbHVlKSkgeyAvLyBpZiBlbXB0eSwgdXNlIGRlZmF1bHQgdmFsdWVcbiAgICAgIHJlcyA9IHRoaXMuZHdEZWZhdWx0VmFsdWUgPT09IG51bGwgP1xuICAgICAgICAodGhpcy5kd1JhbmdlID8gWyB0aGlzLmR3TWluLCB0aGlzLmR3TWF4IF0gOiB0aGlzLmR3TWluKSA6IHRoaXMuZHdEZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIHsgLy8gZm9ybWF0XG4gICAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XG4gICAgICByZXMgPSB0aGlzLmR3UmFuZ2UgP1xuICAgICAgICAodmFsdWUgYXMgbnVtYmVyW10pLm1hcCh2YWwgPT4gdGhpcy51dGlscy5jb3JyZWN0TnVtTGltaXQodmFsLCB0aGlzLmR3TWluLCB0aGlzLmR3TWF4KSkgOlxuICAgICAgICB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCh2YWx1ZSBhcyBudW1iZXIsIHRoaXMuZHdNaW4sIHRoaXMuZHdNYXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgdmFsaWQgYW5kIHRocm93IGVycm9yIGlmIHZhbHVlLXR5cGUvcmFuZ2Ugbm90IG1hdGNoXG4gIGNoZWNrVmFsaWRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuZHdSYW5nZTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gaXQncyBhbiBpbnZhbGlkIHZhbHVlLCBqdXN0IHJldHVyblxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBsZXQgcGFyc2VkVmFsdWU6IG51bWJlciA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc05hTihwYXJzZWRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvLyBpdCdzIGFuIGludmFsaWQgdmFsdWUsIGp1c3QgcmV0dXJuXG4gICAgfVxuICAgIGlmIChpc0FycmF5ICE9PSAhIXJhbmdlKSB7IC8vIHZhbHVlIHR5cGUgbm90IG1hdGNoXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImR3UmFuZ2VcIiBjYW4ndCBtYXRjaCB0aGUgXCJkd1ZhbHVlXCIncyB0eXBlLCBwbGVhc2UgY2hlY2sgdGhlc2UgcHJvcGVydGllczogXCJkd1JhbmdlXCIsIFwiZHdWYWx1ZVwiLCBcImR3RGVmYXVsdFZhbHVlXCIuYCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNWYWx1ZUVxdWFsKHZhbHVlOiBTbGlkZXJWYWx1ZSwgdmFsOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IHR5cGVvZiB2YWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjb25zdCBsZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICh2YWx1ZVsgaSBdICE9PSB2YWxbIGkgXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByaW50IGRlYnVnIGluZm9cbiAgLy8gVE9ETzogc2hvdWxkIG5vdCBrZXB0IGluIGNvbXBvbmVudFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGxvZyguLi5tZXNzYWdlczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0RlYnVnSWQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbIGBbZHctc2xpZGVyXVsjJHt0aGlzLmR3RGVidWdJZH1dIGAgXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvLyBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycydcbiAgcHJpdmF0ZSBfc2hvd0hhbmRsZVRvb2x0aXAoaGFuZGxlSW5kZXg6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVzWyBpbmRleCBdLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGVBbGxIYW5kbGVUb29sdGlwKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGhhbmRsZSA9PiBoYW5kbGUuYWN0aXZlID0gZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVIYW5kbGVzKGFtb3VudDogbnVtYmVyKTogU2xpZGVySGFuZGxlW10ge1xuICAgIGNvbnN0IGhhbmRsZXM6IFNsaWRlckhhbmRsZVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgICAgaGFuZGxlcy5wdXNoKHsgb2Zmc2V0OiBudWxsLCB2YWx1ZTogbnVsbCwgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZXM7XG4gIH1cblxufVxuIl19