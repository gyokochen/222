import React from "react";
import ReactDOM from "react-dom";
import './button.css';

export default function Buttons ()
{
    return (
        <div id="buttons">
            <Header />
            <div className="buttons">
                <BasicButtons />
                <DisabledButtons />
                <IconButtons />
                <SizeButtons />
                <ColorButtons />
            </div>
            <Source />
        </div>
   )
}

function Header() {
    return (
        <header>
            Buttons
        </header>
    )
}

function BasicButtons() {
    return (
        <div id="basicButtons">
                <div>
                    <h5>Button</h5>
                    <button className="defaultButton">Default</button>
                </div>
                <div>
                    <h5>Button variant="outlineButton"</h5>
                    <button className="outlineButton">Default</button>
                </div>
                <div>
                    <h5>Button variant="textButton"</h5>
                    <button className="textButton">Default</button>
                </div>
                <div>
                    <h5>Button disableShadow</h5>
                    <button className="disableShadowButton">Default</button>
                </div>
            </div>
    )
}


function DisabledButtons() {
    return (
        <div id="disabledButton">
            <div>
                <h5>Button disabled</h5>
                <button className="defaultButton disabledButton" disabled>Disabled</button>
            </div>
            <div>
                <h5>Button variant=”text” disabled</h5>
                <button className="textButton disabledButton" disabled>Disabled</button>
            </div>
        </div>
    )
}

function IconButtons() {
    return (
        <div id="iconButtons">
            <div>
                <h5>Button startIcon=”local_grocery_store”</h5>
                <button className="startIconButton" disabled><span className="material-symbols-outlined">add_shopping_cart</span>Default</button>
            </div>
            <div>
                <h5>Button endIcon=”local_grocery_store”</h5>
                <button className="endIconButton" disabled>Default<span className="material-symbols-outlined">add_shopping_cart</span></button>
            </div>
        </div>
    )
}

function SizeButtons() {
    return (
        <div id="sizeButtons">
            <div>
                <h5>Button size=”sm”</h5>
                <button className="smButton">Default</button>
            </div>
            <div>
                <h5>Button size=”md”</h5>
                <button className="mdButton">Default</button>
            </div>
            <div>
                <h5>Button size=”lg”</h5>
                <button className="lgButton">Default</button>
            </div>
        </div>
    )
}

function ColorButtons() {
    return (
        <div id="colorButtons">
            <div>
                <h5>Button color=”default”</h5>
                <button className="defaultButton">Default</button>
            </div>
            <div>
                <h5>Button color=”primary”</h5>
                <button className="primaryButton">Default</button>
            </div>
            <div>
                <h5>Button color=”secondary”</h5>
                <button className="secondaryButton">Secondary</button>
            </div>
            <div>
                <h5>Button color=”danger”</h5>
                <button className="dangerButton">Danger</button>
            </div>
        </div>
    )
}

function Source() {
    return (
        <div id="icon-source">
            <p>Icons: <a href="https://material.io/resources/icons/?style=round" target="_blank">https://material.io/resources/icons/?style=round</a></p>
        </div>
    )
}
