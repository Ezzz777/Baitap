import React from "react";
import Mangacontainer from "./Mangacontainer";
import manga_data from "../data/manga_data.js"

export default function MangaList({data}){
    return (
        <div>
            {data.map(item =>{
                return <Mangacontainer
                    name={item.name}
                    photo={item.photo}
                    views={item.view_count}
                    comment={item.comment_count}
                    chapper={item.latest_chapter}
                    date={item.date_modified}
                />
            })}
        </div>

        
    );
};

// const callback = (item) => {
// return ‹MangaContainer
// name={item.name }
// photo={item.photo}
// viewcount=(item.view count}
// commentCount={item.comment count}
// latestChapter={item.latest chapter}
// dateModified=(item.date modified}
// export default function MangaList ({ data I) {
// let items = data.map(callback); // items là 1 mäng chúa các cqmponent
// return (<div className="manga-list" style={MANGA LIST STYLE}>
// {/* jsx có thé render mang * /}
// (items)
// </div>):
// }