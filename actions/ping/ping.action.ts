"use server"
// 서버 액션을 사용하기 위해선, use server 꼭 써야

export const pingAction=async()=>{
    console.log("pingAction income")
    return "ping"
}
