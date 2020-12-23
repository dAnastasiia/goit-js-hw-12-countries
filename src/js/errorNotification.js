import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';
import { error } from '@pnotify/core';

defaults.styling = 'brighttheme';
defaults.icons = 'brighttheme';

defaultModules.set(PNotifyMobile, {});

function errorNotification(text) {
  defaults.delay = 1000;
  error({
    text: text,
  });
}
export default errorNotification;
