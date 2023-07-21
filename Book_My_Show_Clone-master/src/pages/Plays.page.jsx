import React from 'react'
import PlaysFilter from '../components/PlaysFIlters/PlaysFilters.component';
import Poster from '../components/Poster/poster.component';

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    
                    <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Plays in Bengaluru</h2>
                    <div className="flex flex-wrap ">
                        
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA3IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg"
                            title=" Ranga Shankara Theatre Play"
                            subtitle="Telugu -> ₹400"
                            />  
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA3IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg"
                            title=" Ranga Shankara Theatre Play"
                            subtitle="Telugu -> ₹400"
                            />  
                        </div><div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA3IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg"
                            title=" Ranga Shankara Theatre Play"
                            subtitle="Telugu -> ₹400"
                            />  
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                        <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA3IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg"
                            title=" Ranga Shankara Theatre Play"
                            subtitle="Telugu -> ₹400"
                            />  
                        </div>
                    
                    </div>
                    </div>
            
                    <div className="lg:w-3/12 ">
                    <h2 className="text-2xl font-bold mb-4">Filter</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["today", "tomorrow", "Weeekend"]} />
                        </div>
                        
                        <div>
                            <PlaysFilter title="Language" tags={["Tamil", "Telugu", "English"]} />
                    </div>

                    <div>
                            <PlaysFilter title="Location" tags={["Bangalore", "Mangalore", "Mysore"]} />
                    </div>


                    </div>
                </div>
            
            
            </div>
        </>
    );
};

export default Plays;
