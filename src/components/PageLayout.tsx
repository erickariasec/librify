import { Navbar } from "./Navbar";
import { ScrollUpButton } from "./ScrollUpButton";

export const PageLayout = () => {
  return (
    <>
      <div className="body">
        <ScrollUpButton />
        <Navbar />
      </div>
    </>
  );
}