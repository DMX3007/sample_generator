const dateTimeRangePicker = function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      const format = 'YYYY-MM-DD';
      element.daterangepicker({
        locale: {
          'format': 'YYYY-MM-DD',
          'separator': ' - ',
          'applyLabel': 'Применить',
          'cancelLabel': 'Отмена',
          'fromLabel': 'От',
          'toLabel': 'До',
          'customRangeLabel': 'Выбрать',
          'weekLabel': 'W',
          'daysOfWeek': ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
          'monthNames': [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
          ],
          'firstDay': 1,
        },
        alwaysShowCalendars: true,
        startDate: moment(moment().format('YY-MM-DD 00:00:00'), format),
        endDate: moment(moment().format('YY-MM-DD 23:59:59'), format),
        maxDate: moment(moment().format('YY-MM-DD 23:59:59'), format),
        timePicker: false,
        timePicker24Hour: false,
        ranges: {
          'Сегодня': [
            moment(moment().format('YY-MM-DD 00:00:00'), format),
            moment(moment().format('YY-MM-DD 23:59:59'), format),
          ],
          'Вчера': [
            moment(moment().format('YY-MM-DD 00:00:00'), format).
                subtract(1, 'days'),
            moment(moment().format('YY-MM-DD 23:59:59'), format).
                subtract(1, 'days'),
          ],
          'Последние 7 дней': [
            moment(moment().format('YY-MM-DD 00:00:00'), format).
                subtract(6, 'days'),
            moment(moment().format('YY-MM-DD 23:59:59'), format),
          ],
          'Последние 30 дней': [
            moment(moment().format('YY-MM-DD 00:00:00'), format).
                subtract(29, 'days'),
            moment(moment().format('YY-MM-DD 23:59:59'), format),
          ],
        },
      });
    },
  };
};

export {dateTimeRangePicker};
