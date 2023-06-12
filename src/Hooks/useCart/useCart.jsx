import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const {
    isLoading,
    isError,
    data: cart = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-side-iota.vercel.app/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [cart, refetch, isLoading];
};

export default useCart;
