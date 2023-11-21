import styles from './ecosystem.module.scss';
import classNames from 'classnames/bind';

import fox from '~/assets/image/firstPage/fox.svg'
const cx = classNames.bind(styles);

function SecondPage() {
    return (
        <div className={cx('wrapper')}>
            <h2>A growing Lido ecosystem</h2>
            <p>Lido empowers stakers to put their staked tokens to use. Explore apps and services integrated with Lido.</p>
            <div className={cx('container')}>
                <div className={cx('button-container')}>
                    <a className={cx('button')} href="#home" >
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                                A crypto wallet & gateway to blockchain apps.
                                A crypto wallet & gateway to blockchain apps.
                                A crypto wallet 
                                & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>
                    <a className={cx('button')} href="#home">
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>

                    <a className={cx('button')} href="#home">
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>

                    <a className={cx('button')} href="#home">
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>

                    <a className={cx('button')} href="#home">
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>

                    <a className={cx('button')} href="#home">
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>

                    <a className={cx('button')} href="#home">
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>

                    <a className={cx('button')} href="#home">
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>

                    <a className={cx('button')} href="#home">
                        <div>
                            <img src={fox} alt="icon"></img>
                        </div>
                        <div className={cx('text-box')}>
                            <h2>
                                MetaMask
                            </h2>
                            <p>
                                A crypto wallet & gateway to blockchain apps.
                            </p>
                        </div>
                    </a>



                </div>
                <div className={cx('wrap-button')}>
                   
                </div>
            </div>
            <div className={cx('image')}>
               
            </div>
            <div className={cx('faded')}></div>
        </div>
    );
}

export default SecondPage;
