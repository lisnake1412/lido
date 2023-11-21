import Button from '~/components/Button';
import styles from './NodeOperator.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NodeOperator() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('bg-image')}></div>
            <div className={cx('box')}>
                <img src="https://lido.fi/static/images/index/validators/banner/node-operator-icon.svg" alt=""  />
                <h3 >Become a Node Operator</h3>
                <p >
                    Lido is constantly looking to grow its set of Node Operators. Find out more about the requirements,
                    expectations, and process for applying to be a Lido Node Operator
                </p>
                <Button type="black" href="https://operatorportal.lido.fi/apply-to-be-a-lido-node-operator" target="blank" >
                    Join Node Operator set
                </Button>
            </div>
        </section>
    );
}

export default NodeOperator;
