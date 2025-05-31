import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Autocomplete,
  Stack,
  TextField,
  Typography,
  createFilterOptions,
} from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Iconify from '../../../components/iconify';
import { useAuth } from '../../../hooks/useAuth';
import SelectOpt from '../../../components/Select';

const BorrowalForm = ({
  handleAddBorrowal,
  handleUpdateBorrowal,
  isUpdateForm,
  isModalOpen,
  handleCloseModal,
  borrowal,
  setBorrowal,
}) => {
  const { user } = useAuth();
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);

  const getAllMembers = () => {
    axios
      .get('http://localhost:8080/api/user/getAllMembers')
      .then((response) => {
        // handle success
        console.log(response.data);
        if (user.isAdmin) {
          setMembers(response.data.membersList);
        } else {
          setMembers(response.data.membersList.filter((member) => user._id === member._id));
        }
        setBorrowal({ ...borrowal, memberId: user._id });
      })
      .catch((error) => {
        // handle error
        toast.error('Error fetching members');
        console.log(error);
      });
  };

  const getAllBooks = () => {
    axios
      .get('http://localhost:8080/api/book/getAll')
      .then((response) => {
        // handle success
        console.log(response.data);
        setBooks(response.data.booksList);
      })
      .catch((error) => {
        // handle error
        toast.error('Error fetching books');
        console.log(error);
      });
  };

  // const filterOptions = createFilterOptions({
  //   matchFrom: 'any',
  //   stringify: (option) => option.name?.toLowerCase().replace(/[^a-z0-9 ]/gi, ''),
  // });

  // Load data on initial page load
  useEffect(() => {
    getAllMembers();
    getAllBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white',
    borderRadius: '20px',
    boxShadow: 16,
    p: 4,
  };

  const bookOptions = books
    .filter((book) => book.isAvailable)
    .map((book) => ({
      key: book._id,
      text: book.name,
      value: book._id,
    }));

  const normalize = (str) =>
    str
      ?.toLowerCase()
      .replace(/[^a-z0-9 ]/gi, '')
      .trim();

  const filterOptions = (options, { inputValue }) => {
    const searchWords = normalize(inputValue).split(/\s+/);

    return options.filter((option) => {
      const name = normalize(option.name);
      return searchWords.every((word) => name.includes(word));
    });
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container>
          <Typography variant="h4" textAlign="center" paddingBottom={2} paddingTop={1}>
            {isUpdateForm ? <span>Update</span> : <span>Add</span>} Reservation
          </Typography>
          <Stack spacing={3} paddingY={2}>
            <Grid container spacing={0} sx={{ paddingBottom: '4px' }}>
              <Grid item xs={12} md={6} paddingRight={1}>
                <FormControl sx={{ m: 0 }} fullWidth>
                  <InputLabel id="member-label">Member</InputLabel>
                  <Select
                    required
                    disabled={!user.isAdmin}
                    labelId="member-label"
                    id="member"
                    value={borrowal.memberId}
                    label="Member"
                    onChange={(e) => setBorrowal({ ...borrowal, memberId: e.target.value })}
                  >
                    {members.map((member) => (
                      <MenuItem key={member._id} value={member._id}>
                        {member.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} paddingLeft={1}>
                <FormControl sx={{ m: 0 }} fullWidth>
                  {/* <Select
                    required
                    labelId="book-label"
                    id="book"
                    value={borrowal.bookId}
                    label="Book"
                    onChange={(e) => setBorrowal({ ...borrowal, bookId: e.target.value })}
                  >
                    {books
                      .filter((book) => book.isAvailable)
                      .map((book) => (
                        <MenuItem key={book._id} value={book._id}>
                          {book.name}
                        </MenuItem>
                      ))}
                  </Select> */}
                  <Autocomplete
                    fullWidth
                    options={books.filter((book) => book.isAvailable)}
                    getOptionLabel={(option) => option.name}
                    filterOptions={filterOptions}
                    value={books.find((book) => book._id === borrowal.bookId) || null}
                    onChange={(event, newValue) => {
                      setBorrowal({ ...borrowal, bookId: newValue ? newValue._id : '' });
                    }}
                    renderInput={(params) => <TextField {...params} label="Book" required />}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={0} sx={{ paddingBottom: '4px' }}>
              <Grid item xs={12} md={6} paddingRight={1}>
                <TextField
                  fullWidth
                  name="borrowedDate"
                  label="Reservation date"
                  type="text"
                  value={String(borrowal.borrowedDate).split('T')[0]}
                  required
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setBorrowal({ ...borrowal, borrowedDate: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6} paddingLeft={1}>
                <TextField
                  fullWidth
                  name="dueDate"
                  label="Due date"
                  type="text"
                  value={String(borrowal.dueDate).split('T')[0]}
                  required
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => setBorrowal({ ...borrowal, dueDate: e.target.value })}
                />
              </Grid>
            </Grid>
            {user.isAdmin && (
              <>
                <label
                  htmlFor="status"
                  style={{
                    display: `flex`,
                    flexDirection: `row`,
                    gap: `2%`,
                    justifyContent: `center`,
                    alignItems: `center`,
                  }}
                >
                  Status:
                  <select
                    name="status"
                    id="status"
                    value={borrowal.status}
                    required
                    onChange={(e) => setBorrowal({ ...borrowal, status: e.target.value })}
                    style={{ padding: `1%`, width: `100%` }}
                  >
                    <option value={null}>--Select options--</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </label>
              </>
            )}

            <br />
            <Box textAlign="center">
              <Box textAlign="center" paddingBottom={2}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={isUpdateForm ? handleUpdateBorrowal : handleAddBorrowal}
                  startIcon={<Iconify icon="bi:check-lg" />}
                  style={{ marginRight: '12px' }}
                >
                  Submit
                </Button>

                <Button
                  size="large"
                  color="inherit"
                  variant="contained"
                  onClick={handleCloseModal}
                  startIcon={<Iconify icon="charm:cross" />}
                  style={{ marginLeft: '12px' }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Modal>
  );
};

BorrowalForm.propTypes = {
  isUpdateForm: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  borrowal: PropTypes.object,
  setBorrowal: PropTypes.func,
  handleAddBorrowal: PropTypes.func,
  handleUpdateBorrowal: PropTypes.func,
};

export default BorrowalForm;
