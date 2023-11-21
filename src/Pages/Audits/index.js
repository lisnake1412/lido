import { useEffect, useRef, useState } from 'react';
import styles from './Audits.module.scss';
import classNames from 'classnames/bind';

let LIST_DATAs = new Array(39).fill(0);

const cx = classNames.bind(styles);

function Audits() {
    const [Xposition, setXposition] = useState(32);
    let startPosition = useRef(32);
    let [transitionDuration, setTransitionDuration] = useState(0);

    function mouseMoveHandle(e) {
        setXposition((prev) => (prev +  (e.clientX - startPosition.current)));
        console.log(e.clientX - startPosition.current);
    }
    function mouseDownHandle(e) {
        startPosition.current = e.clientX
        document.addEventListener('mousemove', mouseMoveHandle);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMoveHandle);
        });
    }
    useEffect(() => {
        setTimeout(() => {
            setTransitionDuration(0);
        }, 300);
    }, [transitionDuration]);

    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Audits</h2>
                <p>Lido has been audited by the industry-leaders in blockchain security.</p>

                <div className={cx('swiper-wrapper')}>
                    <div className={cx('swiper-container')}>
                        <div
                            className={cx('swiper-content')}
                            style={{
                                transitionDuration: `${transitionDuration}ms`,
                                transform: `translate3d(${Xposition}px, 0px, 0px)`,
                            }}
                            onMouseDown={(e) => mouseDownHandle(e)}
                        >
                            {LIST_DATAs.map((data, index) => {
                                return (
                                    <div className={cx('slide-wrapper')}>
                                        <div className={cx('slide-container')}>
                                            <div>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20width%3D%22160%22%20height%3D%2234%22%20viewBox%3D%220%200%20160%2034%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M34.281%2022.9839L35.5259%2025.1173H49.037L50.2819%2022.9839H34.281Z%22%20fill%3D%22%23F43563%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M50.2727%2022.9849L51.4984%2020.8405L44.7428%209.14313L42.2722%209.13208L50.2727%2022.9849Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M34.275%2022.9849L33.0493%2020.8405L39.8048%209.14313L42.2755%209.13208L34.275%2022.9849Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%2011.7842C0%2010.3114%201.19435%209.11742%202.66764%209.11743L13.2047%209.11753C14.678%209.11755%2015.8723%2010.3115%2015.8723%2011.7843V12.851H13.7382V11.7843C13.7382%2011.4898%2013.4993%2011.251%2013.2047%2011.251L2.66762%2011.2509C2.37296%2011.2509%202.13409%2011.4897%202.13409%2011.7842V14.4511C2.13409%2014.7457%202.37296%2014.9845%202.66762%2014.9845H13.2047C14.678%2014.9845%2015.8723%2016.1784%2015.8723%2017.6513V20.3181C15.8723%2021.7909%2014.678%2022.9848%2013.2047%2022.9848H2.66762C1.19433%2022.9848%200%2021.7909%200%2020.3181V19.3845H2.13409V20.3181C2.13409%2020.6126%202.37296%2020.8514%202.66762%2020.8514H13.2047C13.4993%2020.8514%2013.7382%2020.6126%2013.7382%2020.3181V17.6513C13.7382%2017.3567%2013.4993%2017.1179%2013.2047%2017.1179H2.66762C1.19433%2017.1179%200%2015.9239%200%2014.4511V11.7842Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M69.4429%209.09375H84.3814V11.2272H71.5769V14.9606H84.3814V17.0941H71.5769V20.8276H84.3814V22.961H69.4429V9.09375Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M18.4072%209.11743H31.7454V11.2509H26.1434V22.9847H24.0093V11.2509H18.4072V9.11743Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M52.8206%209.11743H66.1588V11.2509H60.5569V22.9847H58.4226V11.2509H52.8206V9.11743Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M107.4%2022.8673H105.266V11.2978L98.794%2022.855H96.9318L90.4603%2011.2978V22.8673H88.3262L88.3262%209L91.6193%209L97.8629%2020.1501L104.106%209L107.4%209V22.8673Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M112.81%209V22.8673H110.676V9H112.81Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M133.162%209V22.8673H129.912L118.441%2011.1334H118.357V22.8673H116.223V9L119.339%209L130.81%2020.7339H131.028V9L133.162%209Z%22%20fill%3D%22black%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M148.39%209C151.19%208.99999%20153.459%2011.2685%20153.459%2014.0669V17.8004C153.459%2020.5988%20151.19%2022.8673%20148.39%2022.8673H136.52V9.00003L148.39%209ZM138.654%2011.1335V20.7339H148.39C150.011%2020.7339%20151.325%2019.4205%20151.325%2017.8004V14.0669C151.325%2012.4468%20150.011%2011.1334%20148.39%2011.1334L138.654%2011.1335Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                    alt=""
                                                />
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20width%3D%2244%22%20height%3D%2244%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2244%22%20height%3D%2244%22%20rx%3D%2222%22%20fill%3D%22%23F4F6F8%22%2F%3E%0A%3Cpath%20opacity%3D%220.8%22%20d%3D%22M22.0654%208.06641V18.3677L30.9305%2022.2583L22.0654%208.06641Z%22%20fill%3D%22%23454A75%22%2F%3E%0A%3Cpath%20opacity%3D%220.5%22%20d%3D%22M22.0665%208.06641L13.2002%2022.2583L22.0665%2018.3677V8.06641Z%22%20fill%3D%22%23454A75%22%2F%3E%0A%3Cpath%20opacity%3D%220.8%22%20d%3D%22M22.0654%2028.9332V35.9327L30.9364%2023.8789L22.0654%2028.9332Z%22%20fill%3D%22%23454A75%22%2F%3E%0A%3Cpath%20opacity%3D%220.5%22%20d%3D%22M22.0665%2035.9327V28.932L13.2002%2023.8789L22.0665%2035.9327Z%22%20fill%3D%22%23454A75%22%2F%3E%0A%3Cpath%20d%3D%22M22.0654%2027.3148L30.9305%2022.2594L22.0654%2018.3711V27.3148Z%22%20fill%3D%22%23454A75%22%2F%3E%0A%3Cpath%20opacity%3D%220.8%22%20d%3D%22M13.2002%2022.2594L22.0665%2027.3148V18.3711L13.2002%2022.2594Z%22%20fill%3D%22%23454A75%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <span>Lido on Ethereum</span>
                                                <span>&nbsp;|&nbsp;</span>
                                                <span>May 2023</span>
                                            </div>
                                            <p>StateMind Lido V2 Upgrade Template Audit</p>
                                            <a
                                                target="blank"
                                                rel="noopener"
                                                href="https://github.com/lidofinance/audits/blob/main/Statemind%20Lido%20V2%20Upgrade%20Template%20Audit%20Report%2005-2023.pdf"
                                            >
                                                See report
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('button-wrapper')}>
                    <button
                        className={cx('prev-button')}
                        onClick={() => {
                            setXposition((prev) => prev + 348);
                            setTransitionDuration(300);
                        }}
                    >
                        <svg width={6} height={10} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.292893 5.70711C-0.097631 5.31658 -0.097631 4.68342 0.292893 4.29289L4.29289 0.292894C4.68342 -0.0976312 5.31658 -0.0976312 5.70711 0.292894C6.09763 0.683418 6.09763 1.31658 5.70711 1.70711L2.41421 5L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <a href="https://github.com/lidofinance/audits" target="blank" className={cx('mid-button')}>
                        <span>Explore all audits</span>
                    </a>
                    <button
                        className={cx('next-button')}
                        onClick={() => {
                            setXposition((prev) => prev - 348);
                            setTransitionDuration(300);
                        }}
                    >
                        <svg width={6} height={10} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L1.70711 0.292894C1.31658 -0.0976312 0.683417 -0.0976312 0.292893 0.292894C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292894 8.29289C-0.0976307 8.68342 -0.0976307 9.31658 0.292894 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5.70711 5.70711Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Audits;
