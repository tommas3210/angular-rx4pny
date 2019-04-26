/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function DwTreeNodeOptions() { }
function DwTreeNodeOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTreeNodeOptions.prototype.title;
    /** @type {?} */
    DwTreeNodeOptions.prototype.key;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.icon;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.isLeaf;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.checked;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.selected;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.selectable;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.disabled;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.disableCheckbox;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.expanded;
    /** @type {?|undefined} */
    DwTreeNodeOptions.prototype.children;
    /* TODO: handle strange member:
    [ key: string ]: any;
    */
}
var DwTreeNode = /** @class */ (function () {
    function DwTreeNode(option, parent) {
        if (parent === void 0) { parent = null; }
        var _this = this;
        this.level = 0;
        this.title = option.title || '---';
        this.key = option.key || null;
        this.isLeaf = option.isLeaf || false;
        this.origin = option;
        this.children = [];
        this.parentNode = parent;
        // option params
        this.isChecked = option.checked || false;
        this.isSelectable = option.disabled || (option.selectable === false ? false : true);
        this.isDisabled = option.disabled || false;
        this.isDisableCheckbox = option.disableCheckbox || false;
        this.isExpanded = option.isLeaf ? false : (option.expanded || false);
        this.isAllChecked = option.checked || false;
        this.isHalfChecked = false;
        this.isSelected = (!option.disabled && option.selected) || false;
        this.isLoading = false;
        this.isMatched = false;
        /**
             * parent's checked status will affect children while initializing
             */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof (option.children) !== 'undefined' && option.children !== null) {
            option.children.forEach(function (nodeOptions) {
                if (option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                _this.children.push(new DwTreeNode(nodeOptions, _this));
            });
        }
    }
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    DwTreeNode.prototype.setChecked = /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTreeNode.prototype.setExpanded = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.origin.expanded = value;
        this.isExpanded = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTreeNode.prototype.setSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.origin.selected = value;
        this.isSelected = value;
    };
    /**
     * @return {?}
     */
    DwTreeNode.prototype.getParentNode = /**
     * @return {?}
     */
    function () {
        return this.parentNode;
    };
    /**
     * @return {?}
     */
    DwTreeNode.prototype.getChildren = /**
     * @return {?}
     */
    function () {
        return this.children;
    };
    /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    DwTreeNode.prototype.addChildren = /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    function (children, childPos) {
        var _this = this;
        if (childPos === void 0) { childPos = -1; }
        if (!this.isLeaf) {
            children.forEach(function (node) {
                /** @type {?} */
                var refreshLevel = function (n) {
                    n.getChildren().forEach(function (c) {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                /** @type {?} */
                var child = node;
                if (child instanceof DwTreeNode) {
                    child.parentNode = _this;
                }
                else {
                    child = new DwTreeNode(node, _this);
                }
                child.level = _this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? _this.children.push(child) : _this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) {
                }
            });
            this.origin.children = this.getChildren().map(function (v) { return v.origin; });
            // remove loading state
            this.isLoading = false;
        }
    };
    /**
     * @return {?}
     */
    DwTreeNode.prototype.clearChildren = /**
     * @return {?}
     */
    function () {
        this.children = [];
    };
    return DwTreeNode;
}());
export { DwTreeNode };
function DwTreeNode_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTreeNode.prototype.title;
    /** @type {?} */
    DwTreeNode.prototype.key;
    /** @type {?} */
    DwTreeNode.prototype.level;
    /** @type {?} */
    DwTreeNode.prototype.children;
    /** @type {?} */
    DwTreeNode.prototype.isLeaf;
    /** @type {?} */
    DwTreeNode.prototype.origin;
    /** @type {?} */
    DwTreeNode.prototype.parentNode;
    /** @type {?} */
    DwTreeNode.prototype.isChecked;
    /** @type {?} */
    DwTreeNode.prototype.isSelectable;
    /** @type {?} */
    DwTreeNode.prototype.isDisabled;
    /** @type {?} */
    DwTreeNode.prototype.isDisableCheckbox;
    /** @type {?} */
    DwTreeNode.prototype.isExpanded;
    /** @type {?} */
    DwTreeNode.prototype.isHalfChecked;
    /** @type {?} */
    DwTreeNode.prototype.isAllChecked;
    /** @type {?} */
    DwTreeNode.prototype.isSelected;
    /** @type {?} */
    DwTreeNode.prototype.isLoading;
    /** @type {?} */
    DwTreeNode.prototype.isMatched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJlZS1ub2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0cmVlL2R3LXRyZWUtbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxJQUFBO0lBcUJFLG9CQUFZLE1BQXlCLEVBQUUsTUFBeUI7UUFBekIsdUJBQUEsRUFBQSxhQUF5QjtRQUFoRSxpQkFxQ0M7cUJBdkRlLENBQUM7UUFtQmYsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7O1FBRXpCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxD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QUFDO2lCQUNKLENBQUM7O2dCQUNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDakIsSUFBSSxLQUFLLFlBQVksVUFBVSxFQUFFO29CQUMvQixLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQztpQkFDekI7cUJBQU07b0JBQ0wsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsQ0FBQztpQkFDcEM7Z0JBQ0QsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDakMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixJQUFJO29CQUNGLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O2lCQUV4RjtnQkFBQyxPQUFPLENBQUMsRUFBRTtpQkFDWDthQUNGLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUFDOztZQUU3RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7Ozs7SUFHSSxrQ0FBYTs7OztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7cUJBNUl2QjtJQThJQyxDQUFBO0FBN0hELHNCQTZIQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgRHdUcmVlTm9kZU9wdGlvbnMge1xuICB0aXRsZTogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaXNMZWFmPzogYm9vbGVhbjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgc2VsZWN0YWJsZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhbjtcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICBjaGlsZHJlbj86IER3VHJlZU5vZGVPcHRpb25zW107XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBbIGtleTogc3RyaW5nIF06IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIER3VHJlZU5vZGUge1xuICB0aXRsZT86IHN0cmluZztcbiAga2V5Pzogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyID0gMDtcbiAgY2hpbGRyZW46IER3VHJlZU5vZGVbXTtcbiAgaXNMZWFmOiBib29sZWFuO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9yaWdpbjogYW55O1xuICAvLyBQYXJlbnQgTm9kZVxuICBwYXJlbnROb2RlOiBEd1RyZWVOb2RlO1xuICBpc0NoZWNrZWQ6IGJvb2xlYW47XG4gIGlzU2VsZWN0YWJsZTogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlQ2hlY2tib3g6IGJvb2xlYW47XG4gIGlzRXhwYW5kZWQ6IGJvb2xlYW47XG4gIGlzSGFsZkNoZWNrZWQ6IGJvb2xlYW47XG4gIGlzQWxsQ2hlY2tlZDogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBpc01hdGNoZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uOiBEd1RyZWVOb2RlT3B0aW9ucywgcGFyZW50OiBEd1RyZWVOb2RlID0gbnVsbCkge1xuICAgIHRoaXMudGl0bGUgPSBvcHRpb24udGl0bGUgfHwgJy0tLSc7XG4gICAgdGhpcy5rZXkgPSBvcHRpb24ua2V5IHx8IG51bGw7XG4gICAgdGhpcy5pc0xlYWYgPSBvcHRpb24uaXNMZWFmIHx8IGZhbHNlO1xuICAgIHRoaXMub3JpZ2luID0gb3B0aW9uO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnQ7XG4gICAgLy8gb3B0aW9uIHBhcmFtc1xuICAgIHRoaXMuaXNDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XG4gICAgdGhpcy5pc1NlbGVjdGFibGUgPSBvcHRpb24uZGlzYWJsZWQgfHwgKG9wdGlvbi5zZWxlY3RhYmxlID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkIHx8IGZhbHNlO1xuICAgIHRoaXMuaXNEaXNhYmxlQ2hlY2tib3ggPSBvcHRpb24uZGlzYWJsZUNoZWNrYm94IHx8IGZhbHNlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IG9wdGlvbi5pc0xlYWYgPyBmYWxzZSA6IChvcHRpb24uZXhwYW5kZWQgfHwgZmFsc2UpO1xuICAgIHRoaXMuaXNBbGxDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XG4gICAgdGhpcy5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gKCFvcHRpb24uZGlzYWJsZWQgJiYgb3B0aW9uLnNlbGVjdGVkKSB8fCBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNNYXRjaGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBwYXJlbnQncyBjaGVja2VkIHN0YXR1cyB3aWxsIGFmZmVjdCBjaGlsZHJlbiB3aGlsZSBpbml0aWFsaXppbmdcbiAgICAgKi9cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB0aGlzLmxldmVsID0gcGFyZW50LmxldmVsICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgfVxuICAgIGlmICh0eXBlb2Yob3B0aW9uLmNoaWxkcmVuKSAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9uLmNoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChcbiAgICAgICAgKG5vZGVPcHRpb25zKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbi5jaGVja2VkICYmICFvcHRpb24uZGlzYWJsZWQgJiYgIW5vZGVPcHRpb25zLmRpc2FibGVkICYmICFub2RlT3B0aW9ucy5kaXNhYmxlQ2hlY2tib3gpIHtcbiAgICAgICAgICAgIG5vZGVPcHRpb25zLmNoZWNrZWQgPSBvcHRpb24uY2hlY2tlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKG5ldyBEd1RyZWVOb2RlKG5vZGVPcHRpb25zLCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldENoZWNrZWQoY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlLCBoYWxmQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5vcmlnaW4uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuaXNBbGxDaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmlzSGFsZkNoZWNrZWQgPSBoYWxmQ2hlY2tlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRFeHBhbmRlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3JpZ2luLmV4cGFuZGVkID0gdmFsdWU7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9yaWdpbi5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmVudE5vZGUoKTogRHdUcmVlTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZHJlbigpOiBEd1RyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIOaUr+aMgeaMiee0ouW8leS9jee9ruaPkuWFpSzlj7blrZDoioLngrnkuI3lj6/mt7vliqBcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHVibGljIGFkZENoaWxkcmVuKGNoaWxkcmVuOiBhbnlbXSwgY2hpbGRQb3M6IG51bWJlciA9IC0xKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTGVhZikge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChcbiAgICAgICAgKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCByZWZyZXNoTGV2ZWwgPSAobjogRHdUcmVlTm9kZSkgPT4ge1xuICAgICAgICAgICAgbi5nZXRDaGlsZHJlbigpLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgIGMubGV2ZWwgPSBjLmdldFBhcmVudE5vZGUoKS5sZXZlbCArIDE7XG4gICAgICAgICAgICAgIC8vIGZsdXNoIG9yaWdpblxuICAgICAgICAgICAgICBjLm9yaWdpbi5sZXZlbCA9IGMubGV2ZWw7XG4gICAgICAgICAgICAgIHJlZnJlc2hMZXZlbChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbGV0IGNoaWxkID0gbm9kZTtcbiAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBEd1RyZWVOb2RlKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQgPSBuZXcgRHdUcmVlTm9kZShub2RlLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGQubGV2ZWwgPSB0aGlzLmxldmVsICsgMTtcbiAgICAgICAgICBjaGlsZC5vcmlnaW4ubGV2ZWwgPSBjaGlsZC5sZXZlbDtcbiAgICAgICAgICByZWZyZXNoTGV2ZWwoY2hpbGQpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZFBvcyA9PT0gLTEgPyB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpIDogdGhpcy5jaGlsZHJlbi5zcGxpY2UoY2hpbGRQb3MsIDAsIGNoaWxkKTtcbiAgICAgICAgICAgIC8vIGZsdXNoIG9yaWdpblxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5vcmlnaW4uY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCkubWFwKHYgPT4gdi5vcmlnaW4pO1xuICAgICAgLy8gcmVtb3ZlIGxvYWRpbmcgc3RhdGVcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG59XG4iXX0=