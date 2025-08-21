import CategoriesSection from "../sections/categories-section";

interface HomwViewProps {
    categoryId?: string;
}

export const HomeView = ({categoryId}: HomwViewProps) => {
    return (
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-4 overflow-x-auto flex flex-col gap-8">
            <CategoriesSection categoryId={categoryId}/>
        </div>
    )
}