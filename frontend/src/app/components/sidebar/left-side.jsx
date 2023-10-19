import Link from "next/link";

export default function LeftSide(){
    return(
        <>
            <div className="left-content">
                <ul>
                    <li><Link href="/profile">Personal Stats</Link></li>
                    <li><Link href="/">Weekly Scores</Link></li>
                    <li><Link href="/">League Statndings</Link></li>
                    <li><Link href="/">League Weekly Scores</Link></li><br />
                    <li><Link href="/test-user">Profile</Link></li>
                </ul>
            </div>  
            <div>
               <Link href="/">Messages</Link>
            </div>
        </>
    )
}