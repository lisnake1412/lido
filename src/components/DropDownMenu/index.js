import classNames from 'classnames/bind';

import styles from './dropDownMenu.module.scss';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

const MENU_DATAs = [
    {
        ListName: 'Networks',
        typeOfList: 'medium',
        children: [
            {
                imgSource: 'https://lido.fi/static/images/header/networks/ethereum.svg',
            },
        ],
    },
];

function DropDownMenu({ data }) {
    return (
        <>
            <div className={cx('list-content')}>
                <span className={cx('list-text')}>Networks</span>
                <div className={cx('drop-down-wrapper')}>
                    <div className={cx('medium')}>
                        <a href="/ethereum">
                            <img src="https://lido.fi/static/images/header/networks/ethereum.svg" alt="Ethereum" />
                            <div>
                                <h2>Ethereum</h2>
                                <p>ETH</p>
                            </div>
                        </a>
                        <a href="/polygon">
                            <img src="https://lido.fi/static/images/header/networks/polygon.svg" alt="Polygon" />
                            <div>
                                <h2>Polygon</h2>
                                <p>MATIC</p>
                            </div>
                        </a>
                        <a href="/solana">
                            <img src="https://lido.fi/static/images/header/networks/solana.svg" alt="Solana" />
                            <div>
                                <h2>Solana</h2>
                                <p>SOL</p>
                            </div>
                        </a>
                        <a href="/referral">
                            <img
                                src="https://lido.fi/static/images/header/networks/referral.svg"
                                alt="Referral program"
                            />
                            <div>
                                <h2>Referral program</h2>
                                <p>Join in</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('list-content')}>
                <span className={cx('list-text')}>Node operators</span>
                <div className={cx('drop-down-wrapper')}>
                    <div className={cx('small')}>
                        <a target="blank" href="https://operatorportal.lido.fi">
                            <img
                                src="https://lido.fi/static/images/header/node-operators/node-operator.svg"
                                alt="Node Operator Portal"
                            />
                            <h2>Node Operator Portal</h2>
                            <p>
                                Consolidated info and resources related to Lido’s Node Operator sets, all in one place
                            </p>
                        </a>
                        <a target="blank" href="https://operatorportal.lido.fi/apply-to-be-a-lido-node-operator">
                            <img
                                src="https://lido.fi/static/images/header/node-operators/node-operator.svg"
                                alt="Apply to be a Node Operator"
                            />
                            <h2>Apply to be a Node Operator</h2>
                            <p>Explore requirements and apply to be a Lido Node Operator</p>
                        </a>
                        <a target="blank" href="https://operatorportal.lido.fi/existing-operator-portal">
                            <img
                                src="https://lido.fi/static/images/header/node-operators/node-operator.svg"
                                alt="Existing Lido Operators Resources"
                            />
                            <h2>Existing Lido Operators Resources</h2>
                            <p>View details about Lido's expectations for Node Operators</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('list-content')}>
                <span className={cx('list-text')}>Governance</span>
                <div className={cx('drop-down-wrapper')}>
                    <div className={cx('small')}>
                        <a href="/governance">
                            <img
                                src="https://lido.fi/static/images/header/governance/governance-process.svg"
                                alt="Governance process"
                            />
                            <h2>Governance process</h2>
                            <p>Explore how the decisions in Lido governance process are made</p>
                        </a>
                        <a target="blank" href="https://governance-herald.lido.fi/">
                            <img
                                src="https://lido.fi/static/images/header/governance/lido-herald-v2.svg"
                                alt="The Lido Herald"
                            />
                            <h2>The Lido Herald</h2>
                            <p>Monitor current votings and related proposals at one page</p>
                        </a>
                        <a target="blank" href="https://dao-agreements.lido.fi/">
                            <img
                                src="https://lido.fi/static/images/header/governance/register-key-proposals-v2.svg"
                                alt="Register of key proposals"
                            />
                            <h2>Register of key proposals</h2>
                            <p>All key governance decisions and related Snapshots / Aragons in one place</p>
                        </a>
                        <a target="blank" href="https://snapshot.org/#/lido-snapshot.eth">
                            <img
                                src="https://lido.fi/static/images/header/governance/snapshot-voting.svg"
                                alt="Snapshot voting"
                            />
                            <h2>Snapshot voting</h2>
                            <p>Take part in off-chain Snapshot voting</p>
                        </a>
                        <a
                            target="blank"
                            href="https://mainnet.lido.fi/#/lido-dao/0x2e59a20f205bb85a89c53f1936454680651e618e/"
                        >
                            <img
                                src="https://lido.fi/static/images/header/governance/aragon-voting.svg"
                                alt="Aragon voting"
                            />
                            <h2>Aragon voting</h2>
                            <p>Explore Lido’s on-chain votes</p>
                        </a>
                        <a target="blank" href="https://easytrack.lido.fi">
                            <img
                                src="https://lido.fi/static/images/header/governance/easy-track-voting.svg"
                                alt="Easy track voting"
                            />
                            <h2>Easy track voting</h2>
                            <p>Explore Easy Track - a way to make on-chain decisions using veto voting</p>
                        </a>
                        <a target="blank" href="https://research.lido.fi/?pk_vid=a23f453331e212a11671467289d460f0">
                            <img
                                src="https://lido.fi/static/images/header/governance/research-forum.svg"
                                alt="Research forum"
                            />
                            <h2>Research forum</h2>
                            <p>Join the forum to find answers or discuss your ideas for Lido</p>
                        </a>
                        <a href="/lego">
                            <img src="https://lido.fi/static/images/header/governance/lego.svg" alt="LEGO" />
                            <h2>LEGO</h2>
                            <p>Explore how Lido Ecosystem Grants Organization grows</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('list-content')}>
                <span className={cx('list-text')}>Analytics</span>
                <div className={cx('drop-down-wrapper')}>
                    <div className={cx('small')}>
                        <a target="blank" href="https://dune.com/lido/lido-dashboards-catalogue">
                            <img
                                src="https://lido.fi/static/images/header/analytics/dune-analytics.svg"
                                alt="Dune analytics"
                            />
                            <h2>Dune analytics</h2>
                            <p>Track current metrics on Lido protocol</p>
                        </a>
                        <a target="blank" href="https://tokenterminal.com/terminal/projects/lido-finance">
                            <img
                                src="https://lido.fi/static/images/header/analytics/token-terminal.svg"
                                alt="Token terminal"
                            />
                            <h2>Token terminal</h2>
                            <p>Explore fundamental analysis for crypto</p>
                        </a>
                        <a target="blank" href="https://pro.nansen.ai/lido">
                            <img
                                src="https://lido.fi/static/images/header/analytics/nancen-analytics.svg"
                                alt="Nansen analytics"
                            />
                            <h2>Nansen analytics</h2>
                            <p>Track real-time Lido staking statistics</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('list-content')}>
                <span className={cx('list-text')}>Developers</span>
                <div className={cx('drop-down-wrapper')}>
                    <div className={cx('bigFirst')}>
                        <a target="blank" href="https://github.com/lidofinance">
                            <img src="https://lido.fi/static/images/header/developers/github.svg" alt="" />
                            <div>
                                <h2>GitHub</h2>
                                <p>Connect with the Lido GitHub community and repositories</p>
                            </div>
                        </a>
                        <div>
                            <a target="blank" href="https://docs.lido.fi/guides/lido-tokens-integration-guide/">
                                stETH integration guide
                            </a>
                            <a href="/bug-bounty">Bug Bounty</a>
                            <a target="blank" href="https://docs.lido.fi">
                                Documentation
                            </a>
                            <a target="blank" href="https://github.com/lidofinance/audits">
                                Audits
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('list-content')}>
                <span className={cx('list-text')}>Community</span>
                <div className={cx('drop-down-wrapper')}>
                    <div className={cx('medium')}>
                        <a target="blank" href="https://twitter.com/lidofinance">
                            <img src="https://lido.fi/static/images/header/community/twitter.svg" alt="Twitter" />
                            <div>
                                <h2>Twitter</h2>
                                <p>Follow us on @lidofinance</p>
                            </div>
                        </a>
                        <a target="blank" href="https://discord.com/invite/lido">
                            <img src="https://lido.fi/static/images/header/community/discord.svg" alt="Discord" />
                            <div>
                                <h2>Discord</h2>
                                <p>Ask questions</p>
                            </div>
                        </a>
                        <a target="blank" href="https://t.me/lidofinance">
                            <img src="https://lido.fi/static/images/header/community/telegram.svg" alt="Telegram" />
                            <div>
                                <h2>Telegram</h2>
                                <p>Join the community</p>
                            </div>
                        </a>
                        <a target="blank" href="https://research.lido.fi/?pk_vid=a23f453331e212a11671467289d460f0">
                            <img
                                src="https://lido.fi/static/images/header/community/research-forum.svg"
                                alt="Research forum"
                            />
                            <div>
                                <h2>Research forum</h2>
                                <p>Join discussions</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('list-content')}>
                <span className={cx('list-text')}>About</span>
                <div className={cx('drop-down-wrapper')}>
                    <div className={cx('bigFirst')}>
                        <a target="blank" href="https://blog.lido.fi/?pk_vid=a23f453331e212a11671467274d460f0">
                            <img src="https://lido.fi/static/images/header/about/blog.svg" alt="" />
                            <div>
                                <h2>Blog</h2>
                                <p>Join our Blog and explore more info about Lido</p>
                            </div>
                        </a>
                        <div>
                            <a href="/faq">FAQ</a>
                            <a target="blank" href="https://help.lido.fi/en/">
                                Help center
                            </a>
                            <a target="blank" href="https://docs.lido.fi">
                                Documentation
                            </a>
                            <a target="blank" href="https://opportunities.lido.fi">
                                Opportunities
                            </a>
                            <a href="/static/LIDO_press_kit.zip">Download press kit</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DropDownMenu;
