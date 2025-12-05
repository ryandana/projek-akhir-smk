import Header from "@/components/ui/header.component";
import { navLinks } from "@/constants/navLinks";

export default function FeedLayout({ children }) {
  return (
    <>
      <Header navLinks={navLinks}/>
      {children}
    </>
  );
}
