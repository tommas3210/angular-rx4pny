/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} prefix
 * @return {?}
 */
export function getRegExp(prefix) {
    /** @type {?} */
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    /** @type {?} */
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = `[${prefixToken}]`;
    }
    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function getMentions(value, prefix = '@') {
    if (typeof value !== 'string') {
        return [];
    }
    /** @type {?} */
    const regex = getRegExp(prefix);
    /** @type {?} */
    const mentions = value.match(regex);
    return mentions !== null ? mentions.map(e => e.trim()) : [];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC9nZXRNZW50aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLE1BQU0sb0JBQW9CLE1BQXlCOztJQUNqRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzlELElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLFdBQVcsR0FBRyxJQUFJLFdBQVcsR0FBRyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxXQUFXLFdBQVcsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzFEOzs7Ozs7QUFFRCxNQUFNLHNCQUFzQixLQUFhLEVBQUUsU0FBNEIsR0FBRztJQUN4RSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLEVBQUUsQ0FBQztLQUNYOztJQUNELE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFDaEMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxPQUFPLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0NBQzdEIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVnRXhwKHByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10pOiBSZWdFeHAge1xuICBjb25zdCBwcmVmaXhBcnJheSA9IEFycmF5LmlzQXJyYXkocHJlZml4KSA/IHByZWZpeCA6IFtwcmVmaXhdO1xuICBsZXQgcHJlZml4VG9rZW4gPSBwcmVmaXhBcnJheS5qb2luKCcnKS5yZXBsYWNlKC8oXFwkfFxcXikvZywgJ1xcXFwkMScpO1xuXG4gIGlmIChwcmVmaXhBcnJheS5sZW5ndGggPiAxKSB7XG4gICAgcHJlZml4VG9rZW4gPSBgWyR7cHJlZml4VG9rZW59XWA7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChgKFxcXFxzfF4pKCR7cHJlZml4VG9rZW59KVteXFxcXHNdKmAsICdnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW50aW9ucyh2YWx1ZTogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdID0gJ0AnKTogc3RyaW5nW10ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCByZWdleCA9IGdldFJlZ0V4cChwcmVmaXgpO1xuICBjb25zdCBtZW50aW9ucyA9IHZhbHVlLm1hdGNoKHJlZ2V4KTtcbiAgcmV0dXJuIG1lbnRpb25zICE9PSBudWxsID8gbWVudGlvbnMubWFwKGUgPT4gZS50cmltKCkpIDogW107XG59XG4iXX0=