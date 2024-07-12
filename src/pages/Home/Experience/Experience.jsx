
const Experience = () => {
    return (
        <div className="bg-[#1288B8] pt-20 sm:pt-32 pb-32">
            <div className="container mx-6 lg:px-28">
                <h4 className=" text-xl mb-2 uppercase text-white">travel blog</h4>
                <h1 className="text-3xl sm:text-5xl font-bold uppercase text-white"><span className="">travel</span> <span className="">experience</span></h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 sm:gap-5 mt-10">
                    <img className="h-[300px] w-[200px] sm:h-[600px] sm:w-[400px] rounded-lg " src="https://i.ibb.co/99GthkV/happy-hipster-young-woman-carry-backpack-travel-tourist-woman-with-backpack-outdoors-holidays-women.jpg" alt="" />
                    <img className="h-[300px] w-[200px] sm:h-[600px] sm:w-[400px] rounded-lg" src="https://i.ibb.co/FXJH3j5/man-leaning-railing-listening-music.jpg" alt="" />
                    <img className="col-span-2 sm:col-span-1 mt-8 sm:mt-0  h-[500px] w-[440px] sm:h-[600px] sm:w-[400px] rounded-lg " src="https://i.ibb.co/YRS9TJy/stylish-brunette-standing-entance-building.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Experience;