import React from 'react'

const page = async() => {
    console.log(">> SSR start");
    console.log(">> SSR End")
  return (
    <div>todo page</div>
  )
}

export default page