import styles from './howItWork.module.scss';
import classNames from 'classnames/bind';

import stake1 from "~/assets/icon/HowItWork/stake1.svg"
import mint from "~/assets/icon/HowItWork/mint.svg"
import defi2 from "~/assets/icon/HowItWork/defi2.svg"

const cx = classNames.bind(styles);

function howItWork() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>How Lido works</h2>
                <div className={cx('list-box')}>
                    {/* Step 1 */}
                    <div className={cx('box')}>
                        <span>Step 1</span>
                        <div>
                            <img src={stake1} alt="stake-1"/>
                        </div>
                        <div>
                            <span>Step 1</span>
                            <h2>Stake</h2>
                            <p>Stake any amount of your tokens to access daily staking rewards</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={cx('box')}>
                        <span>Step 2</span>
                        <div>
                            <img src={mint} alt='mint'/>
                        </div>
                        <div>
                            <span>Step 2</span>
                            <h2>Receive stToken</h2>
                            <p>Receive liquid stTokens and start to receive rewards in real-time</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className={cx('box')}>
                        <span>Step 3</span>
                        <div>
                            <img src={defi2} alt="defi-2"/>
                        </div>
                        <div>
                            <span>Step 3</span>
                            <h2>Use in DeFi</h2>
                            <p>
                                Use your stTokens across DeFi to compound more to your daily staked rewards
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default howItWork;
