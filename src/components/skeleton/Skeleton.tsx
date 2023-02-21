import { Skeleton as MuiSkeleton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function Skeleton() {
  return (
    <>
      {Array.from(Array(4)).map(() => <MuiSkeleton variant="text" key={uuidv4()} />) }

      <MuiSkeleton variant="rectangular" width={320} height={240} />

      {Array.from(Array(20)).map(() => <MuiSkeleton variant="text" key={uuidv4()} />)}
    </>
  );
}
export default Skeleton;
