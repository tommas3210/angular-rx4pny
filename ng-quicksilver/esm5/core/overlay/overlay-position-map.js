/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
export var POSITION_MAP = /** @type {?} */ (({
    'top': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topCenter': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topLeft': {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    'topRight': {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    'right': {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
    },
    'rightTop': {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
    },
    'rightBottom': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
    },
    'bottom': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomCenter': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomLeft': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
    },
    'bottomRight': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
    },
    'left': {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
    },
    'leftTop': {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top',
    },
    'leftBottom': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom',
    },
}));
/** @type {?} */
export var DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP["top"], POSITION_MAP["right"], POSITION_MAP["bottom"], POSITION_MAP["left"]]);
/** @type {?} */
export var DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP["bottomLeft"], POSITION_MAP["topLeft"]]);
/** @type {?} */
export var DEFAULT_MENTION_POSITIONS = /** @type {?} */ ([
    POSITION_MAP["bottomLeft"],
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom'
    }
]);
/**
 * @template T, S
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    /** @type {?} */
    var index = -1;
    /** @type {?} */
    var length = array == null ? 0 : array.length;
    /** @type {?} */
    var result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * @template T
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
function baseValues(object, props) {
    return arrayMap(props, function (key) {
        return object[key];
    });
}
/**
 * @template T
 * @param {?} object
 * @return {?}
 */
