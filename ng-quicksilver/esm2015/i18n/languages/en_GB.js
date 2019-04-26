/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/en_GB';
import DatePicker from './date-picker/en_GB';
import Pagination from './pagination/en_GB';
import TimePicker from './time-picker/en_GB';
export default {
    locale: 'en-gb',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel',
    },
    Transfer: {
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items',
    },
    Select: {
        notFoundContent: 'Not Found',
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5fR0IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImkxOG4vbGFuZ3VhZ2VzL2VuX0dCLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLE9BQU87SUFDZixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLGFBQWE7UUFDMUIsYUFBYSxFQUFFLElBQUk7UUFDbkIsV0FBVyxFQUFFLE9BQU87UUFDcEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxZQUFZLEVBQUUscUJBQXFCO0tBQ3BDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsV0FBVztRQUM1QixpQkFBaUIsRUFBRSxhQUFhO1FBQ2hDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsTUFBTSxFQUFFO1FBQ04sZUFBZSxFQUFFLFdBQVc7S0FDN0I7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsY0FBYztRQUN6QixVQUFVLEVBQUUsYUFBYTtRQUN6QixXQUFXLEVBQUUsY0FBYztRQUMzQixXQUFXLEVBQUUsY0FBYztLQUM1QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhci9lbl9HQic7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL2RhdGUtcGlja2VyL2VuX0dCJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vcGFnaW5hdGlvbi9lbl9HQic7XG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL2VuX0dCJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2NhbGU6ICdlbi1nYicsXG4gIFBhZ2luYXRpb24sXG4gIERhdGVQaWNrZXIsXG4gIFRpbWVQaWNrZXIsXG4gIENhbGVuZGFyLFxuICBUYWJsZToge1xuICAgIGZpbHRlclRpdGxlOiAnRmlsdGVyIG1lbnUnLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSZXNldCcsXG4gICAgZW1wdHlUZXh0OiAnTm8gZGF0YScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZScsXG4gIH0sXG4gIE1vZGFsOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgIGp1c3RPa1RleHQ6ICdPSycsXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnTm90IEZvdW5kJyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJyxcbiAgfSxcbiAgU2VsZWN0OiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnTm90IEZvdW5kJyxcbiAgfSxcbiAgVXBsb2FkOiB7XG4gICAgdXBsb2FkaW5nOiAnVXBsb2FkaW5nLi4uJyxcbiAgICByZW1vdmVGaWxlOiAnUmVtb3ZlIGZpbGUnLFxuICAgIHVwbG9hZEVycm9yOiAnVXBsb2FkIGVycm9yJyxcbiAgICBwcmV2aWV3RmlsZTogJ1ByZXZpZXcgZmlsZScsXG4gIH0sXG59O1xuIl19