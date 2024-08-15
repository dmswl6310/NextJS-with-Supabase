import { pingAction } from '@/actions/ping/ping.action';
import React from 'react'
import ClientComponentTest from './components/ClientComponentTest';

const page = async() => {
    console.log(">> SSR start");
    const result=await pingAction();

    console.log(">> SSR End")
  return (
    <div>todo page {result}
    <ClientComponentTest/></div>
  )
}

export default page