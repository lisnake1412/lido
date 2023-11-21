import styles from './Community.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Community() {
    return (
        <section
            id="community"
            data-track-content="true"
            data-content-name="Join the Community - main page"
            className={cx('wrapper')}
        >
            <div className={cx('container')}>
                <h2 color="#273852">Join our community</h2>
                <p color="#7A8AA0">
                    Learn more about Lido, chat with us and have your say in the future of the Lido ecosystem
                </p>
                <div className={cx('list-box')}>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://discord.com/invite/lido"
                        className={cx('big-first-box')}
                    >
                        <div className={cx('big-first-box-content')}>
                            <img src="https://lido.fi/static/images/index/community/discord-logo.svg" alt="" />
                            <div>
                                <h2>Lido in Discord</h2>
                                <p>Join the community and ask questions</p>
                            </div>
                        </div>
                        <div className={cx('big-first-box-background')}>
                            <img src="https://lido.fi/static/images/index/community/background.svg" alt="" />
                            <img src="https://lido.fi/static/images/index/community/background-mobile.svg" alt="" />
                            <img src="https://lido.fi/static/images/index/community/person-1.svg" alt="" />
                            <img src="https://lido.fi/static/images/index/community/person-2.svg" alt="" />
                        </div>
                    </a>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://t.me/lidofinance"
                        data-track-content="true"
                        data-content-name="Join the Community - main page"
                        data-content-piece="Telegram Card"
                        className={cx('small-box')}
                    >
                        <svg color="#7A8AA0" height="44" width="44">
                            <use xlinkHref="#telegram-transparent"></use>
                        </svg>
                        <div>
                            <h2>Telegram</h2>
                            <p>Join chat</p>
                        </div>
                    </a>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://twitter.com/lidofinance"
                        data-track-content="true"
                        data-content-name="Join the Community - main page"
                        data-content-piece="Twitter Card"
                        className={cx('small-box')}
                    >
                        <svg color="#7A8AA0" height="44" width="44">
                            <use xlinkHref="#twitter-transparent"></use>
                        </svg>
                        <div>
                            <h2>Twitter</h2>
                            <p>Follow @lidofinance</p>
                        </div>
                    </a>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://research.lido.fi/?pk_vid=a23f453331e212a11671467289d460f0"
                        data-track-content="true"
                        data-content-name="Join the Community - main page"
                        data-content-piece="Research Forum Card"
                        className={cx('small-box')}
                    >
                        <svg color="#7A8AA0" height="44" width="44">
                            <use xlinkHref="#research-forum-transparent"></use>
                        </svg>
                        <div>
                            <h2>Research forum</h2>
                            <p>Join discussions</p>
                        </div>
                    </a>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://github.com/lidofinance"
                        data-track-content="true"
                        data-content-name="Join the Community - main page"
                        data-content-piece="Github Card"
                        className={cx('small-box')}
                    >
                        <svg color="#7A8AA0" height="44" width="44">
                            <use xlinkHref="#github-transparent"></use>
                        </svg>
                        <div>
                            <h2>GitHub</h2>
                            <p>Contribute</p>
                        </div>
                    </a>
                    <a
                        target="blank"
                        rel="noopener"
                        href="https://blog.lido.fi/?pk_vid=a23f453331e212a11671467274d460f0"
                        data-track-content="true"
                        data-content-name="Join the Community - main page"
                        data-content-piece="Blog Card"
                        className={cx('small-box')}
                    >
                        <svg color="#7A8AA0" height="44" width="44">
                            <use xlinkHref="#blog-transparent"></use>
                        </svg>
                        <div>
                            <h2>Blog</h2>
                            <p>Learn about Lido</p>
                        </div>
                    </a>
                    <a
                        target="blank"
                        rel="noopener"
                        href="mailto:info@lido.fi"
                        data-track-content="true"
                        data-content-name="Join the Community - main page"
                        data-content-piece="Contact us Card"
                        className={cx('small-box')}
                    >
                        <svg color="#7A8AA0" height="44" width="44">
                            <use xlinkHref="#contact-us"></use>
                        </svg>
                        <div>
                            <h2>Contact us</h2>
                            <p>Get in touch with info@lido.fi</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Community;
