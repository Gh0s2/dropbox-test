import { Breadcrumbs, Link, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { setPath } from "../../redux/slice/pathSlice.ts";


/** Breadcrumbs path line component */

const PathLine = () => {
  const path = useAppSelector((state) => state.pathSlice.path);
  const dispatch = useAppDispatch();

  const pathArray = path.split("/");

  const handleBreadcrumbClick = (link: string) => {
    const isLastItem = link === pathArray[pathArray.length - 1];
    if (!isLastItem) {
      const indexPath = pathArray.indexOf(link);
      const newPath = pathArray.slice(0, indexPath + 1).join("/");
      dispatch(setPath(newPath));
      localStorage.setItem("path", newPath);
    }
  };

  return (
    <Stack justifyContent="flex-start">
      <Breadcrumbs sx={{ color: "#bbb5ae" }} aria-label="breadcrumb">
        {pathArray?.map((link) => (
          <Link
            sx={{
              color: "#bbb5ae",
              "&:hover": {
                color: "#bbb5ae",
              },
            }}
            underline="hover"
            key={link}
            onClick={() => handleBreadcrumbClick(link)}
          >
            {link ? link : "All files"}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
};

export default PathLine;
