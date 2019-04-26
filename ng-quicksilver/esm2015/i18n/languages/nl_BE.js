/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/nl_BE';
import DatePicker from './date-picker/nl_BE';
import Pagination from './pagination/nl_BE';
import TimePicker from './time-picker/nl_BE';
export default {
    locale: 'nl-be',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'FilterMenu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'Geen gegevens',
        selectAll: 'Selecteer huidige pagina',
        selectInvert: 'Selecteer huidige pagina',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuleer',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuleer',
    },
    Transfer: {
        notFoundContent: 'Niet gevonden',
        searchPlaceholder: 'Zoek hier',
        itemUnit: 'item',
        itemsUnit: 'items',
    },
    Select: {
        notFoundContent: 'Niet gevonden',
    },
    Upload: {
        uploading: 'Uploaden...',
        removeFile: 'Bestand verwijderen',
        uploadError: 'Upload fout',
        previewFile: 'Preview bestand',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmxfQkUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImkxOG4vbGFuZ3VhZ2VzL25sX0JFLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLE9BQU87SUFDZixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFlBQVk7UUFDekIsYUFBYSxFQUFFLElBQUk7UUFDbkIsV0FBVyxFQUFFLE9BQU87UUFDcEIsU0FBUyxFQUFFLGVBQWU7UUFDMUIsU0FBUyxFQUFFLDBCQUEwQjtRQUNyQyxZQUFZLEVBQUUsMEJBQTBCO0tBQ3pDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsVUFBVTtRQUN0QixVQUFVLEVBQUUsSUFBSTtLQUNqQjtJQUNELFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFVBQVU7S0FDdkI7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsZUFBZTtRQUNoQyxpQkFBaUIsRUFBRSxXQUFXO1FBQzlCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsTUFBTSxFQUFFO1FBQ04sZUFBZSxFQUFFLGVBQWU7S0FDakM7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsYUFBYTtRQUN4QixVQUFVLEVBQUUscUJBQXFCO1FBQ2pDLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFdBQVcsRUFBRSxpQkFBaUI7S0FDL0I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvbmxfQkUnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9ubF9CRSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vbmxfQkUnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9ubF9CRSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnbmwtYmUnLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRlck1lbnUnLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSZXNldCcsXG4gICAgZW1wdHlUZXh0OiAnR2VlbiBnZWdldmVucycsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0ZWVyIGh1aWRpZ2UgcGFnaW5hJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdTZWxlY3RlZXIgaHVpZGlnZSBwYWdpbmEnLFxuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQW5udWxlZXInLFxuICAgIGp1c3RPa1RleHQ6ICdPSycsXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0FubnVsZWVyJyxcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdOaWV0IGdldm9uZGVuJyxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1pvZWsgaGllcicsXG4gICAgaXRlbVVuaXQ6ICdpdGVtJyxcbiAgICBpdGVtc1VuaXQ6ICdpdGVtcycsXG4gIH0sXG4gIFNlbGVjdDoge1xuICAgIG5vdEZvdW5kQ29udGVudDogJ05pZXQgZ2V2b25kZW4nLFxuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRlbi4uLicsXG4gICAgcmVtb3ZlRmlsZTogJ0Jlc3RhbmQgdmVyd2lqZGVyZW4nLFxuICAgIHVwbG9hZEVycm9yOiAnVXBsb2FkIGZvdXQnLFxuICAgIHByZXZpZXdGaWxlOiAnUHJldmlldyBiZXN0YW5kJyxcbiAgfSxcbn07XG4iXX0=