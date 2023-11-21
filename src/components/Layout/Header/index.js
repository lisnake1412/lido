import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import DropDownMenu from '~/components/DropDownMenu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header id="header" className={cx('wrapper')} style={{ right: 0 }}>
            <div className={cx('container')}>
                <div className={cx('logo-wrapper')}>
                    <a aria-label="Main page" href="/">
                        <svg className={cx('icon')} height={44} width={88}>
                            <use xlinkHref="#logo-new" />
                        </svg>
                    </a>
                </div>
                <nav className={cx('lists-wrapper')}>
                    <DropDownMenu/>
                </nav>
                <div className={cx('button-wrapper')} >
                    <Button target="blank" type="blue" style={{height:44}}>
                        <img src="https://lido.fi/static/images/header/twitter.svg" alt="" className={cx('twitter-logo')} />
                        <span>Join Twitter</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
