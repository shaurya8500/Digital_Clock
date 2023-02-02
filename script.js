
        const getTime =()=>{
            let d=new Date();
            let h=d.getHours();
            let amPm =h>=12 ? "PM" : "AM";
            h=h%12;
            h=h==0?12:h;
            let m=d.getMinutes();
            let s=d.getSeconds();
            return `${h} :${m} :${s} :${amPm}` ;
        }
       setInterval(()=>{
        let clockob=document.querySelector(".clock")
        clockob.innerHTML=getTime();

       },1000)
     