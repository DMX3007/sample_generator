const Notification = [
  function() {
    return {
      renderError: function(message) {
        return $.jGrowl(message, {
          header: 'Ошибка',
          theme: 'error',
          life: 20000,
        });
      },
      renderSuccess: function(message) {
        return $.jGrowl(message, {
          header: 'Выполнено',
          theme: 'success',
          life: 5000,
        });
      },
      renderWarning: function(message) {
        return $.jGrowl(message, {
          header: 'Предупрежденние',
          theme: 'warning',
          life: 5000,
        });
      },
      confirm: function(message, cb) {
        if (confirm(message)) {
          return cb();
        }
      },
    };
  },
];
export {Notification};
