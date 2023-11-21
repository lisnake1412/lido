import styles from './notificationBot.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function NotificationBot() {
    return (
        <section id="notification-bot" className={cx('wrapper')}>
            <div className={cx('container')}>
                <img
                    src="https://lido.fi/static/images/index/notification-bot/telegram-logo.svg"
                    alt="svg"
                
                />
                <div>
                    <h2>Governance Notification Bot</h2>
                    <p>Stay up to speed with Lido governance developments</p>
                </div>
                    <Button type="white" href="https://t.me/lido_dao_bot" target="blank"  style={{width:"146px",height:"56px"}}>Get notified</Button>
            </div>
        </section>
    );
}

export default NotificationBot;
