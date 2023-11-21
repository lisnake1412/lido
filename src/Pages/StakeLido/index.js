import styles from './StakeLido.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function StakeLido() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h2 style={{ color: '#273852' }}>
                        Stake with Lido
                    </h2>
                    <p style={{ color: '#7A8AA0' }}>
                        Lido provides liquid staking for the following networks:
                    </p>
                    <div className={cx('list-box')}>
                        <div className={cx('box')}>
                            <img
                                src="https://lido.fi/static/images/index/network/ethereum-logo.svg"
                                alt="Ethereum"
                            />
                            <span>3.6%</span>
                            <p>APR</p>
                            <a href="https://stake.lido.fi" target="blank">
                                <span><Button type="blue">Stake now</Button></span>
                            </a>
                        </div>
                        <div className={cx('box')}>
                            <img src="https://lido.fi/static/images/index/network/polygon-logo.svg" alt="Polygon" />
                            <span>4.2%</span>
                            <p>APR</p>
                            <a href="https://polygon.lido.fi" target="blank">
                            <span><Button type="blue">Stake now</Button></span>
                            </a>
                        </div>
                        <div className={cx('box')}>
                            <img
                                src="https://lido.fi/static/images/index/network/solana-logo-v2.svg"
                                alt="Solana"
                            />
                            <span>6.5%</span>
                            <p>APR</p>
                            <a href="https://solana.lido.fi" target="blank">
                                <span><Button type="blue">Stake now</Button></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StakeLido;
