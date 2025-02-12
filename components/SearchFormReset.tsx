"use client";

import Link from "next/link";
import { X } from "lucide-react";
const SearchFormReset = () => {
    const reset = () => {
        console.log('reset form');
        const form = document.querySelector<HTMLFormElement>('.search-form');
        if (form) {
            form.reset();
        }
    }
    return (
        <button type="reset" onClick={reset} className="search-reset">
            <Link href="/" className="search-btn text-white">
                <X className="size-5"/>
            </Link>
        </button>
    );
}

export default SearchFormReset;