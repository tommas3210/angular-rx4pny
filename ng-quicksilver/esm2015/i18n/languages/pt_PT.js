/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/pt_PT';
import DatePicker from './date-picker/pt_PT';
import Pagination from './pagination/pt_PT';
import TimePicker from './time-picker/pt_PT';
export default {
    locale: 'pt',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filtro',
        filterConfirm: 'Aplicar',
        filterReset: 'Reiniciar',
        emptyText: 'Sem resultados',
        selectAll: 'Selecionar página atual',
        selectInvert: 'Inverter seleção',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancelar',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancelar',
    },
    Transfer: {
        notFoundContent: 'Sem resultados',
        searchPlaceholder: 'Procurar...',
        itemUnit: 'item',
        itemsUnit: 'itens',
    },
    Select: {
        notFoundContent: 'Sem resultados',
    },
    Upload: {
        uploading: 'A carregar...',
        removeFile: 'Remover',
        uploadError: 'Erro ao carregar',
        previewFile: 'Pré-visualizar',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHRfUFQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImkxOG4vbGFuZ3VhZ2VzL3B0X1BULnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFFBQVEsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLFVBQVUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxlQUFlO0lBQ2IsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLFFBQVE7UUFDckIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixTQUFTLEVBQUUseUJBQXlCO1FBQ3BDLFlBQVksRUFBRSxrQkFBa0I7S0FDakM7SUFDRCxLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsVUFBVTtLQUN2QjtJQUNELFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxnQkFBZ0I7UUFDakMsaUJBQWlCLEVBQUUsYUFBYTtRQUNoQyxRQUFRLEVBQUUsTUFBTTtRQUNoQixTQUFTLEVBQUUsT0FBTztLQUNuQjtJQUNELE1BQU0sRUFBRTtRQUNOLGVBQWUsRUFBRSxnQkFBZ0I7S0FDbEM7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUUsZUFBZTtRQUMxQixVQUFVLEVBQUUsU0FBUztRQUNyQixXQUFXLEVBQUUsa0JBQWtCO1FBQy9CLFdBQVcsRUFBRSxnQkFBZ0I7S0FDOUI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY2FsZW5kYXIvcHRfUFQnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9kYXRlLXBpY2tlci9wdF9QVCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vcHRfUFQnO1xuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lLXBpY2tlci9wdF9QVCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9jYWxlOiAncHQnLFxuICBQYWdpbmF0aW9uLFxuICBEYXRlUGlja2VyLFxuICBUaW1lUGlja2VyLFxuICBDYWxlbmRhcixcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRybycsXG4gICAgZmlsdGVyQ29uZmlybTogJ0FwbGljYXInLFxuICAgIGZpbHRlclJlc2V0OiAnUmVpbmljaWFyJyxcbiAgICBlbXB0eVRleHQ6ICdTZW0gcmVzdWx0YWRvcycsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWNpb25hciBww6FnaW5hIGF0dWFsJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnRlciBzZWxlw6fDo28nLFxuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsYXInLFxuICAgIGp1c3RPa1RleHQ6ICdPSycsXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbGFyJyxcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdTZW0gcmVzdWx0YWRvcycsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdQcm9jdXJhci4uLicsXG4gICAgaXRlbVVuaXQ6ICdpdGVtJyxcbiAgICBpdGVtc1VuaXQ6ICdpdGVucycsXG4gIH0sXG4gIFNlbGVjdDoge1xuICAgIG5vdEZvdW5kQ29udGVudDogJ1NlbSByZXN1bHRhZG9zJyxcbiAgfSxcbiAgVXBsb2FkOiB7XG4gICAgdXBsb2FkaW5nOiAnQSBjYXJyZWdhci4uLicsXG4gICAgcmVtb3ZlRmlsZTogJ1JlbW92ZXInLFxuICAgIHVwbG9hZEVycm9yOiAnRXJybyBhbyBjYXJyZWdhcicsXG4gICAgcHJldmlld0ZpbGU6ICdQcsOpLXZpc3VhbGl6YXInLFxuICB9LFxufTtcbiJdfQ==