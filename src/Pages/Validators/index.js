import styles from './Validators.module.scss';
import classNames from 'classnames/bind';

import NodeOperator from './NodeOperator';
import * as img from '~/assets/image/validators';

const cx = classNames.bind(styles);

let VALIDATORS_LISTS = [...Array(38).keys()];
console.log(VALIDATORS_LISTS);
function Validators() {
    
    return (
        
        <section id="validators" className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Validators</h2>
                <p style={{ color: '#7A8AA0' }}>Explore validators that help grow Lido</p>
                <div className={cx('list-box')}>
                    {VALIDATORS_LISTS.map((data, index) => {
                        return (
                            <a key={index} className={cx('box')} href={`/validator-${data+1}`}>
                                <img src={img[`img${data+1}`]} alt="jump" />
                            </a>
                        );
                    })}
                </div>
                <NodeOperator />
            </div>
        </section>
    );
}

export default Validators;
