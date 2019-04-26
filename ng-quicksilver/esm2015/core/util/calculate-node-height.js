/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
/** @type {?} */
const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;
/** @type {?} */
const SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
];
/**
 * @record
 */
export function NodeType() { }
function NodeType_tsickle_Closure_declarations() {
    /** @type {?} */
    NodeType.prototype.sizingStyle;
    /** @type {?} */
    NodeType.prototype.paddingSize;
    /** @type {?} */
    NodeType.prototype.borderSize;
    /** @type {?} */
    NodeType.prototype.boxSizing;
}
/**
 * @record
 */
export function NodeProperty() { }
function NodeProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    NodeProperty.prototype.height;
    /** @type {?} */
    NodeProperty.prototype.minHeight;
    /** @type {?} */
    NodeProperty.prototype.maxHeight;
    /** @type {?} */
    NodeProperty.prototype.overflowY;
}
/** @type {?} */
const computedStyleCache = {};
/** @type {?} */
let hiddenTextarea;
/**
 * @param {?} node
 * @param {?=} useCache
 * @return {?}
 */
function calculateNodeStyling(node, useCache = false) {
    /** @type {?} */
    const nodeRef = /** @type {?} */ ((node.getAttribute('id') ||
        node.getAttribute('data-reactid') ||
        node.getAttribute('name')));
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    /** @type {?} */
    const style = window.getComputedStyle(node);
    /** @type {?} */
    const boxSizing = (style.getPropertyValue('box-sizing') ||
        style.getPropertyValue('-moz-box-sizing') ||
        style.getPropertyValue('-webkit-box-sizing'));
    /** @type {?} */
    const paddingSize = (parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top')));
    /** @type {?} */
    const borderSize = (parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width')));
    /** @type {?} */
    const sizingStyle = SIZING_STYLE
        .map(name => `${name}:${style.getPropertyValue(name)}`)
        .join(';');
    /** @type {?} */
    const nodeInfo = {
        sizingStyle,
        paddingSize,
        borderSize,
        boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
/**
 * @param {?} uiTextNode
 * @param {?=} useCache
 * @param {?=} minRows
 * @param {?=} maxRows
 * @return {?}
 */
export default function calculateNodeHeight(uiTextNode, useCache = false, minRows = null, maxRows = null) {
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', /** @type {?} */ (uiTextNode.getAttribute('wrap')));
    }
    else {
        hiddenTextarea.removeAttribute('wrap');
    }
    const { paddingSize, borderSize, boxSizing, sizingStyle } = calculateNodeStyling(uiTextNode, useCache);
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    /** @type {?} */
    let minHeight = Number.MIN_SAFE_INTEGER;
    /** @type {?} */
    let maxHeight = Number.MAX_SAFE_INTEGER;
    /** @type {?} */
    let height = hiddenTextarea.scrollHeight;
    /** @type {?} */
    let overflowY;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    }
    else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = '';
        /** @type {?} */
        const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }
    return { height, minHeight, maxHeight, overflowY };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLW5vZGUtaGVpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjb3JlL3V0aWwvY2FsY3VsYXRlLW5vZGUtaGVpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE1BQU0scUJBQXFCLEdBQUc7Ozs7Ozs7Ozs7Q0FVN0IsQ0FBQzs7QUFFRixNQUFNLFlBQVksR0FBRztJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7Q0FDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkYsTUFBTSxrQkFBa0IsR0FBZ0MsRUFBRSxDQUFDOztBQUMzRCxJQUFJLGNBQWMsQ0FBc0I7Ozs7OztBQUV4Qyw4QkFBOEIsSUFBaUIsRUFBRSxXQUFvQixLQUFLOztJQUN4RSxNQUFNLE9BQU8scUJBQUcsQ0FDZCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUNoQixFQUFDO0lBRVosSUFBSSxRQUFRLElBQUksa0JBQWtCLENBQUUsT0FBTyxDQUFFLEVBQUU7UUFDN0MsT0FBTyxrQkFBa0IsQ0FBRSxPQUFPLENBQUUsQ0FBQztLQUN0Qzs7SUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBRTVDLE1BQU0sU0FBUyxHQUFHLENBQ2hCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDcEMsS0FBSyxDQUFDLGdCQUFnQixD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RTtZQUNwQixTQUFTLEdBQUcsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUN0QyxJQUFJLFNBQVMsS0FBSyxZQUFZLEVBQUU7Z0JBQzlCLFNBQVMsR0FBRyxTQUFTLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQzthQUNsRDtZQUNELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixTQUFTLEdBQUcsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUN0QyxJQUFJLFNBQVMsS0FBSyxZQUFZLEVBQUU7Z0JBQzlCLFNBQVMsR0FBRyxTQUFTLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQzthQUNsRDtZQUNELFNBQVMsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMvQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdEM7S0FDRjs7SUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUN0QjtJQUNELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQztDQUNwRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoYW5rcyB0byBodHRwczovL2dpdGh1Yi5jb20vYW5kcmV5cG9wcC9yZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZS9cblxuLyoqXG4gKiBjYWxjdWxhdGVOb2RlSGVpZ2h0KHVpVGV4dE5vZGUsIHVzZUNhY2hlID0gZmFsc2UpXG4gKi9cblxuY29uc3QgSElEREVOX1RFWFRBUkVBX1NUWUxFID0gYFxuICBtaW4taGVpZ2h0OjAgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDpub25lICFpbXBvcnRhbnQ7XG4gIGhlaWdodDowICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB6LWluZGV4Oi0xMDAwICFpbXBvcnRhbnQ7XG4gIHRvcDowICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OjAgIWltcG9ydGFudFxuYDtcblxuY29uc3QgU0laSU5HX1NUWUxFID0gW1xuICAnbGV0dGVyLXNwYWNpbmcnLFxuICAnbGluZS1oZWlnaHQnLFxuICAncGFkZGluZy10b3AnLFxuICAncGFkZGluZy1ib3R0b20nLFxuICAnZm9udC1mYW1pbHknLFxuICAnZm9udC13ZWlnaHQnLFxuICAnZm9udC1zaXplJyxcbiAgJ3RleHQtcmVuZGVyaW5nJyxcbiAgJ3RleHQtdHJhbnNmb3JtJyxcbiAgJ3dpZHRoJyxcbiAgJ3RleHQtaW5kZW50JyxcbiAgJ3BhZGRpbmctbGVmdCcsXG4gICdwYWRkaW5nLXJpZ2h0JyxcbiAgJ2JvcmRlci13aWR0aCcsXG4gICdib3gtc2l6aW5nJ1xuXTtcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlVHlwZSB7XG4gIHNpemluZ1N0eWxlOiBzdHJpbmc7XG4gIHBhZGRpbmdTaXplOiBudW1iZXI7XG4gIGJvcmRlclNpemU6IG51bWJlcjtcbiAgYm94U2l6aW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZVByb3BlcnR5IHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIG1pbkhlaWdodDogbnVtYmVyO1xuICBtYXhIZWlnaHQ6IG51bWJlcjtcbiAgb3ZlcmZsb3dZOiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvbXB1dGVkU3R5bGVDYWNoZTogeyBba2V5OiBzdHJpbmddOiBOb2RlVHlwZSB9ID0ge307XG5sZXQgaGlkZGVuVGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU5vZGVTdHlsaW5nKG5vZGU6IEhUTUxFbGVtZW50LCB1c2VDYWNoZTogYm9vbGVhbiA9IGZhbHNlKTogTm9kZVR5cGUge1xuICBjb25zdCBub2RlUmVmID0gKFxuICAgIG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpIHx8XG4gICAgbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhY3RpZCcpIHx8XG4gICAgbm9kZS5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICApIGFzIHN0cmluZztcblxuICBpZiAodXNlQ2FjaGUgJiYgY29tcHV0ZWRTdHlsZUNhY2hlWyBub2RlUmVmIF0pIHtcbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZUNhY2hlWyBub2RlUmVmIF07XG4gIH1cblxuICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gIGNvbnN0IGJveFNpemluZyA9IChcbiAgICBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJykgfHxcbiAgICBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctbW96LWJveC1zaXppbmcnKSB8fFxuICAgIHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy13ZWJraXQtYm94LXNpemluZycpXG4gICk7XG5cbiAgY29uc3QgcGFkZGluZ1NpemUgPSAoXG4gICAgcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpKSArXG4gICAgcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpKVxuICApO1xuXG4gIGNvbnN0IGJvcmRlclNpemUgPSAoXG4gICAgcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItYm90dG9tLXdpZHRoJykpICtcbiAgICBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci10b3Atd2lkdGgnKSlcbiAgKTtcblxuICBjb25zdCBzaXppbmdTdHlsZSA9IFNJWklOR19TVFlMRVxuICAubWFwKG5hbWUgPT4gYCR7bmFtZX06JHtzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpfWApXG4gIC5qb2luKCc7Jyk7XG5cbiAgY29uc3Qgbm9kZUluZm86IE5vZGVUeXBlID0ge1xuICAgIHNpemluZ1N0eWxlLFxuICAgIHBhZGRpbmdTaXplLFxuICAgIGJvcmRlclNpemUsXG4gICAgYm94U2l6aW5nXG4gIH07XG5cbiAgaWYgKHVzZUNhY2hlICYmIG5vZGVSZWYpIHtcbiAgICBjb21wdXRlZFN0eWxlQ2FjaGVbIG5vZGVSZWYgXSA9IG5vZGVJbmZvO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVJbmZvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjdWxhdGVOb2RlSGVpZ2h0KHVpVGV4dE5vZGU6IEhUTUxUZXh0QXJlYUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhY2hlOiBib29sZWFuICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUm93czogbnVtYmVyIHwgbnVsbCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M6IG51bWJlciB8IG51bGwgPSBudWxsKTogTm9kZVByb3BlcnR5IHtcbiAgaWYgKCFoaWRkZW5UZXh0YXJlYSkge1xuICAgIGhpZGRlblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlblRleHRhcmVhKTtcbiAgfVxuXG4gIC8vIEZpeCB3cmFwPVwib2ZmXCIgaXNzdWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNjU3N1xuICBpZiAodWlUZXh0Tm9kZS5nZXRBdHRyaWJ1dGUoJ3dyYXAnKSkge1xuICAgIGhpZGRlblRleHRhcmVhLnNldEF0dHJpYnV0ZSgnd3JhcCcsIHVpVGV4dE5vZGUuZ2V0QXR0cmlidXRlKCd3cmFwJykgYXMgc3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRkZW5UZXh0YXJlYS5yZW1vdmVBdHRyaWJ1dGUoJ3dyYXAnKTtcbiAgfVxuXG4gIC8vIENvcHkgYWxsIENTUyBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBhbiBpbXBhY3Qgb24gdGhlIGhlaWdodCBvZiB0aGUgY29udGVudCBpblxuICAvLyB0aGUgdGV4dGJveFxuICBjb25zdCB7XG4gICAgICAgICAgcGFkZGluZ1NpemUsIGJvcmRlclNpemUsXG4gICAgICAgICAgYm94U2l6aW5nLCBzaXppbmdTdHlsZVxuICAgICAgICB9ID0gY2FsY3VsYXRlTm9kZVN0eWxpbmcodWlUZXh0Tm9kZSwgdXNlQ2FjaGUpO1xuXG4gIC8vIE5lZWQgdG8gaGF2ZSB0aGUgb3ZlcmZsb3cgYXR0cmlidXRlIHRvIGhpZGUgdGhlIHNjcm9sbGJhciBvdGhlcndpc2VcbiAgLy8gdGV4dC1saW5lcyB3aWxsIG5vdCBjYWxjdWxhdGVkIHByb3Blcmx5IGFzIHRoZSBzaGFkb3cgd2lsbCB0ZWNobmljYWxseSBiZVxuICAvLyBuYXJyb3dlciBmb3IgY29udGVudFxuICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYCR7c2l6aW5nU3R5bGV9OyR7SElEREVOX1RFWFRBUkVBX1NUWUxFfWApO1xuICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9IHVpVGV4dE5vZGUudmFsdWUgfHwgdWlUZXh0Tm9kZS5wbGFjZWhvbGRlciB8fCAnJztcblxuICBsZXQgbWluSGVpZ2h0ID0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XG4gIGxldCBtYXhIZWlnaHQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgbGV0IGhlaWdodCA9IGhpZGRlblRleHRhcmVhLnNjcm9sbEhlaWdodDtcbiAgbGV0IG92ZXJmbG93WTogc3RyaW5nO1xuXG4gIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgIC8vIGJvcmRlci1ib3g6IGFkZCBib3JkZXIsIHNpbmNlIGhlaWdodCA9IGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyXG4gICAgaGVpZ2h0ID0gaGVpZ2h0ICsgYm9yZGVyU2l6ZTtcbiAgfSBlbHNlIGlmIChib3hTaXppbmcgPT09ICdjb250ZW50LWJveCcpIHtcbiAgICAvLyByZW1vdmUgcGFkZGluZywgc2luY2UgaGVpZ2h0ID0gY29udGVudFxuICAgIGhlaWdodCA9IGhlaWdodCAtIHBhZGRpbmdTaXplO1xuICB9XG5cbiAgaWYgKG1pblJvd3MgIT09IG51bGwgfHwgbWF4Um93cyAhPT0gbnVsbCkge1xuICAgIC8vIG1lYXN1cmUgaGVpZ2h0IG9mIGEgdGV4dGFyZWEgd2l0aCBhIHNpbmdsZSByb3dcbiAgICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9ICcnO1xuICAgIGNvbnN0IHNpbmdsZVJvd0hlaWdodCA9IGhpZGRlblRleHRhcmVhLnNjcm9sbEhlaWdodCAtIHBhZGRpbmdTaXplO1xuICAgIGlmIChtaW5Sb3dzICE9PSBudWxsKSB7XG4gICAgICBtaW5IZWlnaHQgPSBzaW5nbGVSb3dIZWlnaHQgKiBtaW5Sb3dzO1xuICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIG1pbkhlaWdodCA9IG1pbkhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgICAgIH1cbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKG1heFJvd3MgIT09IG51bGwpIHtcbiAgICAgIG1heEhlaWdodCA9IHNpbmdsZVJvd0hlaWdodCAqIG1heFJvd3M7XG4gICAgICBpZiAoYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgbWF4SGVpZ2h0ID0gbWF4SGVpZ2h0ICsgcGFkZGluZ1NpemUgKyBib3JkZXJTaXplO1xuICAgICAgfVxuICAgICAgb3ZlcmZsb3dZID0gaGVpZ2h0ID4gbWF4SGVpZ2h0ID8gJycgOiAnaGlkZGVuJztcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgLy8gUmVtb3ZlIHNjcm9sbCBiYXIgZmxhc2ggd2hlbiBhdXRvc2l6ZSB3aXRob3V0IG1heFJvd3NcbiAgaWYgKCFtYXhSb3dzKSB7XG4gICAgb3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gIH1cbiAgcmV0dXJuIHsgaGVpZ2h0LCBtaW5IZWlnaHQsIG1heEhlaWdodCwgb3ZlcmZsb3dZIH07XG59XG4iXX0=