import React from 'react'
import { useSelector } from 'react-redux';

function TotalItems() {
  const totosLength = useSelector((state) => state.todos).length
  return (
    <div>Total item: {totosLength}</div>
  )
}

export default TotalItems;