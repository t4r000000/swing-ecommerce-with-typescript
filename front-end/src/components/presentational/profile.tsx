import { VFC } from 'react';
import { Box } from '@chakra-ui/react';

import { useRouter } from 'next/router';

type Props = {
  isLogin: boolean;
  userName: string;
};

const Profile: VFC<Props> = ({ isLogin, userName }: Props) => {
  const router = useRouter();

  const loginHandleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    void router.push('/signin/redirect');
  };

  return isLogin ? (
    <Box p={4}>{userName}</Box>
  ) : (
    <Box p={4} onClick={loginHandleClick}>
      ログインして
    </Box>
  );
};
export default Profile;
