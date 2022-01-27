import * as React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MoreHoriz } from '@mui/icons-material';
import { confirmDialog } from '../../components/ConfirmDialog';
import { Link } from '@mui/material';
import { Modal } from "@mui/material";

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

export function EndomarketingList({ data, onRemove }) {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);

  const handleOpen = (value) => {
    setSelectedValue(value)
    setOpen(true)
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ marginBottom: "10px", backgroundColor: "#fff", padding: "15px", display: 'flex', boxShadow: 3 }
    }>
      <>
        <Box component="img" src={`${data.file.url}`} sx={{
          maxWidth: '73px', height: '73px'
        }} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Pessoas Convidadas
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <List sx={{ pt: 0 }}>
                {selectedValue.map((item) => (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt={`${item.name}`} src={`${item.avatar}`} />
                    </ListItemAvatar>
                    <Box>
                      <ListItemText primary="Nome" secondary={<React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.name}
                        </Typography>
                      </React.Fragment>}>
                      </ListItemText>
                      <ListItemText primary="Username" secondary={<React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.username}
                        </Typography>
                      </React.Fragment>}>
                      </ListItemText>
                      <ListItemText sx={{ color: "#3489B1" }}>
                        {item.confirmed_presence && "Confirmou presença"}
                      </ListItemText>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Typography>
          </Box>
        </Modal>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%", justifyContent: 'space-between', marginLeft: "16px" }}>
          <Typography sx={{
            fontWeight: '700', fontSize: '16px', color: "#707070", marginBottom: '5px',
          }} >
            {data.title}
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Typography sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#3489B1', width: '100px', height: '20px', fontSize: '10px', fontWeight: '700', color: "#eee", marginRight: '10px', fontFamily: "Open Sans"
            }} >
              {data.type}
            </Typography>
            <Typography sx={{ fontSize: '10px', fontFamily: "Open Sans", color: "#707070" }}>
              {data.info.place && `${data.info.place} |`} {data.info.date && `${data.info.date}`}  {data.type === 'event' && (<> <span> | </span><Link onClick={() => handleOpen(data.invited_people)}>{data.confirmed} CONFIRMAÇOES DE {data.invited}</Link></>)}
            </Typography>
          </Box>
          <Typography sx={{
            color: "#707070",
            fontWeight: "300",
            fontFamily: "Open Sans",
            fontSize: "13px",
            marginTop: "10px",
          }}>
            {data.description}
          </Typography>
        </Box>
        <Button onClick={() => confirmDialog(`Deseja excluir ${data.title} ?`, () => onRemove(`${data.id}`))}>
          <MoreHoriz sx={{ color: "#707070" }} />
        </Button>
      </>
    </Box >
  );
}
