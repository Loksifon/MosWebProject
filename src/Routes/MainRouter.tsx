import { FC, useContext } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { HomePage } from "@/Pages/HomePage/HomePage";
import { SchoolTablePage } from "@/Pages/SchoolTablePage/SchoolTablePage";
import { UserTablePage } from "@/Pages/UserTablePage/UserTablePage";
import { ProfilePage } from "@/Pages/ProfilePage/ProfilePage";
import { FormPage } from "@/Pages/FormPage/FormPage";
import { AuthContext } from "@/utils/context/AuthContext";
import { HOME_ROUTE, SCHOOL_ROUTE, USER_ROUTE, PROFILE_ROUTE, FORM_ROUTE } from "@/config/config";

export const MainRouter: FC = () => {
  const { isAuth } = useContext(AuthContext)!;

  const basedPath: RouteObject[] = [
    { path: HOME_ROUTE, element: <HomePage /> },
    { path: SCHOOL_ROUTE, element: <SchoolTablePage /> },
    { path: USER_ROUTE, element: <UserTablePage /> },
    { path: FORM_ROUTE, element: <FormPage /> },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  const authPath: RouteObject[] = [{ path: PROFILE_ROUTE, element: <ProfilePage /> }];

  const resultPaths: RouteObject[] = isAuth ? [...basedPath, ...authPath] : basedPath;

  return useRoutes(resultPaths);
};
