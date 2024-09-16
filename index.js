function updateclock (){

    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const time = `${hours} : ${minutes} : ${seconds}`
    document.getElementById("Clock").textContent = time

}