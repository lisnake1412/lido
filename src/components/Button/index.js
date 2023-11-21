import classNames from "classnames/bind";
import styles from'./button.module.scss'

const cx = classNames.bind(styles)

function Button( {children,type, ...allProps} ) {
    let BUTTON_TYPES = {
        primary: true,
        [type]:type,
    }
    
    return ( 
        <a className={cx(BUTTON_TYPES)} {...allProps}>
            {children}
        </a>
     );
}

export default Button;