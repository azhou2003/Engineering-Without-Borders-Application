"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchAllUsers, updateUserPresident } from "@services/userService";
import DeleteConfirmationDialog from "@components/organisms/DeleteConfirmationDialog";
import {
  CircularProgress,
  Alert,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMediaQuery } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArchiveIcon from "@mui/icons-material/Archive";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const UserListTemplate = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [filter, setFilter] = useState("active");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  const capitalizeAndReplace = (str) => {
    if (!str) return "hello";
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    uin: false,
    tshirt_size: false,
    join_date: false,
    aggie_ring_day: false,
    birthday: false,
    graduation_day: false,
    accepted: false,
    year: false,
  });

  useEffect(() => {
    if (isMobile) {
      setColumnVisibilityModel({
        uin: false,
        first_name: true,
        last_name: true,
        role: false,
        major: false,
        year: false,
        email: true,
        phone: false,
        tshirt_size: false,
        paid_dues: false,
        join_date: false,
        aggie_ring_day: false,
        birthday: false,
        graduation_day: false,
        accepted: false,
      });
    } else {
      setColumnVisibilityModel({
        uin: false,
        first_name: true,
        last_name: true,
        role: true,
        major: true,
        year: true,
        email: true,
        phone: true,
        tshirt_size: false,
        paid_dues: true,
        join_date: false,
        aggie_ring_day: false,
        birthday: false,
        graduation_day: false,
        accepted: false,
      });
    }
  }, [isMobile]);

  const columns = [
    { field: "uin", headerName: "UIN", flex: 1 },
    { field: "first_name", headerName: "First Name", flex: 1 },
    { field: "last_name", headerName: "Last Name", flex: 1 },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      valueGetter: (params) => capitalizeAndReplace(params),
    },
    { field: "major", headerName: "Major", flex: 2 },
    { field: "year", headerName: "Year", flex: 1 },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "phone", headerName: "Phone Number", flex: 1.5 },
    { field: "tshirt_size", headerName: "Shirt Size", flex: 1, hide: false },
    {
      field: "paid_dues",
      headerName: "Dues Paid",
      flex: 1,
      valueGetter: (params) => (params.value ? "Yes" : "No"),
    },
    { field: "join_date", headerName: "Join Date", flex: 1 },
    { field: "aggie_ring_day", headerName: "Ring Date", flex: 1 },
    { field: "birthday", headerName: "Birthday", flex: 1 },
    {
      field: "graduation_day",
      headerName: "Graduation Date",
      flex: 1,
    },
    {
      field: "accepted",
      headerName: "Accepted?",
      flex: 1,
      valueGetter: (params) => (params ? "Yes" : "No"),
    },
    {
      field: "actions",
      sortable: false,
      hideable: false,
      headerName: "",
      renderCell: (params) => (
        <div>
          {filter === "new_applications" ? (
            <div>
              <IconButton onClick={() => handleAccept(params.row.uin)}>
                <CheckIcon color="success" />
              </IconButton>
              <IconButton onClick={() => handleArchive(params.row.uin)}>
                <CloseIcon color="error" />
              </IconButton>
            </div>
          ) : (
            <IconButton onClick={(event) => handleMenuClick(event, params.row)}>
              <MoreVertIcon />
            </IconButton>
          )}

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            slotProps={{
              paper: {
                sx: {
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                },
              },
            }}
          >
            <MenuItem
              onClick={() => router.push(`/Member/${selectedUser?.uin}`)}
            >
              View
            </MenuItem>
            <MenuItem
              onClick={() => router.push(`/Member/${selectedUser?.uin}/Edit`)}
            >
              Edit
            </MenuItem>
            <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
          </Menu>
        </div>
      ),
    },
  ];

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await fetchAllUsers();
        setUsers(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    window.location.reload();
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setOpenDialog(true);
    handleCloseMenu();
  };

  const handleAccept = async (uin) => {
    try {
      await updateUserPresident(uin, { accepted: true });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.uin === uin ? { ...user, accepted: true } : user
        )
      );
    } catch (err) {
      setError(err);
    }
  };

  const handleArchive = async (uin) => {
    try {
      await updateUserPresident(uin, { archived: true });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.uin === uin ? { ...user, archived: true } : user
        )
      );
    } catch (err) {
      setError(err);
    }
  };

  const filteredUsers = users.filter((user) => {
    if (filter === "archived") return user.archived === true;
    if (filter === "new_applications") return !user.accepted && !user.archived;
    if (filter === "active") return user.accepted && !user.archived;
    return true;
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "0 auto",
          gap: "10px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Members
        </Typography>

        {/* Filter buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Box sx={{ display: "flex", gap: isMobile ? "0px" : "10px" }}>
            {isMobile ? (
              filter === "active" ? (
                <Button
                  variant="outlined"
                  onClick={() => setFilter("active")}
                  startIcon={<TaskAltIcon />}
                >
                  Active
                </Button>
              ) : (
                <IconButton onClick={() => setFilter("active")}>
                  <TaskAltIcon sx={{ color: theme.palette.primary.main }} />
                </IconButton>
              )
            ) : (
              <Button
                startIcon={<TaskAltIcon />}
                variant={filter === "active" ? "contained" : "outlined"}
                onClick={() => setFilter("active")}
              >
                Active Members
              </Button>
            )}
            {isMobile ? (
              filter === "new_applications" ? (
                <Button
                  variant="outlined"
                  onClick={() => setFilter("new_applications")}
                  startIcon={<NotificationsNoneIcon />}
                >
                  Applications
                </Button>
              ) : (
                <IconButton onClick={() => setFilter("new_applications")}>
                  <NotificationsNoneIcon
                    sx={{ color: theme.palette.primary.main }}
                  />
                </IconButton>
              )
            ) : (
              <Button
                startIcon={<NotificationsNoneIcon />}
                variant={
                  filter === "new_applications" ? "contained" : "outlined"
                }
                onClick={() => setFilter("new_applications")}
              >
                New Applications
              </Button>
            )}

            {isMobile ? (
              filter === "archived" ? (
                <Button
                  variant="outlined"
                  onClick={() => setFilter("archived")}
                  startIcon={<ArchiveIcon />}
                >
                  Archived
                </Button>
              ) : (
                <IconButton
                  variant="outlined"
                  onClick={() => setFilter("archived")}
                >
                  <ArchiveIcon sx={{ color: theme.palette.primary.main }} />
                </IconButton>
              )
            ) : (
              <Button
                startIcon={<ArchiveIcon />}
                variant={filter === "archived" ? "contained" : "outlined"}
                onClick={() => setFilter("archived")}
              >
                Archived Members
              </Button>
            )}
          </Box>
          <Button
            variant="outlined"
            onClick={() => router.push(`/Project`)}
            startIcon={<ManageAccountsIcon />}
          >
            {isMobile ? "Projects" : "Manage Projects"}
          </Button>
        </Box>

        <DataGrid
          rows={filteredUsers}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.uin}
          disableRowSelectionOnClick
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={setColumnVisibilityModel}
        />
      </Box>

      <DeleteConfirmationDialog
        user={selectedUser}
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        id={selectedUser?.uin}
        setError={setError}
      />
    </>
  );
};

export default UserListTemplate;
