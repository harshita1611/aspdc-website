import Link from "next/link"
export default function Navbar(props) {
    const style=`hover:${props.hoverColour} duration-200`
    const aah="text-white"
    return(
        <div className={`gap-[40%] translate-y-[30%] flex w-screen m-auto justify-center`}>
            <div className="flex gap-[40%] ">
                <div className="logo text-[40px] w-40 text-[#00CA08] animate-pulse font-regular ">
                    {"</>"}
                </div>
                <div className={`text ${props.textColour} w-fit flex gap-10 items-center font-light text-[100%]`}>
                    <Link href="/" className={style} id="home" >Home</Link>
                    <Link href="/pages/events" className={`hover:${props.hoverColour} duration-200`} id="events">Events</Link>
                    <Link href="/pages/resources" className={style} id="resources"  >Resources</Link>
                    <Link href="/pages/gallery" className={style} id="gallery"  >Gallery</Link>
                    <Link href="/pages/projects" className={style} id="projects"  >Projects</Link>
                    <Link href="/pages/leaderboard" className={style} id="leaderboard" >Leaderboard</Link>
                </div>
            </div>

            </div>
        // </div>
    )
}