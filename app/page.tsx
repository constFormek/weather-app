import DropdownWrapper from "@/components/DropdownWrapper";
import UnitsMenu from "@/components/UnitsMenu";


export default function Home() {
  return (
    <div className="w-70">
      <DropdownWrapper>
        <UnitsMenu />
      </DropdownWrapper>
    </div>
  );
}
