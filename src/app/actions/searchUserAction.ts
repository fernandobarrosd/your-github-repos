"use server";

import { redirect } from "next/navigation";

export async function searchUserAction(formData: FormData) {
    const searchValue = formData.get("search-value")?.toString();

    if (searchValue?.length) {
        redirect(`/repos/?search=${searchValue}`);
    }
}