import { Button, SearchBar } from "@/components/ui";

function InitPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5 mb-6">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    How to start:
                </h3>
                <div className="flex flex-col items-center gap-3">
                    <small className="text-sm font-normal leading-none">
                        1. Create a page
                    </small>
                    <small className="text-sm font-normal leading-none">
                        2. Add boards to page
                    </small>
                </div>
            </div>
            <Button className="text-[#E79057] bg-transparent border border-[#E79057] hover:bg-[#FFF9F5] w-[180px]">
                Add New Page
            </Button>
        </div>
    );
}

export default InitPage;
