import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

import DescriptionItem from './DescriptionItem';

const Description = () => {
  const theme = useTheme();
  
  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin='0 auto'
      paddingTop={2}
      paddingBottom={2}
    >
      <Box
        data-aos='fade-up'
        backgroundColor={theme.palette.background.default}
        paddingTop={4}
      >
        <Container
          maxWidth='lg'
          display='flex'
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            px: {
              md: '15px !important'
            }
          }}
        >
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.primary}
            variant='h1'
            marginTop='30px'
          >
            Cách Phân Loại Hình Ảnh
          </Typography>
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.secondary}
            variant='h4'
            paddingTop={3}
            paddingBottom={3}
            marginBottom='15px'
          >
            
          </Typography>
          <Grid container spacing={4} data-aos='fade-up'>
            <DescriptionItem 
              icon={<AddAPhotoOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Chọn Một Hình Ảnh'
              subtitle='Chọn một hình ảnh để phân loại và kéo và thả nó vào dropzone được cung cấp trong trình duyệt.'
            />
            <DescriptionItem 
              icon={<SendToMobileOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Gửi hình ảnh để phân loại'
              subtitle='Nhấn nút Gửi hình ảnh để gửi hình ảnh đến mô hình máy học để phân loại.'
            />
            <DescriptionItem 
              icon={<GetAppOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Nhận kết quả phân loại'
              subtitle='Tiếp theo, mô hình máy học sẽ phân loại hình ảnh và kết quả phân loại sẽ được in trên màn hình.'
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Description;