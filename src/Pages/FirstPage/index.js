import styles from './firstPage.module.scss'
import classNames from "classnames/bind";


const cx = classNames.bind(styles)

function FirstPage() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img alt="etherium" src="https://lido.fi/static/images/comingSoon/logo-color.svg"></img>
                <div className={cx('text-box')}>
                    <div>
                        <h2>Liquidity for staked tokens</h2>
                        <p>Simplified and secure participation in staking</p>
                        <a href="#homepage" >Stake now</a>
                    </div>
                </div>
                <div className={cx('total-detail')}>
                    <div>
                        <h3>Total staked tokens</h3>
                        <p>$14,200,991,988</p>
                    </div>
                    <div>
                        <h3>Total rewards paid</h3>
                        <p>$697,005,910</p>
                    </div>
                    <div>
                        <h3>Stakers</h3>
                        <p>301,276</p>
                    </div>
                </div>

                <div className={cx("image-container")}> 
                    <img alt="sunshine" src="https://lido.fi/static/images/index/stake/sun.svg"></img>
                    <img alt="etherium" src="https://lido.fi/static/images/comingSoon/logo-color.svg"></img>
                </div>
            </div>

            <div className={cx('footer-image')}>
                <div>
                    <img alt="smoke" src="https://lido.fi/static/images/index/stake/shadow.svg"></img>
                </div>
               
            </div>
        </div>
     )
}

export default FirstPage;