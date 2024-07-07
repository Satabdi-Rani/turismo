
const Experience = () => {
    return (
        <div className="bg-[#1288B8] pt-32 pb-32">
            <div className="container mx-auto">
                <h4 className=" text-xl mb-2 uppercase text-white">travel blog</h4>
                <h1 className="text-5xl font-bold uppercase text-white"><span className="">travel</span> <span className="">experience</span></h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
                    <img className="h-[600px] w-[400px] rounded-lg " src="https://i.ibb.co/99GthkV/happy-hipster-young-woman-carry-backpack-travel-tourist-woman-with-backpack-outdoors-holidays-women.jpg" alt="" />
                    <img className="h-[600px] w-[400px] rounded-lg " src="https://i.ibb.co/FXJH3j5/man-leaning-railing-listening-music.jpg" alt="" />
                    <img className="h-[600px] w-[400px] rounded-lg " src="https://i.ibb.co/YRS9TJy/stylish-brunette-standing-entance-building.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Experience;