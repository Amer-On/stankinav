import './Button.css'


export default function Button(props) {

    let classes = 'button ';
    switch (props.position) {
        case 'upper':
            classes += 'upper-button';
            break;
        case 'bottom':
            classes += 'bottom-button';
            break
        default:
            classes += ''
            break;
    }
    if (props.value === props.active) {
        classes += ' active'
    }

    return (
        <button onClick={props.onClick}
                className={classes} key={props.value} value={props.value}>{props.value}</button>
    );
}