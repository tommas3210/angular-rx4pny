/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { Marks } from './dw-slider-marks.component';
import { DwSliderService } from './dw-slider.service';
var SliderHandle = /** @class */ (function () {
    function SliderHandle() {
    }
    return SliderHandle;
}());
export { SliderHandle };
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
var DwSliderComponent = /** @class */ (function () {
    // |--------------------------------------------------------------------------------------------
    // | Lifecycle hooks
    // |--------------------------------------------------------------------------------------------
    function DwSliderComponent(utils) {
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
        this.onTouched = function () {
        } // onTouch function registered via registerOnTouch (ControlValueAccessor).
        ;
        this.isDragging = false;
    }
    Object.defineProperty(DwSliderComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        // Dynamic property settings
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSliderComponent.prototype, "dwVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSliderComponent.prototype, "dwRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._range;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._range = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSliderComponent.prototype, "dwDots", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dots;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dots = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSliderComponent.prototype, "dwIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    // |--------------------------------------------------------------------------------------------
    // | value accessors & ngModel accessors
    // |--------------------------------------------------------------------------------------------
    /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    DwSliderComponent.prototype.setValue = /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    function (val, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) { // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            this.value = this.formatValue(val);
            this.log("[ngModel:setValue/writeValue]Update track & handles");
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
                this.log("[Normal:setValue]Update track & handles");
                this.updateTrackAndHandles();
                this.log("[Normal:setValue]onValueChange", val);
                if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    this.onValueChange(this.value);
                }
            }
        }
    };
    /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    DwSliderComponent.prototype.getValue = /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.dwRange) { // clone & sort range values
            // clone & sort range values
            return this.utils.cloneArray(/** @type {?} */ (this.value)).sort(function (a, b) { return a - b; });
        }
        return this.value;
    };
    // clone & sort current value and convert them to offsets, then return the new one
    /**
     * @param {?=} value
     * @return {?}
     */
    DwSliderComponent.prototype.getValueToOffset = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.dwRange ?
            (/** @type {?} */ (normalizedValue)).map(function (val) { return _this.valueToOffset(val); }) :
            this.valueToOffset(/** @type {?} */ (normalizedValue));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DwSliderComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.log("[ngModel/writeValue]current writing value = ", val);
        this.setValue(val, true);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValueChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwSliderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DwSliderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.dwDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    };
    // initialize event binding, class init, etc. (called only once)
    /**
     * @return {?}
     */
    DwSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwSliderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var dwDisabled = changes.dwDisabled, dwMarks = changes.dwMarks, dwRange = changes.dwRange;
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
    };
    /**
     * @return {?}
     */
    DwSliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeDrag();
    };
    // |--------------------------------------------------------------------------------------------
    // | Basic flow functions
    // |--------------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    DwSliderComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-disabled"] = this.dwDisabled,
            _a[this.prefixCls + "-vertical"] = this.dwVertical,
            _a[this.prefixCls + "-with-marks"] = this.marksArray ? this.marksArray.length : 0,
            _a);
    };
    // find the cloest value to be activated (only for range = true)
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    DwSliderComponent.prototype.setActiveValueIndex = /**
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (this.dwRange) {
            /** @type {?} */
            var minimal_1 = null;
            /** @type {?} */
            var gap_1 = void 0;
            /** @type {?} */
            var activeIndex_1 = void 0;
            // TODO: using type guard, remove type cast
            (/** @type {?} */ (this.getValue())).forEach(function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < minimal_1) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            });
            this.activeValueIndex = activeIndex_1;
        }
    };
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    DwSliderComponent.prototype.setActiveValue = /**
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (this.dwRange) {
            /** @type {?} */
            var newValue = this.utils.cloneArray(/** @type {?} */ (this.value));
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    /**
     * @return {?}
     */
    DwSliderComponent.prototype.updateTrackAndHandles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a, _b;
        /** @type {?} */
        var value = this.getValue();
        /** @type {?} */
        var offset = this.getValueToOffset(value);
        /** @type {?} */
        var valueSorted = this.getValue(true);
        /** @type {?} */
        var offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        var boundParts = this.dwRange ? /** @type {?} */ (valueSorted) : [0, valueSorted];
        /** @type {?} */
        var trackParts = this.dwRange ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach(function (handle, index) {
            handle.offset = _this.dwRange ? offset[index] : offset;
            handle.value = _this.dwRange ? value[index] : value;
        });
        _a = tslib_1.__read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
        _b = tslib_1.__read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
    };
    /**
     * @param {?} marks
     * @return {?}
     */
    DwSliderComponent.prototype.toMarksArray = /**
     * @param {?} marks
     * @return {?}
     */
    function (marks) {
        /** @type {?} */
        var marksArray = [];
        for (var key in marks) {
            /** @type {?} */
            var mark = marks[key];
            /** @type {?} */
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.dwMin || val > this.dwMax) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    };
    // |--------------------------------------------------------------------------------------------
    // | Event listeners & bindings
    // |--------------------------------------------------------------------------------------------
    /**
     * @param {?} value
     * @return {?}
     */
    DwSliderComponent.prototype.onDragStart = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        this._showHandleTooltip(this.dwRange ? this.activeValueIndex : 0);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwSliderComponent.prototype.onDragMove = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    };
    /**
     * @return {?}
     */
    DwSliderComponent.prototype.onDragEnd = /**
     * @return {?}
     */
    function () {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.dwOnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    };
    /**
     * @return {?}
     */
    DwSliderComponent.prototype.createDrag = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        /** @type {?} */
        var orientField = this.dwVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        var mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        var touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: function (e) { return !_this.utils.isNotTouchEvent(/** @type {?} */ (e)); }
        };
        // make observables
        [mouse, touch].forEach(function (source) {
            var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? (function () { return true; }) : _a;
            // start
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(_this.utils.pauseEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), map(function (position) { return _this.findClosestValue(position); }));
            // end
            source.end$ = fromEvent(document, end);
            // resolve move
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(_this.utils.pauseEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), distinctUntilChanged(), map(function (position) { return _this.findClosestValue(position); }), distinctUntilChanged(), takeUntil(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = merge(mouse.end$, touch.end$);
    };
    /**
     * @param {?=} periods
     * @return {?}
     */
    DwSliderComponent.prototype.subscribeDrag = /**
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
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
    };
    /**
     * @param {?=} periods
     * @return {?}
     */
    DwSliderComponent.prototype.unsubscribeDrag = /**
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
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
    };
    /**
     * @param {?} movable
     * @return {?}
     */
    DwSliderComponent.prototype.toggleDragMoving = /**
     * @param {?} movable
     * @return {?}
     */
    function (movable) {
        /** @type {?} */
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    DwSliderComponent.prototype.toggleDragDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    // |--------------------------------------------------------------------------------------------
    // | Util functions (tools)
    // |--------------------------------------------------------------------------------------------
    // find the closest value depend on pointer's position
    /**
     * @param {?} position
     * @return {?}
     */
    DwSliderComponent.prototype.findClosestValue = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        var sliderLength = this.getSliderLength();
        /** @type {?} */
        var ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        var val = (this.dwMax - this.dwMin) * (this.dwVertical ? 1 - ratio : ratio) + this.dwMin;
        /** @type {?} */
        var points = (this.dwMarks === null ? [] : Object.keys(this.dwMarks).map(parseFloat));
        // push closest step
        if (this.dwStep !== null && !this.dwDots) {
            /** @type {?} */
            var closestOne = Math.round(val / this.dwStep) * this.dwStep;
            points.push(closestOne);
        }
        /** @type {?} */
        var gaps = points.map(function (point) { return Math.abs(val - point); });
        /** @type {?} */
        var closest = points[gaps.indexOf(Math.min.apply(Math, tslib_1.__spread(gaps)))];
        // return the fixed
        return this.dwStep === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.dwStep)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwSliderComponent.prototype.valueToOffset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.utils.valueToOffset(this.dwMin, this.dwMax, value);
    };
    /**
     * @return {?}
     */
    DwSliderComponent.prototype.getSliderStartPosition = /**
     * @return {?}
     */
    function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        var offset = this.utils.getElementOffset(this.sliderDOM);
        return this.dwVertical ? offset.top : offset.left;
    };
    /**
     * @return {?}
     */
    DwSliderComponent.prototype.getSliderLength = /**
     * @return {?}
     */
    function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        return this.dwVertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    // cache DOM layout/reflow operations for performance (may not necessary?)
    /**
     * @param {?=} remove
     * @return {?}
     */
    DwSliderComponent.prototype.cacheSliderProperty = /**
     * @param {?=} remove
     * @return {?}
     */
    function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwSliderComponent.prototype.formatValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var res = value;
        if (!this.checkValidValue(value)) { // if empty, use default value
            // if empty, use default value
            res = this.dwDefaultValue === null ?
                (this.dwRange ? [this.dwMin, this.dwMax] : this.dwMin) : this.dwDefaultValue;
        }
        else { // format
            // format
            // TODO: using type guard, remove type cast
            res = this.dwRange ?
                (/** @type {?} */ (value)).map(function (val) { return _this.utils.correctNumLimit(val, _this.dwMin, _this.dwMax); }) :
                this.utils.correctNumLimit(/** @type {?} */ (value), this.dwMin, this.dwMax);
        }
        return res;
    };
    // check if value is valid and throw error if value-type/range not match
    /**
     * @param {?} value
     * @return {?}
     */
    DwSliderComponent.prototype.checkValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var range = this.dwRange;
        if (value === null || value === undefined) {
            return false;
        }
        /** @type {?} */
        var isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            /** @type {?} */
            var parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) { // value type not match
            // value type not match
            throw new Error("The \"dwRange\" can't match the \"dwValue\"'s type, please check these properties: \"dwRange\", \"dwValue\", \"dwDefaultValue\".");
        }
        return true;
    };
    /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    DwSliderComponent.prototype.isValueEqual = /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    function (value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            /** @type {?} */
            var len = value.length;
            for (var i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    };
    // print debug info
    // TODO: should not kept in component
    /* tslint:disable-next-line:no-any */
    /**
     * @param {...?} messages
     * @return {?}
     */
    DwSliderComponent.prototype.log = /**
     * @param {...?} messages
     * @return {?}
     */
    function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.dwDebugId !== null) {
            /** @type {?} */
            var args = ["[dw-slider][#" + this.dwDebugId + "] "].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    };
    /**
     * @param {?=} handleIndex
     * @return {?}
     */
    DwSliderComponent.prototype._showHandleTooltip = /**
     * @param {?=} handleIndex
     * @return {?}
     */
    function (handleIndex) {
        var _this = this;
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach(function (handle, index) {
            _this.handles[index].active = index === handleIndex;
        });
    };
    /**
     * @return {?}
     */
    DwSliderComponent.prototype._hideAllHandleTooltip = /**
     * @return {?}
     */
    function () {
        this.handles.forEach(function (handle) { return handle.active = false; });
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    DwSliderComponent.prototype._generateHandles = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var handles = [];
        for (var i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    };
    DwSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-slider',
                    preserveWhitespaces: false,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DwSliderComponent; }),
                            multi: true
                        }],
                    template: "<div #slider [ngClass]=\"classMap\">\n  <div class=\"ant-slider-rail\"></div>\n  <dw-slider-track\n    dwClassName=\"{{prefixCls}}-track\"\n    [dwVertical]=\"dwVertical\"\n    [dwIncluded]=\"dwIncluded\"\n    [dwOffset]=\"track.offset\"\n    [dwLength]=\"track.length\"\n  ></dw-slider-track>\n  <dw-slider-step *ngIf=\"marksArray\"\n    dwPrefixCls=\"{{prefixCls}}\"\n    [dwVertical]=\"dwVertical\"\n    [dwLowerBound]=\"bounds.lower\"\n    [dwUpperBound]=\"bounds.upper\"\n    [dwMarksArray]=\"marksArray\"\n    [dwIncluded]=\"dwIncluded\"\n  ></dw-slider-step>\n  <dw-slider-handle\n    *ngFor=\"let handle of handles;\"\n    dwClassName=\"{{prefixCls}}-handle\"\n    [dwVertical]=\"dwVertical\"\n    [dwOffset]=\"handle.offset\"\n    [dwValue]=\"handle.value\"\n    [dwActive]=\"handle.active\"\n    [dwTipFormatter]=\"dwTipFormatter\"\n  ></dw-slider-handle>\n  <dw-slider-marks *ngIf=\"marksArray\"\n    dwClassName=\"{{prefixCls}}-mark\"\n    [dwVertical]=\"dwVertical\"\n    [dwMin]=\"dwMin\"\n    [dwMax]=\"dwMax\"\n    [dwLowerBound]=\"bounds.lower\"\n    [dwUpperBound]=\"bounds.upper\"\n    [dwMarksArray]=\"marksArray\"\n    [dwIncluded]=\"dwIncluded\"\n  ></dw-slider-marks>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwSliderComponent.ctorParameters = function () { return [
        { type: DwSliderService }
    ]; };
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
    return DwSliderComponent;
}());
export { DwSliderComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2xpZGVyL2R3LXNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl0RCxJQUFBOzs7dUJBekJBO0lBNkJDLENBQUE7QUFKRCx3QkFJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3TEMsZ0dBQWdHO0lBQ2hHLG9CQUFvQjtJQUNwQixnR0FBZ0c7SUFFaEcsMkJBQW9CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCOzt5QkFoS0osSUFBSTs7c0JBYXhCLENBQUM7dUJBQ08sSUFBSTtxQkFDYixDQUFDO3FCQUNELEdBQUc7OEJBQ21CLElBQUk7K0JBRWYsSUFBSSxZQUFZLEVBQWU7eUJBdUN2QyxLQUFLO3FCQUNULEtBQUs7eUJBQ0QsSUFBSTtzQkFDUCxLQUFLO3lCQUNGLEtBQUs7cUJBRUosSUFBSTtnQ0FHRSxJ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Q0FBZ0I7Ozs7Y0FBQyxNQUFjOztRQUNyQyxJQUFNLE9BQU8sR0FBbUIsRUFBRSxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUNELE9BQU8sT0FBTyxDQUFDOzs7Z0JBN2hCbEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxXQUFXO29CQUNoQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixTQUFTLEVBQVksQ0FBRTs0QkFDckIsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7NEJBQ2hELEtBQUssRUFBUSxJQUFJO3lCQUNsQixDQUFFO29CQUNILDByQ0FBaUQ7aUJBQ2xEOzs7O2dCQWhDUSxlQUFlOzs7NEJBb0NyQixLQUFLOzZCQUdMLEtBQUs7eUJBVUwsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsTUFBTTs2QkFFTixLQUFLOzBCQVNMLEtBQUs7eUJBU0wsS0FBSzs2QkFTTCxLQUFLO3lCQWlCTCxTQUFTLFNBQUMsUUFBUTs7NEJBMUhyQjs7U0FzRGEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6dmFyaWFibGUtbmFtZSAqL1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBwbHVjaywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTWFya3MsIE1hcmtzQXJyYXkgfSBmcm9tICcuL2R3LXNsaWRlci1tYXJrcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9kdy1zbGlkZXIuc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIFNsaWRlclZhbHVlID0gbnVtYmVyW10gfCBudW1iZXI7XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJIYW5kbGUge1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnIHtcbiAgc3RhcnQ6IHN0cmluZztcbiAgbW92ZTogc3RyaW5nO1xuICBlbmQ6IHN0cmluZztcbiAgcGx1Y2tLZXk6IHN0cmluZ1tdO1xuXG4gIGZpbHRlcj8oZTogRXZlbnQpOiBib29sZWFuO1xuXG4gIHN0YXJ0UGx1Y2tlZCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIGVuZCQ/OiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgbW92ZVJlc29sdmVkJD86IE9ic2VydmFibGU8bnVtYmVyPjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zbGlkZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyB7XG4gICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER3U2xpZGVyQ29tcG9uZW50KSxcbiAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICB9IF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXNsaWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLy8gRGVidWdnaW5nXG4gIEBJbnB1dCgpIGR3RGVidWdJZDogbnVtYmVyIHwgc3RyaW5nID0gbnVsbDsgLy8gc2V0IHRoaXMgaWQgd2lsbCBwcmludCBkZWJ1ZyBpbmZvcm1hdGlvbnMgdG8gY29uc29sZVxuXG4gIC8vIER5bmFtaWMgcHJvcGVydHkgc2V0dGluZ3NcbiAgQElucHV0KClcbiAgc2V0IGR3RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICAvLyBTdGF0aWMgY29uZmlndXJhdGlvbnMgKHByb3BlcnRpZXMgdGhhdCBjYW4gb25seSBzcGVjaWZ5IG9uY2UpXG4gIEBJbnB1dCgpIGR3U3RlcCA9IDE7XG4gIEBJbnB1dCgpIGR3TWFya3M6IE1hcmtzID0gbnVsbDtcbiAgQElucHV0KCkgZHdNaW4gPSAwO1xuICBASW5wdXQoKSBkd01heCA9IDEwMDtcbiAgQElucHV0KCkgZHdEZWZhdWx0VmFsdWU6IFNsaWRlclZhbHVlID0gbnVsbDtcbiAgQElucHV0KCkgZHdUaXBGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBkd09uQWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNsaWRlclZhbHVlPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1ZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UmFuZ2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yYW5nZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdSYW5nZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuZ2U7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdEb3RzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZG90cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdEb3RzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kb3RzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdJbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cblxuICAvLyBJbnNpZGUgcHJvcGVydGllc1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kb3RzID0gZmFsc2U7XG4gIHByaXZhdGUgX2luY2x1ZGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfcmFuZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcblxuICB2YWx1ZTogU2xpZGVyVmFsdWUgPSBudWxsOyAvLyBDT1JFIHZhbHVlIHN0YXRlXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicpIHNsaWRlcjogRWxlbWVudFJlZjtcbiAgc2xpZGVyRE9NOiBIVE1MRGl2RWxlbWVudDtcbiAgY2FjaGVTbGlkZXJTdGFydDogbnVtYmVyID0gbnVsbDtcbiAgY2FjaGVTbGlkZXJMZW5ndGg6IG51bWJlciA9IG51bGw7XG4gIHByZWZpeENscyA9ICdhbnQtc2xpZGVyJztcbiAgY2xhc3NNYXA6IG9iamVjdDtcbiAgYWN0aXZlVmFsdWVJbmRleDogbnVtYmVyID0gbnVsbDsgLy8gQ3VycmVudCBhY3RpdmF0ZWQgaGFuZGxlJ3MgaW5kZXggT05MWSBmb3IgcmFuZ2U9dHJ1ZVxuICB0cmFjayA9IHsgb2Zmc2V0OiBudWxsLCBsZW5ndGg6IG51bGwgfTsgLy8gVHJhY2sncyBvZmZzZXQgYW5kIGxlbmd0aFxuICBoYW5kbGVzOiBTbGlkZXJIYW5kbGVbXTsgLy8gSGFuZGxlcycgb2Zmc2V0XG4gIG1hcmtzQXJyYXk6IE1hcmtzW107IC8vIFwibWFya3NcIiBpbiBhcnJheSB0eXBlIHdpdGggbW9yZSBkYXRhICYgRklMVEVSIG91dCB0aGUgaW52YWxpZCBtYXJrXG4gIGJvdW5kcyA9IHsgbG93ZXI6IG51bGwsIHVwcGVyOiBudWxsIH07IC8vIG5vdyBmb3IgZHctc2xpZGVyLXN0ZXBcbiAgb25WYWx1ZUNoYW5nZTogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZDsgLy8gVXNlZCBieSBuZ01vZGVsLiBCVUc6IG9uVmFsdWVDaGFuZ2UoKSB3aWxsIG5vdCBzdWNjZXNzIHRvIGVmZmVjdCB0aGUgXCJ2YWx1ZVwiIHZhcmlhYmxlICggWyhuZ01vZGVsKV09XCJ2YWx1ZVwiICkgd2hlbiB0aGUgZmlyc3QgaW5pdGlhbGl6aW5nLCBleGNlcHQgdXNpbmcgXCJuZXh0VGlja1wiIGZ1bmN0aW9uYWxpdHkgKE1BWSBhbmd1bGFyMidzIHByb2JsZW0gPylcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuICB9IC8vIG9uVG91Y2ggZnVuY3Rpb24gcmVnaXN0ZXJlZCB2aWEgcmVnaXN0ZXJPblRvdWNoIChDb250cm9sVmFsdWVBY2Nlc3NvcikuXG4gIGlzRHJhZ2dpbmcgPSBmYWxzZTsgLy8gQ3VycmVudCBkcmFnZ2luZyBzdGF0ZVxuXG4gIC8vIEV2ZW50cyBvYnNlcnZhYmxlcyAmIHN1YnNjcmlwdGlvbnNcbiAgZHJhZ3N0YXJ0JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBkcmFnbW92ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgZHJhZ2VuZCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICBkcmFnc3RhcnRfOiBTdWJzY3JpcHRpb247XG4gIGRyYWdtb3ZlXzogU3Vic2NyaXB0aW9uO1xuICBkcmFnZW5kXzogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IHZhbHVlIGFjY2Vzc29ycyAmIG5nTW9kZWwgYWNjZXNzb3JzXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHNldFZhbHVlKHZhbDogU2xpZGVyVmFsdWUsIGlzV3JpdGVWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGlzV3JpdGVWYWx1ZSkgeyAvLyBbbmdNb2RlbC13cml0ZVZhbHVlXTogRm9ybWF0dGluZyBiZWZvcmUgc2V0dGluZyB2YWx1ZSwgYWx3YXlzIHVwZGF0ZSBjdXJyZW50IHZhbHVlLCBidXQgdHJpZ2dlciBvblZhbHVlQ2hhbmdlIE9OTFkgd2hlbiB0aGUgXCJmb3JtYXR0ZWQgdmFsdWVcIiBub3QgZXF1YWxzIFwiaW5wdXQgdmFsdWVcIlxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUodmFsKTtcbiAgICAgIHRoaXMubG9nKGBbbmdNb2RlbDpzZXRWYWx1ZS93cml0ZVZhbHVlXVVwZGF0ZSB0cmFjayAmIGhhbmRsZXNgKTtcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XG4gICAgICAvLyBpZiAoIXRoaXMuaXNWYWx1ZUVxdWFsKHRoaXMudmFsdWUsIHZhbCkpIHtcbiAgICAgIC8vICAgdGhpcy5sb2coYFtuZ01vZGVsOnNldFZhbHVlL3dyaXRlVmFsdWVdb25WYWx1ZUNoYW5nZWAsIHZhbCk7XG4gICAgICAvLyAgIGlmICh0aGlzLm9uVmFsdWVDaGFuZ2UpIHsgLy8gTk9URTogb25WYWx1ZUNoYW5nZSB3aWxsIGJlIHVuYXZhaWxhYmxlIHdoZW4gd3JpdGVWYWx1ZSgpIGNhbGxlZCBhdCB0aGUgZmlyc3QgdGltZVxuICAgICAgLy8gICAgIHRoaXMub25WYWx1ZUNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH0gZWxzZSB7IC8vIFtOb3JtYWxdOiBzZXR0aW5nIHZhbHVlLCBPTkxZIGNoZWNrIGNoYW5nZWQsIHRoZW4gdXBkYXRlIGFuZCB0cmlnZ2VyIG9uVmFsdWVDaGFuZ2VcbiAgICAgIGlmICghdGhpcy5pc1ZhbHVlRXF1YWwodGhpcy52YWx1ZSwgdmFsKSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLmxvZyhgW05vcm1hbDpzZXRWYWx1ZV1VcGRhdGUgdHJhY2sgJiBoYW5kbGVzYCk7XG4gICAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XG4gICAgICAgIHRoaXMubG9nKGBbTm9ybWFsOnNldFZhbHVlXW9uVmFsdWVDaGFuZ2VgLCB2YWwpO1xuICAgICAgICBpZiAodGhpcy5vblZhbHVlQ2hhbmdlKSB7IC8vIE5PVEU6IG9uVmFsdWVDaGFuZ2Ugd2lsbCBiZSB1bmF2YWlsYWJsZSB3aGVuIHdyaXRlVmFsdWUoKSBjYWxsZWQgYXQgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZShjbG9uZUFuZFNvcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IFNsaWRlclZhbHVlIHtcbiAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XG4gICAgaWYgKGNsb25lQW5kU29ydCAmJiB0aGlzLmR3UmFuZ2UpIHsgLy8gY2xvbmUgJiBzb3J0IHJhbmdlIHZhbHVlc1xuICAgICAgcmV0dXJuIHRoaXMudXRpbHMuY2xvbmVBcnJheSh0aGlzLnZhbHVlIGFzIG51bWJlcltdKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gY2xvbmUgJiBzb3J0IGN1cnJlbnQgdmFsdWUgYW5kIGNvbnZlcnQgdGhlbSB0byBvZmZzZXRzLCB0aGVuIHJldHVybiB0aGUgbmV3IG9uZVxuICBnZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlPzogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7XG4gICAgbGV0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2Ygbm9ybWFsaXplZFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgbm9ybWFsaXplZFZhbHVlID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcbiAgICB9XG4gICAgLy8gVE9ETzogdXNpbmcgdHlwZSBndWFyZCwgcmVtb3ZlIHR5cGUgY2FzdFxuICAgIHJldHVybiB0aGlzLmR3UmFuZ2UgP1xuICAgICAgKG5vcm1hbGl6ZWRWYWx1ZSBhcyBudW1iZXJbXSkubWFwKHZhbCA9PiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSkgOlxuICAgICAgdGhpcy52YWx1ZVRvT2Zmc2V0KG5vcm1hbGl6ZWRWYWx1ZSBhcyBudW1iZXIpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IFNsaWRlclZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5sb2coYFtuZ01vZGVsL3dyaXRlVmFsdWVdY3VycmVudCB3cml0aW5nIHZhbHVlID0gYCwgdmFsKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCwgdHJ1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmR3RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IExpZmVjeWNsZSBob29rc1xuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHV0aWxzOiBEd1NsaWRlclNlcnZpY2UpIHtcbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgZXZlbnQgYmluZGluZywgY2xhc3MgaW5pdCwgZXRjLiAoY2FsbGVkIG9ubHkgb25jZSlcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gaW5pdGlhbCBjaGVja2luZ1xuICAgIHRoaXMuY2hlY2tWYWxpZFZhbHVlKHRoaXMuZHdEZWZhdWx0VmFsdWUpOyAvLyBjaGVjayBkd0RlZmF1bHRWYWx1ZVxuICAgIC8vIGRlZmF1bHQgaGFuZGxlc1xuICAgIHRoaXMuaGFuZGxlcyA9IHRoaXMuX2dlbmVyYXRlSGFuZGxlcyh0aGlzLmR3UmFuZ2UgPyAyIDogMSk7XG4gICAgLy8gaW5pdGlhbGl6ZVxuICAgIHRoaXMuc2xpZGVyRE9NID0gdGhpcy5zbGlkZXIubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpO1xuICAgIH0gLy8gaW5pdCB3aXRoIGRlZmF1bHQgdmFsdWVcbiAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLmR3TWFya3MgPT09IG51bGwgPyBudWxsIDogdGhpcy50b01hcmtzQXJyYXkodGhpcy5kd01hcmtzKTtcbiAgICAvLyBldmVudCBiaW5kaW5nc1xuICAgIHRoaXMuY3JlYXRlRHJhZygpO1xuICAgIC8vIGluaXRpYWxpemUgZHJhZydzIGRpc2FibGVkIHN0YXR1c1xuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKHRoaXMuZHdEaXNhYmxlZCk7XG4gICAgLy8gdGhlIGZpcnN0IHRpbWUgdG8gaW5pdCBjbGFzc2VzXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgZHdEaXNhYmxlZCwgZHdNYXJrcywgZHdSYW5nZSB9ID0gY2hhbmdlcztcbiAgICBpZiAoZHdEaXNhYmxlZCAmJiAhZHdEaXNhYmxlZC5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQoZHdEaXNhYmxlZC5jdXJyZW50VmFsdWUpO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH0gZWxzZSBpZiAoZHdNYXJrcyAmJiAhZHdNYXJrcy5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5kd01hcmtzID8gdGhpcy50b01hcmtzQXJyYXkodGhpcy5kd01hcmtzKSA6IG51bGw7XG4gICAgfSBlbHNlIGlmIChkd1JhbmdlICYmICFkd1JhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpOyAvLyBDaGFuZ2UgdG8gZGVmYXVsdCB2YWx1ZSB3aGVuIGR3UmFuZ2UgY2hhbmdlZFxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKCk7XG4gIH1cblxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBCYXNpYyBmbG93IGZ1bmN0aW9uc1xuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYCBdICA6IHRoaXMuZHdEaXNhYmxlZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYCBdICA6IHRoaXMuZHdWZXJ0aWNhbCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXdpdGgtbWFya3NgIF06IHRoaXMubWFya3NBcnJheSA/IHRoaXMubWFya3NBcnJheS5sZW5ndGggOiAwXG4gICAgfTtcbiAgfVxuXG4gIC8vIGZpbmQgdGhlIGNsb2VzdCB2YWx1ZSB0byBiZSBhY3RpdmF0ZWQgKG9ubHkgZm9yIHJhbmdlID0gdHJ1ZSlcbiAgc2V0QWN0aXZlVmFsdWVJbmRleChwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3UmFuZ2UpIHtcbiAgICAgIGxldCBtaW5pbWFsID0gbnVsbDtcbiAgICAgIGxldCBnYXA7XG4gICAgICBsZXQgYWN0aXZlSW5kZXg7XG4gICAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XG4gICAgICAodGhpcy5nZXRWYWx1ZSgpIGFzIG51bWJlcltdKS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGdhcCA9IE1hdGguYWJzKHBvaW50ZXJWYWx1ZSAtIHZhbCk7XG4gICAgICAgIGlmIChtaW5pbWFsID09PSBudWxsIHx8IGdhcCA8IG1pbmltYWwpIHtcbiAgICAgICAgICBtaW5pbWFsID0gZ2FwO1xuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hY3RpdmVWYWx1ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlVmFsdWUocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd1JhbmdlKSB7XG4gICAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMudXRpbHMuY2xvbmVBcnJheSh0aGlzLnZhbHVlIGFzIG51bWJlcltdKTtcbiAgICAgIG5ld1ZhbHVlWyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggXSA9IHBvaW50ZXJWYWx1ZTtcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHBvaW50ZXJWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZSk7XG4gICAgY29uc3QgdmFsdWVTb3J0ZWQgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xuICAgIGNvbnN0IG9mZnNldFNvcnRlZCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZVNvcnRlZCk7XG4gICAgY29uc3QgYm91bmRQYXJ0cyA9IHRoaXMuZHdSYW5nZSA/IHZhbHVlU29ydGVkIGFzIG51bWJlcltdIDogWyAwLCB2YWx1ZVNvcnRlZCBdO1xuICAgIGNvbnN0IHRyYWNrUGFydHMgPSB0aGlzLmR3UmFuZ2UgPyBbIG9mZnNldFNvcnRlZFsgMCBdLCBvZmZzZXRTb3J0ZWRbIDEgXSAtIG9mZnNldFNvcnRlZFsgMCBdIF0gOiBbIDAsIG9mZnNldFNvcnRlZCBdO1xuXG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcbiAgICAgIGhhbmRsZS5vZmZzZXQgPSB0aGlzLmR3UmFuZ2UgPyBvZmZzZXRbIGluZGV4IF0gOiBvZmZzZXQ7XG4gICAgICBoYW5kbGUudmFsdWUgPSB0aGlzLmR3UmFuZ2UgPyB2YWx1ZVsgaW5kZXggXSA6IHZhbHVlO1xuICAgIH0pO1xuICAgIFsgdGhpcy5ib3VuZHMubG93ZXIsIHRoaXMuYm91bmRzLnVwcGVyIF0gPSBib3VuZFBhcnRzO1xuICAgIFsgdGhpcy50cmFjay5vZmZzZXQsIHRoaXMudHJhY2subGVuZ3RoIF0gPSB0cmFja1BhcnRzO1xuICB9XG5cbiAgdG9NYXJrc0FycmF5KG1hcmtzOiBNYXJrcyk6IE1hcmtzW10ge1xuICAgIGNvbnN0IG1hcmtzQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXJrcykge1xuICAgICAgY29uc3QgbWFyayA9IG1hcmtzWyBrZXkgXTtcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBrZXkgPT09ICdudW1iZXInID8ga2V5IDogcGFyc2VGbG9hdChrZXkpO1xuICAgICAgaWYgKHZhbCA8IHRoaXMuZHdNaW4gfHwgdmFsID4gdGhpcy5kd01heCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIG1hcmtzQXJyYXkucHVzaCh7IHZhbHVlOiB2YWwsIG9mZnNldDogdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCksIGNvbmZpZzogbWFyayB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcmtzQXJyYXk7XG4gIH1cblxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBFdmVudCBsaXN0ZW5lcnMgJiBiaW5kaW5nc1xuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvbkRyYWdTdGFydCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ1tvbkRyYWdTdGFydF1kcmFnZ2luZyB2YWx1ZSA9ICcsIHZhbHVlKTtcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcodHJ1ZSk7XG4gICAgLy8gY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9uc1xuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSgpO1xuICAgIC8vIHRyaWdnZXIgZHJhZyBzdGFydFxuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWVJbmRleCh2YWx1ZSk7XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZSh2YWx1ZSk7XG4gICAgLy8gVG9vbHRpcCB2aXNpYmlsaXR5IG9mIGhhbmRsZXNcbiAgICB0aGlzLl9zaG93SGFuZGxlVG9vbHRpcCh0aGlzLmR3UmFuZ2UgPyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggOiAwKTtcbiAgfVxuXG4gIG9uRHJhZ01vdmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbb25EcmFnTW92ZV1kcmFnZ2luZyB2YWx1ZSA9ICcsIHZhbHVlKTtcbiAgICAvLyB0cmlnZ2VyIGRyYWcgbW92aW5nXG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBvbkRyYWdFbmQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ1tvbkRyYWdFbmRdJyk7XG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKGZhbHNlKTtcbiAgICB0aGlzLmR3T25BZnRlckNoYW5nZS5lbWl0KHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xuICAgIC8vIHJlbW92ZSBjYWNoZSBET00gbGF5b3V0L3JlZmxvdyBvcGVyYXRpb25zXG4gICAgdGhpcy5jYWNoZVNsaWRlclByb3BlcnR5KHRydWUpO1xuICAgIC8vIEhpZGUgYWxsIHRvb2x0aXBcbiAgICB0aGlzLl9oaWRlQWxsSGFuZGxlVG9vbHRpcCgpO1xuICB9XG5cbiAgY3JlYXRlRHJhZygpOiB2b2lkIHtcbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlckRPTTtcbiAgICBjb25zdCBvcmllbnRGaWVsZCA9IHRoaXMuZHdWZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xuICAgIGNvbnN0IG1vdXNlOiBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcgPSB7XG4gICAgICBzdGFydCAgIDogJ21vdXNlZG93bicsIG1vdmU6ICdtb3VzZW1vdmUnLCBlbmQ6ICdtb3VzZXVwJyxcbiAgICAgIHBsdWNrS2V5OiBbIG9yaWVudEZpZWxkIF1cbiAgICB9O1xuICAgIGNvbnN0IHRvdWNoOiBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcgPSB7XG4gICAgICBzdGFydCAgIDogJ3RvdWNoc3RhcnQnLCBtb3ZlOiAndG91Y2htb3ZlJywgZW5kOiAndG91Y2hlbmQnLFxuICAgICAgcGx1Y2tLZXk6IFsgJ3RvdWNoZXMnLCAnMCcsIG9yaWVudEZpZWxkIF0sXG4gICAgICBmaWx0ZXIgIDogKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiAhdGhpcy51dGlscy5pc05vdFRvdWNoRXZlbnQoZSBhcyBUb3VjaEV2ZW50KVxuICAgIH07XG4gICAgLy8gbWFrZSBvYnNlcnZhYmxlc1xuICAgIFsgbW91c2UsIHRvdWNoIF0uZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgICAgY29uc3QgeyBzdGFydCwgbW92ZSwgZW5kLCBwbHVja0tleSwgZmlsdGVyOiBmaWx0ZXJGdW5jID0gKCgpID0+IHRydWUpIH0gPSBzb3VyY2U7XG4gICAgICAvLyBzdGFydFxuICAgICAgc291cmNlLnN0YXJ0UGx1Y2tlZCQgPSBmcm9tRXZlbnQoc2xpZGVyRE9NLCBzdGFydCkucGlwZShcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxuICAgICAgICB0YXAodGhpcy51dGlscy5wYXVzZUV2ZW50KSxcbiAgICAgICAgcGx1Y2soLi4ucGx1Y2tLZXkpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXG4gICAgICApO1xuICAgICAgLy8gZW5kXG4gICAgICBzb3VyY2UuZW5kJCA9IGZyb21FdmVudChkb2N1bWVudCwgZW5kKTtcbiAgICAgIC8vIHJlc29sdmUgbW92ZVxuICAgICAgc291cmNlLm1vdmVSZXNvbHZlZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIG1vdmUpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHRoaXMudXRpbHMucGF1c2VFdmVudCksXG4gICAgICAgIHBsdWNrKC4uLnBsdWNrS2V5KSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgbWFwKChwb3NpdGlvbjogbnVtYmVyKSA9PiB0aGlzLmZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb24pKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdGFrZVVudGlsKHNvdXJjZS5lbmQkKVxuICAgICAgKTtcbiAgICAgIC8vIG1lcmdlIHRvIGJlY29tZSBtb3ZpbmdcbiAgICAgIC8vIHNvdXJjZS5tb3ZlJCA9IHNvdXJjZS5zdGFydFBsdWNrZWQkLm1lcmdlTWFwVG8oc291cmNlLm1vdmVSZXNvbHZlZCQpO1xuICAgIH0pO1xuICAgIC8vIG1lcmdlIG1vdXNlIGFuZCB0b3VjaCBvYnNlcnZhYmxlc1xuICAgIHRoaXMuZHJhZ3N0YXJ0JCA9IG1lcmdlKG1vdXNlLnN0YXJ0UGx1Y2tlZCQsIHRvdWNoLnN0YXJ0UGx1Y2tlZCQpO1xuICAgIC8vIHRoaXMuZHJhZ21vdmUkID0gT2JzZXJ2YWJsZS5tZXJnZShtb3VzZS5tb3ZlJCwgdG91Y2gubW92ZSQpO1xuICAgIHRoaXMuZHJhZ21vdmUkID0gbWVyZ2UobW91c2UubW92ZVJlc29sdmVkJCwgdG91Y2gubW92ZVJlc29sdmVkJCk7XG4gICAgdGhpcy5kcmFnZW5kJCA9IG1lcmdlKG1vdXNlLmVuZCQsIHRvdWNoLmVuZCQpO1xuICB9XG5cbiAgc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJyBdKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ1tzdWJzY3JpYmVEcmFnXXRoaXMuZHJhZ3N0YXJ0JCA9ICcsIHRoaXMuZHJhZ3N0YXJ0JCk7XG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnc3RhcnQkICYmICF0aGlzLmRyYWdzdGFydF8pIHtcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0XyA9IHRoaXMuZHJhZ3N0YXJ0JC5zdWJzY3JpYmUodGhpcy5vbkRyYWdTdGFydC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdtb3ZlJykgIT09IC0xICYmIHRoaXMuZHJhZ21vdmUkICYmICF0aGlzLmRyYWdtb3ZlXykge1xuICAgICAgdGhpcy5kcmFnbW92ZV8gPSB0aGlzLmRyYWdtb3ZlJC5zdWJzY3JpYmUodGhpcy5vbkRyYWdNb3ZlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ2VuZCcpICE9PSAtMSAmJiB0aGlzLmRyYWdlbmQkICYmICF0aGlzLmRyYWdlbmRfKSB7XG4gICAgICB0aGlzLmRyYWdlbmRfID0gdGhpcy5kcmFnZW5kJC5zdWJzY3JpYmUodGhpcy5vbkRyYWdFbmQuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWyAnc3RhcnQnLCAnbW92ZScsICdlbmQnIF0pOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW3Vuc3Vic2NyaWJlRHJhZ110aGlzLmRyYWdzdGFydF8gPSAnLCB0aGlzLmRyYWdzdGFydF8pO1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ3N0YXJ0Xykge1xuICAgICAgdGhpcy5kcmFnc3RhcnRfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRyYWdzdGFydF8gPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnbW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ21vdmVfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRyYWdtb3ZlXyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ2VuZF8pIHtcbiAgICAgIHRoaXMuZHJhZ2VuZF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ2VuZF8gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyYWdNb3ZpbmcobW92YWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHBlcmlvZHMgPSBbICdtb3ZlJywgJ2VuZCcgXTtcbiAgICBpZiAobW92YWJsZSkge1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlRHJhZyhwZXJpb2RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcmFnRGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlRHJhZyhbICdzdGFydCcgXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVXRpbCBmdW5jdGlvbnMgKHRvb2xzKVxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBmaW5kIHRoZSBjbG9zZXN0IHZhbHVlIGRlcGVuZCBvbiBwb2ludGVyJ3MgcG9zaXRpb25cbiAgZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzbGlkZXJTdGFydCA9IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xuICAgIGNvbnN0IHNsaWRlckxlbmd0aCA9IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XG4gICAgY29uc3QgcmF0aW8gPSB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCgocG9zaXRpb24gLSBzbGlkZXJTdGFydCkgLyBzbGlkZXJMZW5ndGgsIDAsIDEpO1xuICAgIGNvbnN0IHZhbCA9ICh0aGlzLmR3TWF4IC0gdGhpcy5kd01pbikgKiAodGhpcy5kd1ZlcnRpY2FsID8gMSAtIHJhdGlvIDogcmF0aW8pICsgdGhpcy5kd01pbjtcbiAgICBjb25zdCBwb2ludHMgPSAodGhpcy5kd01hcmtzID09PSBudWxsID8gW10gOiBPYmplY3Qua2V5cyh0aGlzLmR3TWFya3MpLm1hcChwYXJzZUZsb2F0KSk7XG4gICAgLy8gcHVzaCBjbG9zZXN0IHN0ZXBcbiAgICBpZiAodGhpcy5kd1N0ZXAgIT09IG51bGwgJiYgIXRoaXMuZHdEb3RzKSB7XG4gICAgICBjb25zdCBjbG9zZXN0T25lID0gTWF0aC5yb3VuZCh2YWwgLyB0aGlzLmR3U3RlcCkgKiB0aGlzLmR3U3RlcDtcbiAgICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RPbmUpO1xuICAgIH1cbiAgICAvLyBjYWxjdWxhdGUgZ2Fwc1xuICAgIGNvbnN0IGdhcHMgPSBwb2ludHMubWFwKHBvaW50ID0+IE1hdGguYWJzKHZhbCAtIHBvaW50KSk7XG4gICAgY29uc3QgY2xvc2VzdCA9IHBvaW50c1sgZ2Fwcy5pbmRleE9mKE1hdGgubWluKC4uLmdhcHMpKSBdO1xuICAgIC8vIHJldHVybiB0aGUgZml4ZWRcbiAgICByZXR1cm4gdGhpcy5kd1N0ZXAgPT09IG51bGwgPyBjbG9zZXN0IDpcbiAgICAgIHBhcnNlRmxvYXQoY2xvc2VzdC50b0ZpeGVkKHRoaXMudXRpbHMuZ2V0UHJlY2lzaW9uKHRoaXMuZHdTdGVwKSkpO1xuICB9XG5cbiAgdmFsdWVUb09mZnNldCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy51dGlscy52YWx1ZVRvT2Zmc2V0KHRoaXMuZHdNaW4sIHRoaXMuZHdNYXgsIHZhbHVlKTtcbiAgfVxuXG4gIGdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlclN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVNsaWRlclN0YXJ0O1xuICAgIH1cbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnV0aWxzLmdldEVsZW1lbnRPZmZzZXQodGhpcy5zbGlkZXJET00pO1xuICAgIHJldHVybiB0aGlzLmR3VmVydGljYWwgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmxlZnQ7XG4gIH1cblxuICBnZXRTbGlkZXJMZW5ndGgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlckxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IHNsaWRlckRPTSA9IHRoaXMuc2xpZGVyRE9NO1xuICAgIHJldHVybiB0aGlzLmR3VmVydGljYWwgP1xuICAgICAgc2xpZGVyRE9NLmNsaWVudEhlaWdodCA6IHNsaWRlckRPTS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIC8vIGNhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnMgZm9yIHBlcmZvcm1hbmNlIChtYXkgbm90IG5lY2Vzc2FyeT8pXG4gIGNhY2hlU2xpZGVyUHJvcGVydHkocmVtb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlU2xpZGVyU3RhcnQgPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgdGhpcy5jYWNoZVNsaWRlckxlbmd0aCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWU6IFNsaWRlclZhbHVlKTogU2xpZGVyVmFsdWUgeyAvLyBOT1RFOiB3aWxsIHJldHVybiBuZXcgdmFsdWVcbiAgICBsZXQgcmVzID0gdmFsdWU7XG4gICAgaWYgKCF0aGlzLmNoZWNrVmFsaWRWYWx1ZSh2YWx1ZSkpIHsgLy8gaWYgZW1wdHksIHVzZSBkZWZhdWx0IHZhbHVlXG4gICAgICByZXMgPSB0aGlzLmR3RGVmYXVsdFZhbHVlID09PSBudWxsID9cbiAgICAgICAgKHRoaXMuZHdSYW5nZSA/IFsgdGhpcy5kd01pbiwgdGhpcy5kd01heCBdIDogdGhpcy5kd01pbikgOiB0aGlzLmR3RGVmYXVsdFZhbHVlO1xuICAgIH0gZWxzZSB7IC8vIGZvcm1hdFxuICAgICAgLy8gVE9ETzogdXNpbmcgdHlwZSBndWFyZCwgcmVtb3ZlIHR5cGUgY2FzdFxuICAgICAgcmVzID0gdGhpcy5kd1JhbmdlID9cbiAgICAgICAgKHZhbHVlIGFzIG51bWJlcltdKS5tYXAodmFsID0+IHRoaXMudXRpbHMuY29ycmVjdE51bUxpbWl0KHZhbCwgdGhpcy5kd01pbiwgdGhpcy5kd01heCkpIDpcbiAgICAgICAgdGhpcy51dGlscy5jb3JyZWN0TnVtTGltaXQodmFsdWUgYXMgbnVtYmVyLCB0aGlzLmR3TWluLCB0aGlzLmR3TWF4KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaFxuICBjaGVja1ZhbGlkVmFsdWUodmFsdWU6IFNsaWRlclZhbHVlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmR3UmFuZ2U7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIGl0J3MgYW4gaW52YWxpZCB2YWx1ZSwganVzdCByZXR1cm5cbiAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgbGV0IHBhcnNlZFZhbHVlOiBudW1iZXIgPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHBhcnNlZFZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNOYU4ocGFyc2VkVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gaXQncyBhbiBpbnZhbGlkIHZhbHVlLCBqdXN0IHJldHVyblxuICAgIH1cbiAgICBpZiAoaXNBcnJheSAhPT0gISFyYW5nZSkgeyAvLyB2YWx1ZSB0eXBlIG5vdCBtYXRjaFxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJkd1JhbmdlXCIgY2FuJ3QgbWF0Y2ggdGhlIFwiZHdWYWx1ZVwiJ3MgdHlwZSwgcGxlYXNlIGNoZWNrIHRoZXNlIHByb3BlcnRpZXM6IFwiZHdSYW5nZVwiLCBcImR3VmFsdWVcIiwgXCJkd0RlZmF1bHRWYWx1ZVwiLmApO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlzVmFsdWVFcXVhbCh2YWx1ZTogU2xpZGVyVmFsdWUsIHZhbDogU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSB0eXBlb2YgdmFsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY29uc3QgbGVuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodmFsdWVbIGkgXSAhPT0gdmFsWyBpIF0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHZhbDtcbiAgICB9XG4gIH1cblxuICAvLyBwcmludCBkZWJ1ZyBpbmZvXG4gIC8vIFRPRE86IHNob3VsZCBub3Qga2VwdCBpbiBjb21wb25lbnRcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBsb2coLi4ubWVzc2FnZXM6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdEZWJ1Z0lkICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhcmdzID0gWyBgW2R3LXNsaWRlcl1bIyR7dGhpcy5kd0RlYnVnSWR9XSBgIF0uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2hvdyBvbmUgaGFuZGxlJ3MgdG9vbHRpcCBhbmQgaGlkZSBvdGhlcnMnXG4gIHByaXZhdGUgX3Nob3dIYW5kbGVUb29sdGlwKGhhbmRsZUluZGV4OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlc1sgaW5kZXggXS5hY3RpdmUgPSBpbmRleCA9PT0gaGFuZGxlSW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oaWRlQWxsSGFuZGxlVG9vbHRpcCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaChoYW5kbGUgPT4gaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dlbmVyYXRlSGFuZGxlcyhhbW91bnQ6IG51bWJlcik6IFNsaWRlckhhbmRsZVtdIHtcbiAgICBjb25zdCBoYW5kbGVzOiBTbGlkZXJIYW5kbGVbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcbiAgICAgIGhhbmRsZXMucHVzaCh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSk7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVzO1xuICB9XG5cbn1cbiJdfQ==