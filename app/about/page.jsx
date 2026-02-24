import React from 'react'
import {Input} from 'antd'
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SDF = () => {
  return (
    <div>
       <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  )
}

export default SDF
