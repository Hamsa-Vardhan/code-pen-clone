import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties"
import "ace-builds/src-noconflict/theme-tomorrow"
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/snippets/html"
import "ace-builds/src-noconflict/snippets/css"
import "ace-builds/src-noconflict/snippets/javascript"
import { useState } from 'react'
import LdSwitch from './_ldswitch'
import anime from 'animejs'




const Editor = ({ value, onChange, mode }) => {

    const [theme, setTheme] = useState(true)
    const [myFont, setMyFont] = useState(12)

    return <div className={`${mode}__editor editor__parent`}>
        <div className="editor__head" >
            <p> {mode} </p>
            <span>
                <LdSwitch  {...{ mode, theme, onSwitch: (val) => setTheme(val) }} />
                <div>
                    <button onClick={() => setMyFont(p => p < 18 ? p + 2 : 20)} > + </button>
                    <button onClick={() => setMyFont(p => p > 8 ? p - 2 : 8)} > - </button>
                </div>
            </span>
        </div>
        <div className="editor__body">
            <AceEditor
                value={value}
                onChange={onChange}
                theme={theme ? "tomorrow_night_eighties" : "tomorrow"}
                mode={mode}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    wrap: true,
                    fontSize: myFont + "pt"

                }}
                style={{
                    borderRadius: "5px",
                    width: "100%"
                }}
            />
        </div>
    </div>
}


export default Editor