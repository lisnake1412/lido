import styles from './lidoDAO.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LidoDAO() {
    return (
        <section id="lido-dao" className={cx('wrapper')} data-track-content="true" data-content-name="the Lido DAO">
            <div className={cx('container')}>
                <h2>Lido DAO</h2>
                <p style={{ color: '#7A8AA0' }}>
                    The Lido DAO is a Decentralized Autonomous Organization that decides on the key parameters of liquid
                    staking protocols through the voting power of governance token (LDO) tokens.
                </p>
                <div className={cx('list-box')}>
                    <a className={cx('left-big-box')} href="/governance">
                        <img src="https://lido.fi/static/images/index/lido-dao/governance-process.svg" alt="" />
                        <h3>Governance process</h3>
                        <p>Explore how the decisions in Lido governance process are made.</p>
                    </a>
                    <a target="blank" rel="noopener" href="https://research.lido.fi/" className={cx('right-small-box')}>
                        <img src="https://lido.fi/static/images/index/lido-dao/research-forum.svg" alt="" />
                        <div>
                            <h3>Research Forum</h3>
                            <p>Join the forum to find answers or discuss your ideas for Lido</p>
                        </div>
                    </a>
                    <a target="blank" rel="noopener" href="https://dao-agreements.lido.fi/" className={cx('right-small-box')}>
                        <img
                            src="https://lido.fi/static/images/index/lido-dao/key-governance-proposals.svg"
                            alt=""
                        
                        />
                        <div>
                            <h3>Key governance proposals</h3>
                            <p>
                                All key governance decisions and related Snapshots/Aragons in one place
                            </p>
                        </div>
                    </a>
                    <a target="blank" rel="noopener" href="https://governance-herald.lido.fi/" className={cx('right-small-box')}>
                        <img src="https://lido.fi/static/images/index/lido-dao/lido-herald.svg" alt="" />
                        <div>
                            <h3>The Lido Herald</h3>
                            <p>Monitor current votings and related proposals in one place</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default LidoDAO;
