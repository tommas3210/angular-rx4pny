/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
export const POSITION_MAP = /** @type {?} */ (({
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
export const DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP["top"], POSITION_MAP["right"], POSITION_MAP["bottom"], POSITION_MAP["left"]]);
/** @type {?} */
export const DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP["bottomLeft"], POSITION_MAP["topLeft"]]);
/** @type {?} */
export const DEFAULT_MENTION_POSITIONS = /** @type {?} */ ([
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
    let index = -1;
    /** @type {?} */
    const length = array == null ? 0 : array.length;
    /** @type {?} */
    const result = Array(length);
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
    return arrayMap(props, (key) => {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi1tYXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGFBQWEsWUFBWSxzQkFBOEM7SUFDckUsS0FBSyxFQUFXO1FBQ2QsT0FBTyxFQUFHLFFBQVE7UUFDbEIsT0FBTyxFQUFHLEtBQUs7UUFDZixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtLQUNuQjtJQUNELFdBQVcsRUFBSztRQUNkLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLE9BQU8sRUFBRyxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxTQUFTLEVBQU87UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsVUFBVSxFQUFNO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxPQUFPLEVBQVM7UUFDZCxPQUFPLEVBQUcsS0FBSztRQUNmLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsVUFBVSxFQUFNO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsYUFBYSxFQUFHO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsUUFBUTtLQUNuQjtJQUNELFFBQVEsRUFBUTtRQUNkLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFHLFFBQVE7UUFDbEIsT0FBTyxFQUFHLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxZQUFZLEVBQUk7UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELGFBQWEsRUFBRztRQUNkLE9BQU8sRUFBRyxLQUFLO1FBQ2YsT0FBTyxFQUFHLFFBQVE7UUFDbEIsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUNELE1BQU0sRUFBVTtRQUNkLE9BQU8sRUFBRyxPQUFPO1FBQ2pCLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxTQUFTLEVBQU87UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDRCxZQUFZLEVBQUk7UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0NBQ0ssR0FBOEM7O0FBR3RELGFBQWEsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLENBQUUsWUFBWSxTQUFNLFlBQVksV0FBUSxZQUFZLFlBQVMsWUFBWSxTQUFNLENBQUMsQ0FBQzs7QUFDbEksYUFBYSwwQkFBMEIsR0FBRyxhQUFhLENBQUMsQ0FBRSxZQUFZLGdCQUFhLFlBQVksWUFBVSxDQUFDLENBQUM7O0FBaUIzRyxhQUFhLHlCQUF5QixxQkFBRztJQUN2QyxZQUFZO0lBQ1o7UUFDRSxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsUUFBUTtLQUNuQjtDQUMwQixFQUFDOzs7Ozs7O0FBRTlCLGtCQUF3QixLQUFVLEVBQUUsUUFBaUQ7O0lBQ25GLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUNmLE1BQU0sTUFBTSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7SUFDaEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdCLE9BQU8sRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFO1FBQ3ZCLE1BQU0sQ0FBRSxLQUFLLENBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFFLEtBQUssQ0FBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMxRDtJQUNELE9BQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7Ozs7QUFFRCxvQkFBdUIsTUFBa0MsRUFBRSxLQUFlO0lBQ3hFLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQzlCLE9BQU8sTUFBTSxDQUFFLEdBQUcsQ0FBRSxDQUFDO0tBQ3RCLENBQUMsQ0FBQztDQUNKOzs7Ozs7QUFFRCx1QkFBMEIsTUFBa0M7SUFDMUQsT0FBTyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ3RFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuZXhwb3J0IGNvbnN0IFBPU0lUSU9OX01BUDogeyBba2V5OiBzdHJpbmddOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gPSB7XG4gICd0b3AnICAgICAgICAgOiB7XG4gICAgb3JpZ2luWCA6ICdjZW50ZXInLFxuICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nXG4gIH0sXG4gICd0b3BDZW50ZXInICAgOiB7XG4gICAgb3JpZ2luWCA6ICdjZW50ZXInLFxuICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nXG4gIH0sXG4gICd0b3BMZWZ0JyAgICAgOiB7XG4gICAgb3JpZ2luWCA6ICdzdGFydCcsXG4gICAgb3JpZ2luWSA6ICd0b3AnLFxuICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICB9LFxuICAndG9wUmlnaHQnICAgIDoge1xuICAgIG9yaWdpblggOiAnZW5kJyxcbiAgICBvcmlnaW5ZIDogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICB9LFxuICAncmlnaHQnICAgICAgIDoge1xuICAgIG9yaWdpblggOiAnZW5kJyxcbiAgICBvcmlnaW5ZIDogJ2NlbnRlcicsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICdjZW50ZXInLFxuICB9LFxuICAncmlnaHRUb3AnICAgIDoge1xuICAgIG9yaWdpblggOiAnZW5kJyxcbiAgICBvcmlnaW5ZIDogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICd0b3AnLFxuICB9LFxuICAncmlnaHRCb3R0b20nIDoge1xuICAgIG9yaWdpblggOiAnZW5kJyxcbiAgICBvcmlnaW5ZIDogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICB9LFxuICAnYm90dG9tJyAgICAgIDoge1xuICAgIG9yaWdpblggOiAnY2VudGVyJyxcbiAgICBvcmlnaW5ZIDogJ2JvdHRvbScsXG4gICAgb3ZlcmxheVg6ICdjZW50ZXInLFxuICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgfSxcbiAgJ2JvdHRvbUNlbnRlcic6IHtcbiAgICBvcmlnaW5YIDogJ2NlbnRlcicsXG4gICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICBvdmVybGF5WTogJ3RvcCcsXG4gIH0sXG4gICdib3R0b21MZWZ0JyAgOiB7XG4gICAgb3JpZ2luWCA6ICdzdGFydCcsXG4gICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgfSxcbiAgJ2JvdHRvbVJpZ2h0JyA6IHtcbiAgICBvcmlnaW5YIDogJ2VuZCcsXG4gICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICBvdmVybGF5WTogJ3RvcCcsXG4gIH0sXG4gICdsZWZ0JyAgICAgICAgOiB7XG4gICAgb3JpZ2luWCA6ICdzdGFydCcsXG4gICAgb3JpZ2luWSA6ICdjZW50ZXInLFxuICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICBvdmVybGF5WTogJ2NlbnRlcicsXG4gIH0sXG4gICdsZWZ0VG9wJyAgICAgOiB7XG4gICAgb3JpZ2luWCA6ICdzdGFydCcsXG4gICAgb3JpZ2luWSA6ICd0b3AnLFxuICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICBvdmVybGF5WTogJ3RvcCcsXG4gIH0sXG4gICdsZWZ0Qm90dG9tJyAgOiB7XG4gICAgb3JpZ2luWCA6ICdzdGFydCcsXG4gICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICBvdmVybGF5WTogJ2JvdHRvbScsXG4gIH0sXG59IGFzIHsgfSBhcyB7IFtrZXk6IHN0cmluZ106IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfTtcblxuLy8gVE9ETzogVGhlIHdob2xlIGxvZ2ljIGRvZXMgbm90IG1ha2Ugc2Vuc2UgaGVyZSwgX29iamVjdFZhbHVlcyBqdXN0IHJldHVybnMgYSBjb3B5IG9mIG9yaWdpbmFsIGFycmF5XG5leHBvcnQgY29uc3QgREVGQVVMVF80X1BPU0lUSU9OUyA9IF9vYmplY3RWYWx1ZXMoWyBQT1NJVElPTl9NQVAudG9wLCBQT1NJVElPTl9NQVAucmlnaHQsIFBPU0lUSU9OX01BUC5ib3R0b20sIFBPU0lUSU9OX01BUC5sZWZ0XSk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgPSBfb2JqZWN0VmFsdWVzKFsgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsIFBPU0lUSU9OX01BUC50b3BMZWZ0IF0pO1xuXG4vLyBleHBvcnQgY29uc3QgREVGQVVMVF9EQVRFUElDS0VSX1BPU0lUSU9OUyA9IFtcbi8vICAge1xuLy8gICAgIG9yaWdpblggOiAnc3RhcnQnLFxuLy8gICAgIG9yaWdpblkgOiAndG9wJyxcbi8vICAgICBvdmVybGF5WDogJ3N0YXJ0Jyxcbi8vICAgICBvdmVybGF5WTogJ3RvcCcsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBvcmlnaW5YIDogJ3N0YXJ0Jyxcbi8vICAgICBvcmlnaW5ZIDogJ2JvdHRvbScsXG4vLyAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4vLyAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuLy8gICB9XG4vLyBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUVOVElPTl9QT1NJVElPTlMgPSBbXG4gIFBPU0lUSU9OX01BUC5ib3R0b21MZWZ0LFxuICB7XG4gICAgb3JpZ2luWCA6ICdzdGFydCcsXG4gICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICB9XG5dIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcblxuZnVuY3Rpb24gYXJyYXlNYXA8VCwgUz4oYXJyYXk6IFRbXSwgaXRlcmF0ZWU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnI6IFRbXSkgPT4gUyk6IFNbXSB7XG4gIGxldCBpbmRleCA9IC0xO1xuICBjb25zdCBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgY29uc3QgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFsgaW5kZXggXSA9IGl0ZXJhdGVlKGFycmF5WyBpbmRleCBdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGJhc2VWYWx1ZXM8VD4ob2JqZWN0OiB7IFtrZXk6IHN0cmluZ106IFQgfSB8IFRbXSwgcHJvcHM6IHN0cmluZ1tdKTogVFtdIHtcbiAgcmV0dXJuIGFycmF5TWFwKHByb3BzLCAgKGtleSkgPT4ge1xuICAgIHJldHVybiBvYmplY3RbIGtleSBdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFZhbHVlczxUPihvYmplY3Q6IHsgW2tleTogc3RyaW5nXTogVCB9IHwgVFtdKTogVFtdIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gW10gOiBiYXNlVmFsdWVzKG9iamVjdCwgT2JqZWN0LmtleXMob2JqZWN0KSk7XG59XG4iXX0=