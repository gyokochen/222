import React from "react";
import ReactDOM from "react-dom";
import './input.css';

export default function Inputs ()
{
    return (
        <div id="inputs">
            <Header />
            <div className="inputs">
                <BasicInputs />
                <HelpTextInputs />
                <IconInputs />
                <TextInput />
                <SizeInputs />
                <FullWidthInput />
                <MultilineInput />
            </div>
        </div>
   )
}

function Header() {
    return (
        <header>
            Inputs
        </header>
    )
}

function BasicInputs() {

    return (
        <div id="basicInputs">
            <div>
                <h5>Input</h5>
                <label>Label
                    <br />
                    <input className="dafultInput" type="text" placeholder="Placeholder" />
                </label>
            </div>
            <div className="errorInputs">
                <h5>Input error</h5>
                <ErrorInput />
            </div>
            <div>
                <h5>Input disabled</h5>
                <label>Label
                    <br />
                    <input className="disabledInput" type="text" placeholder="Placeholder" disabled></input>
                </label>
            </div>
        </div>
    )
}

class ErrorInput extends React.Component {
    constructor() {
        super();
        this.state = {
            childHover: false,
            childFocused: false,
            styleHover: {color: "#333333"},
            styleFocused: {}
        }
        this.handleOver = this.handleOver.bind(this);
        this.handleOut = this.handleOut.bind(this);
        this.handleFocusIn = this.handleFocusIn.bind(this);
        this.handleFocusOut = this.handleFocusOut.bind(this);
    }

    handleOver() {
            this.setState({ childHover: true })
    }

    handleOut() {
        this.setState({ childHover: false })
    }

    handleFocusIn() {
        this.setState({ childFocused: true });
    }

    handleFocusOut() {
        this.setState({ childFocused: false });
    }

    render() {
    return (
        <label style={this.state.childHover&&!this.state.childFocused ? this.state.styleHover : this.state.styleFocused}>Label
            <br />
            <input onMouseOver={this.handleOver} onMouseOut={this.handleOut} onFocus={this.handleFocusIn} onBlur={this.handleFocusOut} className="errorInput" type="text" placeholder="Placeholder" />
        </label>
    )
    }
}


function HelpTextInputs() {
    return (
        <div id="helpTextInput">
            <div>
                <h5>Input helperText=”Some interesting text”</h5>
                <label>Label
                    <br />
                    <input className="dafultInput" type="text" placeholder="Placeholder" />
                    <br />
                    <span>Some interesting text</span>
                </label>
            </div>
            <div className="errorInputs">
                <h5>Input helperText=”Some interesting text” error</h5>
                <ErrorInput />
                <br />
                <span>Some interesting text</span>
            </div>
        </div>
    )
}

function IconInputs() {
    return (
        <div id="iconInput">
            <div className="startIconInput">
                <h5>Input startIcon</h5>
                <label>
                    Label
                    <div>
                        <span class="material-symbols-outlined inputIcon">call</span>
                        <input className="dafultInput" type="text" placeholder="Placeholder" />
                    </div>
                </label>
            </div>
            <div className="endIconInput">
                <h5>Input endIcon</h5>
                <label>
                    Label
                    <div>
                        <input className="dafultInput" type="text" placeholder="Placeholder" />
                        <span class="material-symbols-outlined inputIcon">lock</span>
                    </div>
                </label>
            </div>
        </div>
    )
}

function TextInput() {
    return (
        <div id="textInput">
            <h5>Input value=”text”</h5>
            <label>Label
                <br />
                <input className="dafultInput" type="text" defaultValue="Text" />
            </label>
        </div>
    )
}

function SizeInputs() {
    return (
        <div id="sizeInput">
            <div >
                <h5>Input size=”sm”</h5>
                <label>Label
                    <br />
                    <input className="dafultInput smInput" type="text" placeholder="Placeholder" />
                </label>
            </div>
            <div>
                <h5>Input size=”md”</h5>
                <label>Label
                    <br />
                    <input className="dafultInput" type="text" placeholder="Placeholder" />
                </label>
            </div>
        </div>
    )
}


function FullWidthInput() {
    return (
        <div id="fullWidthInput">
            <h5>Input fullWidth</h5>
            <label>Label
                <br />
                <input className="dafultInput" type="text" defaultValue="Text" />
            </label>
        </div>
    )
}

function MultilineInput() {
    return (
        <div id="miltiLine">
            <h5>Input multiline row=”4”</h5>
                <label>Label
                    <br />
                    <textarea className="dafultInput" placeholder="Placeholder" rows="4"></textarea>
                </label>
        </div>
    )
}
