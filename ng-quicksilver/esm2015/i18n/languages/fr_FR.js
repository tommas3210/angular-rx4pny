/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/fr_FR';
import DatePicker from './date-picker/fr_FR';
import Pagination from './pagination/fr_FR';
import TimePicker from './time-picker/fr_FR';
export default {
    locale: 'fr',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filtrer',
        filterConfirm: 'OK',
        filterReset: 'Réinitialiser',
        emptyText: 'Aucune donnée',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Annuler',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Annuler',
    },
    Transfer: {
        notFoundContent: 'Pas de résultat',
        searchPlaceholder: 'Recherche',
        itemUnit: 'élément',
        itemsUnit: 'éléments',
    },
    Select: {
        notFoundContent: 'Pas de résultat',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJfRlIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImkxOG4vbGFuZ3VhZ2VzL2ZyX0ZSLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFNBQVM7UUFDdEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsU0FBUyxFQUFFLGVBQWU7S0FDM0I7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsU0FBUztLQUN0QjtJQUNELFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxpQkFBaUI7UUFDbEMsaUJBQWlCLEVBQUUsV0FBVztRQUM5QixRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsVUFBVTtLQUN0QjtJQUNELE1BQU0sRUFBRTtRQUNOLGVBQWUsRUFBRSxpQkFBaUI7S0FDbkM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvZnJfRlInO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9mcl9GUic7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vZnJfRlInO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9mcl9GUic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAnZnInLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRyZXInLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSw6lpbml0aWFsaXNlcicsXG4gICAgZW1wdHlUZXh0OiAnQXVjdW5lIGRvbm7DqWUnLFxuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQW5udWxlcicsXG4gICAganVzdE9rVGV4dDogJ09LJyxcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQW5udWxlcicsXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnUGFzIGRlIHLDqXN1bHRhdCcsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdSZWNoZXJjaGUnLFxuICAgIGl0ZW1Vbml0OiAnw6lsw6ltZW50JyxcbiAgICBpdGVtc1VuaXQ6ICfDqWzDqW1lbnRzJyxcbiAgfSxcbiAgU2VsZWN0OiB7XG4gICAgbm90Rm91bmRDb250ZW50OiAnUGFzIGRlIHLDqXN1bHRhdCcsXG4gIH0sXG59O1xuIl19