import GridBlock from "./gridBlock";
import Slider from "./Slider";


export default function BlockFit(){

    return(
        <div className="  mt-12">
       	<div className="w-full h-[60vh] "><GridBlock /></div>
        <div className="w-full h-[20vh] flex">
            <div className="bg-pink-200 basis-[20%]"></div>
            <div className=" basis-[60%]">
                <div className="h-[4rem] w-full "><Slider /></div>
                <div>flex</div>
            </div>
            <div className="bg-pink-200 basis-[20%]"></div>

        </div>
        </div>
        )
}