import styles from './support.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SupportedNetwork() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Supported networks</h2>
                <p>Lido lets you stake tokens from many networks. Choose a network below to get started.</p>
                <div className={cx('list-box')}>
                    <div className={cx('box')}>
                        <a className={cx('score-card')} href="/scorecard">
                            Scorecard
                        </a>
                        <img src="https://lido.fi/static/images/index/network/ethereum-logo.svg" alt="" />
                        <h2>Ethereum</h2>
                        <p>
                            Stake any amount of ETH, get daily staking rewards and use your stETH across the DeFi
                            ecosystem and L2.
                        </p>
                        <div className={cx('ratio-box')}>
                            <div>
                                <span data-testid="apr">
                                    3.6%
                                </span>
                                <div>
                                    <p>APR</p>
                                </div>
                            </div>
                            <div></div>
                            <div>
                                <span data-testid="staked">
                                    $14,201,372,201
                                </span>
                                <p>Staked</p>
                            </div>
                        </div>
                        <div className={cx('wrap-button')}>
                            <Button type="black">Learn more</Button>
                            <Button type="blue" href="https://stake.lido.fi" target="blank" >
                                Stake now
                            </Button>
                        </div>
                    </div>

                    {/* Polygon Card */}
                    <div
                        className={cx('box')}
                    
                    >
                        <img src="https://lido.fi/static/images/index/network/polygon-logo.svg" alt="" />
                        <h2>Polygon</h2>
                        <p>
                            Stake MATIC tokens to support network decentralisation and watch your stMATIC value grow.
                            Staking does not mean locking anymore.
                        </p>
                        <div className={cx('ratio-box')}>
                            <div>
                                <span data-testid="apr">
                                    4.2%
                                </span>
                                <div>
                                    <p>APR</p>
                                </div>
                            </div>
                            <div></div>
                            <div>
                                <span data-testid="staked">
                                    $74,634,970
                                </span>
                                <p>Staked</p>
                            </div>
                        </div>
                        <div className={cx('wrap-button')}>
                            <Button type="black">Learn more</Button>
                            <Button type="blue" href="https://stake.lido.fi" target="blank" >
                                Stake now
                            </Button>
                        </div>
                    </div>

                    {/* Solana Card */}
                    <div
                        className={cx('box')}
                    
                    >
                        <img src="https://lido.fi/static/images/index/network/solana-logo-v2.svg" alt="" />
                        <h2>Solana</h2>
                        <p>
                            Stake your SOL and receive stSOL. Use your stSOL to get additional rewards and put your
                            staked SOL to work across the Solana ecosystem.
                        </p>
                        <div className={cx('ratio-box')}>
                            <div>
                                <span data-testid="apr">
                                    6.5%
                                </span>
                                <div>
                                    <p>APR</p>
                                </div>
                            </div>
                            <div></div>
                            <div>
                                <span data-testid="staked">
                                    $53,560,842
                                </span>
                                <p>Staked</p>
                            </div>
                        </div>
                        <div className={cx('wrap-button')}>
                            <Button type="black">Learn more</Button>
                            <Button type="blue" href="https://stake.lido.fi" target="blank" >
                                Stake now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('beach-image')}>
                <img src="https://lido.fi/static/images/index/network/beach-1.svg" alt="" />
                <img src="https://lido.fi/static/images/index/network/stone-1.svg" alt="" />
                <img src="https://lido.fi/static/images/index/network/stone-2.svg" alt="" />
            </div>
            <div className={cx('shape-image')}>
                <img src="https://lido.fi/static/images/index/network/beach-2.svg" alt="" />
            </div>
            <div className={cx('coconut-image')}>
                <img src="https://lido.fi/static/images/index/network/plant-1.svg" alt="" />
                <img src="https://lido.fi/static/images/index/network/plant-2.svg" alt="" />
            </div>
        </section>
    );
}

export default SupportedNetwork;
