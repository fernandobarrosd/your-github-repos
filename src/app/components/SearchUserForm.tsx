"use client";

import { searchUserAction } from "@/app/actions/searchUserAction";
import { SearchIcon } from "@/app/components/icons/SearchIcon";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchUserForm() {
    const { push } = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";


    
    function handleInputChange(search: string) {
        if (search) return;

        push("/repos");
    }

    return (
        <form className="flex items-center justify-center rounded-2xl
        bg-gray-200 p-1.5 w-[300px] sm:w-[500px] lg:w-[800px]
        ring-[3.2px] ring-transparent has-[input:focus]:ring-purple-600"
            action={searchUserAction}>
            <input type="text" placeholder="Search"
                className="w-full px-3 bg-gray-200 text-[0.8rem] outline-none"
                name="search-value"
                onChange={e => handleInputChange(e.target.value)}
                defaultValue={search}/>
            <button>
                <SearchIcon className="mr-2" />
            </button>
        </form>
    )
}