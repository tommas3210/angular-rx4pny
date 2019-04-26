export interface DwPaginationI18nInterface {
    items_per_page: string;
    jump_to: string;
    jump_to_confirm: string;
    page: string;
    prev_page: string;
    next_page: string;
    prev_5: string;
    next_5: string;
    prev_3: string;
    next_3: string;
}
export interface DwDatePickerI18nInterface {
    lang: DwDatePickerLangI18nInterface;
    timePickerLocale: DwTimePickerI18nInterface;
}
export interface DwDatePickerLangI18nInterface extends DwCalendarI18nInterface {
    placeholder: string;
    rangePlaceholder: string[];
}
export interface DwTimePickerI18nInterface {
    placeholder: string;
}
export interface DwCalendarI18nInterface {
    today: string;
    now: string;
    backToToday: string;
    ok: string;
    clear: string;
    month: string;
    year: string;
    timeSelect: string;
    dateSelect: string;
    monthSelect: string;
    yearSelect: string;
    decadeSelect: string;
    yearFormat: string;
    monthFormat?: string;
    dateFormat: string;
    dayFormat: string;
    dateTimeFormat: string;
    monthBeforeYear?: boolean;
    previousMonth: string;
    nextMonth: string;
    previousYear: string;
    nextYear: string;
    previousDecade: string;
    nextDecade: string;
    previousCentury: string;
    nextCentury: string;
}
export interface DwI18nInterface {
    locale: string;
    Pagination: DwPaginationI18nInterface;
    DatePicker: DwDatePickerI18nInterface;
    TimePicker: DwTimePickerI18nInterface;
    Calendar: DwCalendarI18nInterface;
    Table: {
        filterTitle: string;
        filterConfirm: string;
        filterReset: string;
        emptyText: string;
        selectAll: string;
        selectInvert: string;
    };
    Modal: {
        okText: string;
        cancelText: string;
        justOkText: string;
    };
    Popconfirm: {
        okText: string;
        cancelText: string;
    };
    Transfer: {
        titles?: string[];
        notFoundContent: string;
        searchPlaceholder: string;
        itemUnit: string;
        itemsUnit: string;
    };
    Select: {
        notFoundContent: string;
    };
    Upload: {
        uploading: string;
        removeFile: string;
        uploadError: string;
        previewFile: string;
    };
}
