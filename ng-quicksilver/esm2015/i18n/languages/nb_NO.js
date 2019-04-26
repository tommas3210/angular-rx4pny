/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/nb_NO';
import DatePicker from './date-picker/nb_NO';
import Pagination from './pagination/nb_NO';
import TimePicker from './time-picker/nb_NO';
export default {
    locale: 'nb',
    DatePicker,
    TimePicker,
    Calendar,
    Pagination,
    Table: {
        filterTitle: 'Filtermeny',
        filterConfirm: 'OK',
        filterReset: 'Nullstill',
        emptyText: 'Ingen data',
        selectAll: 'Velg alle',
        selectInvert: 'Inverter valg',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Avbryt',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Avbryt',
    },
    Transfer: {
        notFoundContent: 'Ingen treff',
        searchPlaceholder: 'Søk her',
        itemUnit: 'element',
        itemsUnit: 'elementer',
    },
    Select: {
        notFoundContent: 'Ingen treff',
    },
    Upload: {
        uploading: 'Laster opp...',
        removeFile: 'Fjern fil',
        uploadError: 'Feil ved opplastning',
        previewFile: 'Forhåndsvisning',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmJfTk8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImkxOG4vbGFuZ3VhZ2VzL25iX05PLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFlBQVk7UUFDekIsYUFBYSxFQUFFLElBQUk7UUFDbkIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFLFlBQVk7UUFDdkIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsWUFBWSxFQUFFLGVBQWU7S0FDOUI7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsUUFBUTtLQUNyQjtJQUNELFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxhQUFhO1FBQzlCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLFdBQVc7S0FDdkI7SUFDRCxNQUFNLEVBQUU7UUFDTixlQUFlLEVBQUUsYUFBYTtLQUMvQjtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxlQUFlO1FBQzFCLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsV0FBVyxFQUFFLGlCQUFpQjtLQUMvQjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhci9uYl9OTyc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL2RhdGUtcGlja2VyL25iX05PJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vcGFnaW5hdGlvbi9uYl9OTyc7XG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL25iX05PJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2NhbGU6ICduYicsXG4gIERhdGVQaWNrZXIsXG4gIFRpbWVQaWNrZXIsXG4gIENhbGVuZGFyLFxuICBQYWdpbmF0aW9uLFxuICBUYWJsZToge1xuICAgIGZpbHRlclRpdGxlOiAnRmlsdGVybWVueScsXG4gICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICBmaWx0ZXJSZXNldDogJ051bGxzdGlsbCcsXG4gICAgZW1wdHlUZXh0OiAnSW5nZW4gZGF0YScsXG4gICAgc2VsZWN0QWxsOiAnVmVsZyBhbGxlJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnRlciB2YWxnJyxcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0F2YnJ5dCcsXG4gICAganVzdE9rVGV4dDogJ09LJyxcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQXZicnl0JyxcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdJbmdlbiB0cmVmZicsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTw7hrIGhlcicsXG4gICAgaXRlbVVuaXQ6ICdlbGVtZW50JyxcbiAgICBpdGVtc1VuaXQ6ICdlbGVtZW50ZXInLFxuICB9LFxuICBTZWxlY3Q6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdJbmdlbiB0cmVmZicsXG4gIH0sXG4gIFVwbG9hZDoge1xuICAgIHVwbG9hZGluZzogJ0xhc3RlciBvcHAuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdGamVybiBmaWwnLFxuICAgIHVwbG9hZEVycm9yOiAnRmVpbCB2ZWQgb3BwbGFzdG5pbmcnLFxuICAgIHByZXZpZXdGaWxlOiAnRm9yaMOlbmRzdmlzbmluZycsXG4gIH0sXG59O1xuIl19