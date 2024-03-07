"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    const url = qs.stringifyUrl({
      url: "/",
      query: {
        search: debounceValue,
      },
    },{ skipEmptyString: true, skipNull: true });
    router.push(url)
  }, [debounceValue, router]);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9 bg-transparent text-white"
        placeholder="search boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
