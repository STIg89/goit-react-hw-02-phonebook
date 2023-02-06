import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Notification = name => {
  return Notify.warning(`${name} is already in contacts`, {
    timeout: 2000,
    fontSize: '22px',
    position: 'center-center',
    cssAnimationStyle: 'zoom',
  });
};

Notification.propTypes = {
  name: PropTypes.string.isRequired,
};
