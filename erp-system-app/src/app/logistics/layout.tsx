import SideBar from "@/components/sidebar";
import style from '../logistics/layout.module.css'
import { ReactNode } from "react";
interface Props {
    children: ReactNode
}


export default function Layout({ children }: Props) {
    return (
        <div>
            <SideBar/>
            <div className={style.childrenContainer}>
                {children}
            </div>
        </div>
    )
}