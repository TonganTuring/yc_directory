import React from "react";
import Form from 'next/form'
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <form className="search-form" action="/">
      <input 
        name="query"
        defaultValue={query}
        type="text" 
        placeholder="Search Startups" 
        className="search-input" 
        />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
      </div>

      <button type="submit" className="search-btn text-white">
        <Search className="size-5"/>
      </button>
    </form>
  );
};

export default SearchForm;