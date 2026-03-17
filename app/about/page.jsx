'use client'
import style from '../about/Page.module.css'
import React from 'react'
import {Input} from 'antd'
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SDF = () => {
  return (
    <div className='search'>
       <Search style={{width:400, marginLeft: 600, marginTop: 40, marginLeft: 1300}} placeholder="input search text" onSearch={onSearch} enterButton />

    </div>
  )
}

export default SDF
