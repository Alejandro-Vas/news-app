import { Skeleton } from "@mui/material";

const SkeletonItem = () => {
  return (
    <>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={350} height={250} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </>
  );
};
export default SkeletonItem;
