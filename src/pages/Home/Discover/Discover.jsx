import { TiTick } from "react-icons/ti";


const Discover = () => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mt-32 mb-32">
                <div className="ml-28 ">
                    <h5 className="uppercase text-[#1288B8] ">THE BEST TRAVEL AGENCY</h5>
                    <h1 className="text-4xl mt-2 font-bold">DISCOVER THE <span className="text-[#1288B8]">WORLD</span> WITH OUR GUIDE</h1>
                    <p className="mt-3 ">You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
                    <p className="mt-6">Hotel of all the plces the miss varius natoque penatibus et magnis dis parturient monte.</p>
                    <ul className="mt-8 flex flex-col gap-4">
                        <li className="flex flex-row gap-3"><TiTick className="border w-8 h-8 rounded-full px-1 py-1 bg-[#1288B8] text-white" /><span className="text-lg">20 Years of Experience</span></li>
                        <li className="flex flex-row gap-3"><TiTick className="border w-8 h-8 rounded-full px-1 py-1 bg-[#1288B8] text-white " /><span className="text-lg">150+ Tour Destinations</span></li>
                    </ul>
                </div>

                <div className="relative left-[230px] z-10 top-[60px] ">
                    <img className="h-[600px] w-[400px]" src="https://i.ibb.co/3YVXVf2/eiffel-tower-paris-with-gorgeous-colors-autumn.jpg" alt="" />
                </div>
                <div className="mr-16 ">
                    <img className="h-[600px] w-[400px]" src="https://i.ibb.co/vqDKtvD/part-famous-grand-canal-sunset-venice.jpg" alt="" />
                </div>
                {/* <div className="relative top-[100px]">
                    <img src="https://i.ibb.co/vqDKtvD/part-famous-grand-canal-sunset-venice.jpg" alt="" />
                    <img src="https://i.ibb.co/FqyqJGS/aerial-view-city-by-water.jpg" alt="" />

                </div> */}
            </div>
        </div>
    );
};

export default Discover;