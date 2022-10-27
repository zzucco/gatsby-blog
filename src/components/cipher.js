import * as React from "react";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import Children from 'react-children-utilities';

function DisplayPartialTextFromObject(textArray, count, inverse) {
    if (count == 0) {
        return "";
    }
    let finalHTML = "";
    let i = count;
    if (inverse) {
        for (let j = textArray.length-1; j >= 0; j--) {
            const el = textArray[j];
            let l = el.text.length
            if (el.tag != null){
                finalHTML = `</${el.tag}>` + finalHTML
                finalHTML = el.text.slice(-i) + finalHTML
                finalHTML = `<${el.tag}>` + finalHTML
            }
            else {
                finalHTML = el.text.slice(-i) + finalHTML
            }
            if (i < l) {
                break;
            }
            i = i - l;        
            }
    }
    else {
        for(const el of textArray){
            let l = el.text.length
            if (el.tag != null){
                finalHTML += `<${el.tag}>`
                finalHTML += el.text.substring(0, i)
                finalHTML += `</${el.tag}>`
            }
            else {
                finalHTML += el.text.substring(0, i)
            }
            if (i < l) {
                break;
            }
            i = i - l;        
        }
    }
    return finalHTML;
}

function DecomposeChildrenIntoTextArray(children) {
    let textArray = [];
    const childs = Children.toArray(children.props.children)
    Children.deepForEach(childs, (child) => {
        let obj = {"tag": Children.getElementName(child), "text":Children.onlyText(child).replace(/(\r\n|\n|\r)/gm, " ")};
        textArray.push(obj);
    });
    return textArray
}

export default function Cipher({children, isHidden, font}) {

    const [text, setText] = useState(DecomposeChildrenIntoTextArray(children));
    const [length, setLength] = useState(Children.onlyText(children).length)
    const [hidden, setHidden] = useState(isHidden);
    const [targetCharCount, setTargetCharCount] = useState(()=>{return (hidden ? 0 : length)})
    const [charCount, setCharCount] = useState(targetCharCount)

    useEffect(() => {
        if (charCount != targetCharCount) {
            const timer = setTimeout(() => {

                setCharCount(charCount + Math.sign(targetCharCount - charCount));
              }, 20);
              return () => clearTimeout(timer);
        }
    })

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            if (event.code == "KeyG") {
                setHidden(!hidden);
                setTargetCharCount(hidden ? 0 : length);
            }
        })
    });



    const displayedText = DisplayPartialTextFromObject(text, charCount, !hidden);
    return (
        <span className={font}>{parse(displayedText)}</span>
    )
}
