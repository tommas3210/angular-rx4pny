/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { coerceBooleanProperty, coerceCssPixelValue, coerceNumberProperty } from '@angular/cdk/coercion';
/**
 * @param {?} value
 * @return {?}
 */
export function toBoolean(value) {
    return coerceBooleanProperty(value);
}
/**
 * @template D
 * @param {?} value
 * @param {?} fallback
 * @return {?}
 */
export function toNumber(value, fallback) {
    return coerceNumberProperty(value, fallback);
}
/**
 * @param {?} value
 * @return {?}
 */
export function toCssPixel(value) {
    return coerceCssPixelValue(value);
}
/**
 * @template T
 * @param {?} prop
 * @param {...?} args
 * @return {?}
 */
export function valueFunctionProp(prop) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    // tslint:disable-line: no-any
    return typeof prop === 'function' ? prop.apply(void 0, tslib_1.__spread(args)) : prop;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using \@InputBoolean alone without \@Input? AOT needs \@Input to be visible
 *
 * \@howToUse
 * ```
 * \@Input() \@InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // \@Input()
 * // get visible() { return this.__visibile; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 * @return {?}
 */
export function InputBoolean() {
    // tslint:disable-line:no-any
    return function InputBooleanPropDecorator(target, name) {
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputBoolean decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = toBoolean(value); // tslint:disable-line:no-invalid-this
            }
        });
        // // Do rest things for input decorator
        // const inputDecorator = Input();
        // inputDecorator(target, name);
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2NvbnZlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFHekcsTUFBTSxvQkFBb0IsS0FBdUI7SUFDL0MsT0FBTyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNyQzs7Ozs7OztBQUVELE1BQU0sbUJBQXNCLEtBQXNCLEVBQUUsUUFBVztJQUM3RCxPQUFPLG9CQUFvQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztDQUM5Qzs7Ozs7QUFFRCxNQUFNLHFCQUFxQixLQUFzQjtJQUMvQyxPQUFPLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ25DOzs7Ozs7O0FBR0QsTUFBTSw0QkFBK0IsSUFBcUI7SUFBRSxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLDZCQUFjOzs7SUFDeEUsT0FBTyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksZ0NBQUksSUFBSSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Q0FDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCRCxNQUFNOztJQUNKLE9BQU8sbUNBQW9DLE1BQWMsRUFBRSxJQUFZOztRQUVyRSxJQUFNLGVBQWUsR0FBRyxTQUFPLElBQU0sQ0FBQztRQUV0QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBYSxlQUFlLHlFQUFxRSxDQUFDLENBQUM7U0FDakg7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDbEMsR0FBRzs7O1lBQUg7Z0JBQ0UsT0FBTyxJQUFJLENBQUUsZUFBZSxDQUFFLENBQUM7YUFDaEM7WUFDRCxHQUFHOzs7O1lBQUgsVUFBSSxLQUF1QjtnQkFDekIsSUFBSSxDQUFFLGVBQWUsQ0FBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QztTQUNGLENBQUMsQ0FBQzs7OztLQUtKLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlQ3NzUGl4ZWxWYWx1ZSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vdHlwZXMvY29tbW9uLXdyYXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IG51bWJlciB8IHN0cmluZywgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEIHtcbiAgcmV0dXJuIGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlLCBmYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Nzc1BpeGVsKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gY29lcmNlQ3NzUGl4ZWxWYWx1ZSh2YWx1ZSk7XG59XG5cbi8vIEdldCB0aGUgZnVuY2l0b24tcHJvcGVydHkgdHlwZSdzIHZhbHVlXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVGdW5jdGlvblByb3A8VD4ocHJvcDogRnVuY3Rpb25Qcm9wPFQ+LCAuLi5hcmdzOiBhbnlbXSk6IFQgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOiBuby1hbnlcbiAgcmV0dXJuIHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nID8gcHJvcCguLi5hcmdzKSA6IHByb3A7XG59XG5cbi8qKlxuICogSW5wdXQgZGVjb3JhdG9yIHRoYXQgaGFuZGxlIGEgcHJvcCB0byBkbyBnZXQvc2V0IGF1dG9tYXRpY2FsbHkgd2l0aCB0b0Jvb2xlYW5cbiAqXG4gKiBXaHkgbm90IHVzaW5nIEBJbnB1dEJvb2xlYW4gYWxvbmUgd2l0aG91dCBASW5wdXQ/IEFPVCBuZWVkcyBASW5wdXQgdG8gYmUgdmlzaWJsZVxuICpcbiAqIEBob3dUb1VzZVxuICogYGBgXG4gKiBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICpcbiAqIC8vIEFjdCBhcyBiZWxvdzpcbiAqIC8vIEBJbnB1dCgpXG4gKiAvLyBnZXQgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX192aXNpYmlsZTsgfVxuICogLy8gc2V0IHZpc2libGUodmFsdWUpIHsgdGhpcy5fX3Zpc2libGUgPSB2YWx1ZTsgfVxuICogLy8gX192aXNpYmxlID0gZmFsc2U7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbigpOiBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gZnVuY3Rpb24gSW5wdXRCb29sZWFuUHJvcERlY29yYXRvciAodGFyZ2V0OiBvYmplY3QsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtuYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5IElucHV0Qm9vbGVhbiBkZWNvcmF0b3IuYCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgZ2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdID0gdG9Cb29sZWFuKHZhbHVlKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIC8vIERvIHJlc3QgdGhpbmdzIGZvciBpbnB1dCBkZWNvcmF0b3JcbiAgICAvLyBjb25zdCBpbnB1dERlY29yYXRvciA9IElucHV0KCk7XG4gICAgLy8gaW5wdXREZWNvcmF0b3IodGFyZ2V0LCBuYW1lKTtcbiAgfTtcbn1cbiJdfQ==