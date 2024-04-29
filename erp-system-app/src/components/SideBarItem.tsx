import { ReactNode } from "react";
interface Props {
  children: ReactNode
  className?: string | null
}

export default function SideBarItem({ children, className }: Props) {
  return (
    <div>
      <div >
        <div className={className ? className : ''}> 
          {children}
        </div>
      </div>
    </div>
  );
}
