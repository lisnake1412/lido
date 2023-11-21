import styles from './Email.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Email() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Subscribe to our mailing list</h2>
                <p>Stay up to date with Lido developments</p>

                <form className={cx('content')}>
                    <div className={cx('input-form')}>
                        <label className={cx('email-label')}>Email address</label>
                        <input className={cx('email-input')}></input>
                    </div>
                    <div className={cx('button')}>
                        <Button type="blue" style={{height:"100%", borderRadius:6}}>Subscribe</Button>
                    </div>
                   
                </form>
                <p>
                    By subscribing you accept our
                    <a target="_blank" rel="noopener" href="/privacy-notice">
                        &nbsp;Privacy Notice
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Email;
