import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const nextPage = () => {
    setPage(page + 1);
    navigate(`/?page=${page + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const prevPage = () => {
    setPage(page - 1);
    navigate(`/?page=${page - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const backToHome = () => {
    setPage(1);
    navigate("/");
  };

  useEffect(() => {
    setPage(parseInt(searchParams.get("page")!) || 1);
  });

  return {
    page,
    setPage,
    nextPage,
    prevPage,
    backToHome,
  };
};
