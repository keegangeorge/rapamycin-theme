import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  api.changeWidgetSetting('home-logo', 'href', '/news');
  $(document).ready(function () {
    $('#logo-link').attr('href', '/news');
  });
});
