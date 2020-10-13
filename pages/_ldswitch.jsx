import anime from 'animejs'

const LdSwitch = ({ theme, onSwitch, mode }) => {


    const handleClick = () => {
        onSwitch(!theme)
        if (theme) return anime({
            targets: `.${mode}__ball`,
            translateX: [0, 18],
            width: [0, 18]
        })
        else return anime({
            targets: `.${mode}__ball`,
            width: [0, 16],
            translateX: [16, 0]
        })
    }



    return <div className="editor__ldswitch" onClick={handleClick}>
        <div className={`${mode}__ball ball`}></div>
    </div>
}


export default LdSwitch