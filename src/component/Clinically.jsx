import Explore from "./Explore";

const Clinically = ({name , para1, para2, para3, para4, style, expstyle})=>{
    return(
        <div className={`max-w-7xl mx-auto ${style}`}>
                <Explore data={name} style={expstyle}/>
                <ul className={`list-disc pl-6 leading-8 font-normal w-[50rem]`}>
                    <li>{para1}</li>
                    <li>{para2}</li>
                    <li>{para3}</li>
                    <li>{para4}</li>
                </ul>
        </div>
    )
}
export default Clinically;