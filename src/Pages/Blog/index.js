import styles from './Blog.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

function Blog() {
    return (
        <section
            id="blog-posts"
            data-track-content="true"
            data-content-name="Blog Posts - main page"
            data-content-piece="Blog Posts section"
            className={cx('wrapper')}
        >
            <div className={cx('container')}>
                <h2 style={{ color: '#273852' }} className={cx('')}>
                    From the blog
                </h2>
                <p style={{ color: '#7A8AA0' }} className={cx('')}>
                    Learn more about Lido, our technology, vision and validators
                </p>
                <div className={cx('list-box')}>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://blog.lido.fi/grants-exploration-zkproof-trustless-oracles/"
                        draggable="false"
                        className={cx('box')}
                    >
                        <div className={cx('bg-img')}></div>
                        <div className={cx('')}>
                            <h2 className={cx('')}>Lido Grants - Funding &amp; Exploration of ZK-Proof Trustless Oracles</h2>
                            <span className={cx('')}>September 22, 2023</span>
                        </div>
                    </a>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://blog.lido.fi/lido-on-ethereum-wave-5-onboarding/"
                        draggable="false"
                        className={cx('box')}
                    >
                        <div className={cx('bg-img')}></div>
                        <div className={cx('')}>
                            <h2 className={cx('')}>Lido on Ethereum Wave 5 Onboarding</h2>
                            <span className={cx('')}>September 21, 2023</span>
                        </div>
                    </a>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://blog.lido.fi/providing-liquidity-on-uniswap/"
                        draggable="false"
                        className={cx('box')}
                    >
                        <div className={cx('bg-img')}></div>
                        <div className={cx('')}>
                            <h2 className={cx('')}>Guide: Providing Liquidity on Uniswap</h2>
                            <span className={cx('')}>September 18, 2023</span>
                        </div>
                    </a>
                </div>
                
                <div className={cx('')}>
                    <div className={cx('')}></div>
                    <div className={cx('')}></div>
                    <div className={cx('')}></div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
