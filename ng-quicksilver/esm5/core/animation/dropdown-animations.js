/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export var dropDownAnimation = trigger('dropDownAnimation', [
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    transition('void => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }),
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
    ]),
    transition('bottom => void', [
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }))
    ]),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('void => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }),
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
    ]),
    transition('top => void', [
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }))
    ])
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBRVIsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsV0FBYSxpQkFBaUIsR0FBNkIsT0FBTyxDQUFDLG1CQUFtQixFQUFFO0lBQ3RGLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sRUFBVSxDQUFDO1FBQ2xCLFNBQVMsRUFBUSxXQUFXO1FBQzVCLGVBQWUsRUFBRSxPQUFPO0tBQ3pCLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUMzQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDO1FBQ0YsT0FBTyxDQUFDLHNDQUFzQyxDQUFDO0tBQ2hELENBQUM7SUFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7UUFDM0IsT0FBTyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQztZQUNwRCxPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDLENBQUM7S0FDSixDQUFDO0lBQ0YsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDakIsT0FBTyxFQUFVLENBQUM7UUFDbEIsU0FBUyxFQUFRLFdBQVc7UUFDNUIsZUFBZSxFQUFFLFNBQVM7S0FDM0IsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLGFBQWEsRUFBRTtRQUN4QixLQUFLLENBQUM7WUFDSixPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsU0FBUztTQUMzQixDQUFDO1FBQ0YsT0FBTyxDQUFDLHNDQUFzQyxDQUFDO0tBQ2hELENBQUM7SUFDRixVQUFVLENBQUMsYUFBYSxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLENBQUM7WUFDcEQsT0FBTyxFQUFVLENBQUM7WUFDbEIsU0FBUyxFQUFRLGFBQWE7WUFDOUIsZUFBZSxFQUFFLFNBQVM7U0FDM0IsQ0FBQyxDQUFDO0tBQ0osQ0FBQztDQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlcixcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgZHJvcERvd25BbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2Ryb3BEb3duQW5pbWF0aW9uJywgW1xuICBzdGF0ZSgnYm90dG9tJywgc3R5bGUoe1xuICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICB9KSksXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYm90dG9tJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgIH0pLFxuICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScpXG4gIF0pLFxuICB0cmFuc2l0aW9uKCdib3R0b20gPT4gdm9pZCcsIFtcbiAgICBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICB9KSlcbiAgXSksXG4gIHN0YXRlKCd0b3AnLCBzdHlsZSh7XG4gICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgfSkpLFxuICB0cmFuc2l0aW9uKCd2b2lkID0+IHRvcCcsIFtcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICAgIH0pLFxuICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScpXG4gIF0pLFxuICB0cmFuc2l0aW9uKCd0b3AgPT4gdm9pZCcsIFtcbiAgICBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLCBzdHlsZSh7XG4gICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICAgIH0pKVxuICBdKVxuXSk7XG4iXX0=