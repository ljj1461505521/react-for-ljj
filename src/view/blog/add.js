import React, { useState, useEffect } from 'react'
import { Input, Button } from "antd"

function Add() {
    const [name, setName] = useState("卢哥")
    const [inputValue, setInputValue] = useState("")
    useEffect(() => {
        // console.log(`我是你${name}哥`);
        return () => {
            console.log("结束了兄弟");
        }
    });
    return (
        <div>
            <Input value={inputValue} onChange={e => { setInputValue(e.target.value) }} />
            <Button type="primary" onClick={() => { setName(inputValue) }}>改变名字</Button>
            <p>我是你{name}</p>
        </div>
    )
}

export default Add