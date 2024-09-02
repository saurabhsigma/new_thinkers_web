import React from "react";
import styles from './pages.module.css'
import SideChapters from "@/components/side_chapters";
import TopicCircle from "@/components/if_completed";
import Picto from "@/components/picto";

const content = () =>{
    return (
        <>
        
        <div className={styles.main}>

            <SideChapters />
            
            <Picto />
        </div>
        <div>
            
        </div>
        </>
    )

}



export default content;