function _objectValues(object) {
    return object == null ? [] : baseValues(object, Object.keys(object));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi1tYXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLFdBQWEsWUFBWSxzQkFBOEM7SUFDckUsS0FBSyxFQUFXO1FBQ2QsT0FBTyxFQUFHLFFBQVE7UUFDbEIsT0FBTyxFQUFHLEtBQUs7UUFDZixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtLQUNuQjtJQUNELFdBQVcsRUFBSztRQUNkLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLE9BQU8sRUFBRyxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxTQUFTLEVBQU87UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsVUFBVSxFQUFNO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxPQUFPLEVBQVM7UUFDZCxPQUFPLEVBQUcsS0FBSztRQUNmLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsVUFBVSxFQUFNO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsYUFBYSxFQUFHO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsUUFBUTtLQUNuQjtJQUNELFFBQVEsRUFBUTtRQUNkLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFHLFFBQVE7UUFDbEIsT0FBTyxFQUFHLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxZQUFZLEVBQUk7UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELGFBQWEsRUFBRztRQUNkLE9BQU8sRUFBRyxLQUFLO1FBQ2YsT0FBTyxFQUFHLFFBQVE7UUFDbEIsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELE1BQU0sRUFBVTtRQUNkLE9BQU8sRUFBRyxPQUFPO1FBQ2pCLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxTQUFTLEVBQU87UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxZQUFZLEVBQUk7UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0NBQ0ssR0FBOEM7O0FBR3RELFdBQWEsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLENBQUUsWUFBWSxTQUFNLFlBQVksV0FBUSxZQUFZLFlBQVMsWUFBWSxTQUFNLENBQUMsQ0FBQzs7QUFDbEksV0FBYSwwQkFBMEIsR0FBRyxhQUFhLENBQUMsQ0FBRSxZQUFZLGdCQUFhLFlBQVksWUFBVSxDQUFDLENBQUM7O0FBaUIzRyxXQUFhLHlCQUF5QixxQkFBRztJQUN2QyxZQUFZO0lBQ1o7UUFDRSxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsUUFBUTtLQUNuQjtDQUMwQixFQUFDOzs7Ozs7O0FBRTlCLGtCQUF3QixLQUFVLEVBQUUsUUFBaUQ7O0lBQ25GLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUNmLElBQU0sTUFBTSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7SUFDaEQsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdCLE9BQU8sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFO1FBQ3ZCLE1BQU0sQ0FBRSxLQUFLLENBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMxRDtJQUNELE9BQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7Ozs7QUFFRCxvQkFBdUIsTUFBa0MsRUFBRSxLQUFlO0lBQ3hFLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRyxVQUFDLEdBQUc7UUFDMUIsT0FBTyxNQUFNLENBQUUsR0FBRyxDQUFFLENBQUM7S0FDdEIsQ0FBQyxDQUFDO0NBQ0o7Ozs7OztBQUVELHVCQUEwQixNQUFrQztJQUMxRCxPQUFPLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDdEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5leHBvcnQgY29uc3QgUE9TSVRJT05fTUFQOiB7IFtrZXk6IHN0cmluZ106IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSA9IHtcbiAgJ3RvcCcgICAgICAgICA6IHtcbiAgICBvcmlnaW5YIDogJ2NlbnRlcicsXG4gICAgb3JpZ2luWSA6ICd0b3AnLFxuICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgfSxcbiAgJ3RvcENlbnRlcicgICA6IHtcbiAgICBvcmlnaW5YIDogJ2NlbnRlcicsXG4gICAgb3JpZ2luWSA6ICd0b3AnLFxuICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgfSxcbiAgJ3RvcExlZnQnICAgICA6IHtcbiAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZIDogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nXG4gIH0sXG4gICd0b3BSaWdodCcgICAgOiB7XG4gICAgb3JpZ2luWCA6ICdlbmQnLFxuICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nXG4gIH0sXG4gICdyaWdodCcgICAgICAgOiB7XG4gICAgb3JpZ2luWCA6ICdlbmQnLFxuICAgIG9yaWdpblkgOiAnY2VudGVyJyxcbiAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICBvdmVybGF5WTogJ2NlbnRlcicsXG4gIH0sXG4gICdyaWdodFRvcCcgICAgOiB7XG4gICAgb3JpZ2luWCA6ICdlbmQnLFxuICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICBvdmVybGF5WTogJ3RvcCcsXG4gIH0sXG4gICdyaWdodEJvdHRvbScgOiB7XG4gICAgb3JpZ2luWCA6ICdlbmQnLFxuICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICBvdmVybGF5WTogJ2JvdHRvbScsXG4gIH0sXG4gICdib3R0b20nICAgICAgOiB7XG4gICAgb3JpZ2luWCA6ICdjZW50ZXInLFxuICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgb3ZlcmxheVk6ICd0b3AnLFxuICB9LFxuICAnYm90dG9tQ2VudGVyJzoge1xuICAgIG9yaWdpblggOiAnY2VudGVyJyxcbiAgICBvcmlnaW5ZIDogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdjZW50ZXInLFxuICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgfSxcbiAgJ2JvdHRvbUxlZnQnICA6IHtcbiAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZIDogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICd0b3AnLFxuICB9LFxuICAnYm90dG9tUmlnaHQnIDoge1xuICAgIG9yaWdpblggOiAnZW5kJyxcbiAgICBvcmlnaW5ZIDogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgfSxcbiAgJ2xlZnQnICAgICAgICA6IHtcbiAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZIDogJ2NlbnRlcicsXG4gICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgIG92ZXJsYXlZOiAnY2VudGVyJyxcbiAgfSxcbiAgJ2xlZnRUb3AnICAgICA6IHtcbiAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZIDogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgfSxcbiAgJ2xlZnRCb3R0b20nICA6IHtcbiAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZIDogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbiAgfSxcbn0gYXMgeyB9IGFzIHsgW2tleTogc3RyaW5nXTogQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9O1xuXG4vLyBUT0RPOiBUaGUgd2hvbGUgbG9naWMgZG9lcyBub3QgbWFrZSBzZW5zZSBoZXJlLCBfb2JqZWN0VmFsdWVzIGp1c3QgcmV0dXJucyBhIGNvcHkgb2Ygb3JpZ2luYWwgYXJyYXlcbmV4cG9ydCBjb25zdCBERUZBVUxUXzRfUE9TSVRJT05TID0gX29iamVjdFZhbHVlcyhbIFBPU0lUSU9OX01BUC50b3AsIFBPU0lUSU9OX01BUC5yaWdodCwgUE9TSVRJT05fTUFQLmJvdHRvbSwgUE9TSVRJT05fTUFQLmxlZnRdKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyA9IF9vYmplY3RWYWx1ZXMoWyBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCwgUE9TSVRJT05fTUFQLnRvcExlZnQgXSk7XG5cbi8vIGV4cG9ydCBjb25zdCBERUZBVUxUX0RBVEVQSUNLRVJfUE9TSVRJT05TID0gW1xuLy8gICB7XG4vLyAgICAgb3JpZ2luWCA6ICdzdGFydCcsXG4vLyAgICAgb3JpZ2luWSA6ICd0b3AnLFxuLy8gICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuLy8gICAgIG92ZXJsYXlZOiAndG9wJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIG9yaWdpblggOiAnc3RhcnQnLFxuLy8gICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbi8vICAgICBvdmVybGF5WDogJ3N0YXJ0Jyxcbi8vICAgICBvdmVybGF5WTogJ2JvdHRvbScsXG4vLyAgIH1cbi8vIF0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9NRU5USU9OX1BPU0lUSU9OUyA9IFtcbiAgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsXG4gIHtcbiAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZIDogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nXG4gIH1cbl0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdO1xuXG5mdW5jdGlvbiBhcnJheU1hcDxULCBTPihhcnJheTogVFtdLCBpdGVyYXRlZTogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycjogVFtdKSA9PiBTKTogU1tdIHtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICBjb25zdCByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0WyBpbmRleCBdID0gaXRlcmF0ZWUoYXJyYXlbIGluZGV4IF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYmFzZVZhbHVlczxUPihvYmplY3Q6IHsgW2tleTogc3RyaW5nXTogVCB9IHwgVFtdLCBwcm9wczogc3RyaW5nW10pOiBUW10ge1xuICByZXR1cm4gYXJyYXlNYXAocHJvcHMsICAoa2V5KSA9PiB7XG4gICAgcmV0dXJuIG9iamVjdFsga2V5IF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0VmFsdWVzPFQ+KG9iamVjdDogeyBba2V5OiBzdHJpbmddOiBUIH0gfCBUW10pOiBUW10ge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBbXSA6IGJhc2VWYWx1ZXMob2JqZWN0LCBPYmplY3Qua2V5cyhvYmplY3QpKTtcbn1cbiJdfQ==