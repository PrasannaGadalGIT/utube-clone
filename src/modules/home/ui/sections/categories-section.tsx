"use client"


import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { FilterCarousel } from "@/components/filter-carousel";

interface CategorySectionProps {
    categoryId?: string;
}

 const CategoriesSection = ({categoryId} : CategorySectionProps) => {
    return(
        <Suspense fallback={<p>Loading</p>}> 
            <ErrorBoundary fallback={<p>Error...</p>}>
                <CategoriesSectionSuspense categoryId={categoryId}/>
            </ErrorBoundary>
        </Suspense>
    )
}


const CategoriesSectionSuspense = ({categoryId} : CategorySectionProps) => {
    const [categories] = trpc.categories.getMany.useSuspenseQuery();

    const data = categories.map((category)=> ({
        value: category.id,
        label: category.name,
    }))
    return(
        <>
            <FilterCarousel value={categoryId} data={data}/>
            
        </>
    )
}

export default CategoriesSection;